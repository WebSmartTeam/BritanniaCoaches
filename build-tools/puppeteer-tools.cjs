#!/usr/bin/env node

/**
 * Enhanced Puppeteer Tools for Britannia Coaches
 * Professional screenshot and analysis tools
 */

const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function createDirectoryIfNotExists(dirPath) {
  try {
    await fs.access(dirPath);
  } catch (error) {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

async function screenshotSite(url, options = {}) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent screenshots
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1
    });
    
    console.log(`Navigating to: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait a bit more for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const outputDir = options.outputDir || 'analysis/original-site/screenshots';
    const filenamePrefix = options.filenamePrefix || 'homepage';
    
    // Create output directory
    await createDirectoryIfNotExists(outputDir);
    
    // Take viewport screenshot
    const viewportPath = path.join(outputDir, `${filenamePrefix}-viewport.png`);
    await page.screenshot({
      path: viewportPath,
      fullPage: false
    });
    console.log(`Viewport screenshot saved: ${viewportPath}`);
    
    // Take full page screenshot
    const fullPagePath = path.join(outputDir, `${filenamePrefix}-full.png`);
    await page.screenshot({
      path: fullPagePath,
      fullPage: true
    });
    console.log(`Full page screenshot saved: ${fullPagePath}`);
    
    // Get page title and URL for reference
    const title = await page.title();
    const currentUrl = page.url();
    
    console.log(`Page title: ${title}`);
    console.log(`Screenshots captured for: ${currentUrl}`);
    
    return {
      title,
      url: currentUrl,
      viewportPath,
      fullPagePath
    };
    
  } catch (error) {
    console.error('Error taking screenshot:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

async function analyzeSite(url) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    console.log(`Analyzing site: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Extract basic site information
    const siteInfo = await page.evaluate(() => {
      return {
        title: document.title,
        url: window.location.href,
        meta: {
          description: document.querySelector('meta[name="description"]')?.content || '',
          keywords: document.querySelector('meta[name="keywords"]')?.content || '',
          author: document.querySelector('meta[name="author"]')?.content || ''
        },
        headings: {
          h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim()),
          h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()),
          h3: Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim())
        },
        links: Array.from(document.querySelectorAll('a[href]')).map(a => ({
          text: a.textContent.trim(),
          href: a.href
        })).filter(link => link.text && link.href),
        images: Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || '',
          title: img.title || ''
        }))
      };
    });
    
    console.log('Site analysis complete');
    return siteInfo;
    
  } catch (error) {
    console.error('Error analyzing site:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command) {
    console.log(`
Usage: node puppeteer-tools.cjs <command> [options]

Commands:
  screenshot-site <url>     Take screenshots of a website
  analyze-site <url>        Analyze website structure and content
  
Options:
  --output-dir <dir>        Output directory for screenshots
  --filename-prefix <name>  Prefix for screenshot filenames
  
Examples:
  node puppeteer-tools.cjs screenshot-site http://localhost:3000
  node puppeteer-tools.cjs screenshot-site http://localhost:3000 --output-dir screenshots --filename-prefix current
  node puppeteer-tools.cjs analyze-site https://example.com
    `);
    return;
  }
  
  const url = args[1];
  if (!url) {
    console.error('Error: URL is required');
    process.exit(1);
  }
  
  // Parse additional options
  const options = {};
  for (let i = 2; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];
    
    if (key === '--output-dir') {
      options.outputDir = value;
    } else if (key === '--filename-prefix') {
      options.filenamePrefix = value;
    }
  }
  
  try {
    switch (command) {
      case 'screenshot-site':
        await screenshotSite(url, options);
        break;
      case 'analyze-site':
        const analysis = await analyzeSite(url);
        console.log('Analysis results:', JSON.stringify(analysis, null, 2));
        break;
      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (error) {
    console.error('Command failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  screenshotSite,
  analyzeSite
};