#!/bin/bash

# Britannia Coaches Image Extraction Script
# This script extracts all images from the original website

SITE_URL="https://www.britanniacoaches.co.uk"
BASE_DIR="/Users/anish/Documents/AiFarm/ANISH-MASTER-001/projects/BritanniaCoaches/archive/assets/images/original-site"
TEMP_DIR="/tmp/britannia_extraction"

# Create temporary directory
mkdir -p "$TEMP_DIR"

echo "🚌 Starting Britannia Coaches Image Extraction..."
echo "📂 Base directory: $BASE_DIR"
echo "🌐 Target site: $SITE_URL"
echo ""

# Function to download and categorize images
download_and_categorize() {
    local url="$1"
    local filename="$2"
    local category="misc"
    
    # Determine category based on filename/URL
    if [[ "$filename" =~ [Ll]ogo || "$url" =~ [Ll]ogo ]]; then
        category="logos"
    elif [[ "$filename" =~ [Hh]ero || "$filename" =~ [Bb]anner || "$url" =~ [Hh]ero || "$url" =~ [Bb]anner ]]; then
        category="heroes"
    elif [[ "$filename" =~ [Cc]oach || "$filename" =~ [Bb]us || "$url" =~ [Cc]oach || "$url" =~ [Bb]us || "$filename" =~ [Ff]leet ]]; then
        category="coaches"
    elif [[ "$filename" =~ [Ss]ervice || "$url" =~ [Ss]ervice ]]; then
        category="services"
    fi
    
    # Download the image
    echo "📥 Downloading: $filename -> $category/"
    wget -q --timeout=30 --tries=3 -O "$BASE_DIR/$category/$filename" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Success: $filename"
        # Get image info
        if command -v identify >/dev/null 2>&1; then
            identify "$BASE_DIR/$category/$filename" 2>/dev/null | head -1
        else
            ls -lh "$BASE_DIR/$category/$filename" | awk '{print $5, $9}'
        fi
    else
        echo "❌ Failed: $filename"
        rm -f "$BASE_DIR/$category/$filename"
    fi
}

# Step 1: Download the main pages to extract image URLs
echo "🔍 Step 1: Downloading main pages for analysis..."
pages=(
    ""
    "/about"
    "/services"
    "/fleet"
    "/contact"
    "/gallery"
    "/coaches"
    "/minibus"
    "/executive"
)

for page in "${pages[@]}"; do
    echo "📄 Downloading: $SITE_URL$page"
    wget -q --timeout=30 --tries=3 -O "$TEMP_DIR/page_${page//\//_}.html" "$SITE_URL$page" 2>/dev/null
done

# Step 2: Extract all image URLs from downloaded pages
echo ""
echo "🔍 Step 2: Extracting image URLs from pages..."
find "$TEMP_DIR" -name "*.html" -exec grep -hoE 'src="[^"]*\.(jpg|jpeg|png|gif|webp|svg)"' {} \; | \
    sed 's/src="//g' | sed 's/"//g' | sort | uniq > "$TEMP_DIR/image_urls.txt"

# Also extract from CSS and inline styles
find "$TEMP_DIR" -name "*.html" -exec grep -hoE 'url\([^)]*\.(jpg|jpeg|png|gif|webp|svg)\)' {} \; | \
    sed 's/url(//g' | sed 's/)//g' | sed 's/["\x27]//g' | sort | uniq >> "$TEMP_DIR/image_urls.txt"

# Step 3: Download CSS files to extract background images
echo ""
echo "🔍 Step 3: Extracting CSS files for background images..."
find "$TEMP_DIR" -name "*.html" -exec grep -hoE 'href="[^"]*\.css"' {} \; | \
    sed 's/href="//g' | sed 's/"//g' | sort | uniq > "$TEMP_DIR/css_urls.txt"

while IFS= read -r css_url; do
    if [[ "$css_url" =~ ^// ]]; then
        css_url="https:$css_url"
    elif [[ "$css_url" =~ ^/ ]]; then
        css_url="$SITE_URL$css_url"
    elif [[ ! "$css_url" =~ ^https? ]]; then
        css_url="$SITE_URL/$css_url"
    fi
    
    echo "📄 Downloading CSS: $css_url"
    wget -q --timeout=30 --tries=3 -O "$TEMP_DIR/style_$(basename "$css_url").css" "$css_url" 2>/dev/null
done < "$TEMP_DIR/css_urls.txt"

# Extract images from CSS files
find "$TEMP_DIR" -name "*.css" -exec grep -hoE 'url\([^)]*\.(jpg|jpeg|png|gif|webp|svg)\)' {} \; | \
    sed 's/url(//g' | sed 's/)//g' | sed 's/["\x27]//g' | sort | uniq >> "$TEMP_DIR/image_urls.txt"

# Step 4: Process and download all unique images
echo ""
echo "🔍 Step 4: Processing and downloading images..."
sort "$TEMP_DIR/image_urls.txt" | uniq > "$TEMP_DIR/unique_images.txt"

counter=0
total=$(wc -l < "$TEMP_DIR/unique_images.txt")

while IFS= read -r img_url; do
    counter=$((counter + 1))
    
    # Clean and normalize URL
    img_url=$(echo "$img_url" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    
    if [[ "$img_url" =~ ^// ]]; then
        img_url="https:$img_url"
    elif [[ "$img_url" =~ ^/ ]]; then
        img_url="$SITE_URL$img_url"
    elif [[ ! "$img_url" =~ ^https? ]]; then
        img_url="$SITE_URL/$img_url"
    fi
    
    # Extract filename
    filename=$(basename "$img_url" | sed 's/[?#].*//')
    
    # Skip if no proper filename
    if [[ -z "$filename" || "$filename" == "." ]]; then
        filename="image_$counter.jpg"
    fi
    
    # Make filename safe
    filename=$(echo "$filename" | sed 's/[^a-zA-Z0-9._-]/_/g')
    
    echo "[$counter/$total] Processing: $img_url"
    download_and_categorize "$img_url" "$filename"
    
done < "$TEMP_DIR/unique_images.txt"

# Step 5: Try to get additional images using different methods
echo ""
echo "🔍 Step 5: Attempting to find additional images..."

# Try to download common image locations
common_paths=(
    "/images/logo.png"
    "/images/logo.jpg"
    "/assets/images/logo.png"
    "/assets/images/logo.jpg"
    "/img/logo.png"
    "/img/logo.jpg"
    "/favicon.ico"
    "/images/hero.jpg"
    "/images/banner.jpg"
    "/images/coach.jpg"
    "/images/bus.jpg"
)

for path in "${common_paths[@]}"; do
    filename=$(basename "$path")
    echo "🎯 Trying common path: $SITE_URL$path"
    wget -q --timeout=30 --tries=3 -O "$TEMP_DIR/common_$filename" "$SITE_URL$path" 2>/dev/null
    
    if [ $? -eq 0 ] && [ -s "$TEMP_DIR/common_$filename" ]; then
        download_and_categorize "$SITE_URL$path" "common_$filename"
    else
        rm -f "$TEMP_DIR/common_$filename"
    fi
done

# Step 6: Generate report
echo ""
echo "📊 Step 6: Generating extraction report..."
echo "===========================================" > "$BASE_DIR/extraction_report.txt"
echo "BRITANNIA COACHES IMAGE EXTRACTION REPORT" >> "$BASE_DIR/extraction_report.txt"
echo "===========================================" >> "$BASE_DIR/extraction_report.txt"
echo "Date: $(date)" >> "$BASE_DIR/extraction_report.txt"
echo "Source: $SITE_URL" >> "$BASE_DIR/extraction_report.txt"
echo "" >> "$BASE_DIR/extraction_report.txt"

for dir in logos heroes coaches services misc; do
    count=$(find "$BASE_DIR/$dir" -type f | wc -l)
    echo "📁 $dir/: $count images" >> "$BASE_DIR/extraction_report.txt"
    
    if [ $count -gt 0 ]; then
        echo "   Files:" >> "$BASE_DIR/extraction_report.txt"
        find "$BASE_DIR/$dir" -type f -exec basename {} \; | sort | sed 's/^/     - /' >> "$BASE_DIR/extraction_report.txt"
        echo "" >> "$BASE_DIR/extraction_report.txt"
    fi
done

total_images=$(find "$BASE_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" | wc -l)
echo "📊 Total images extracted: $total_images" >> "$BASE_DIR/extraction_report.txt"

# Cleanup
rm -rf "$TEMP_DIR"

echo ""
echo "✅ Extraction complete!"
echo "📊 Total images extracted: $total_images"
echo "📋 Report saved to: $BASE_DIR/extraction_report.txt"
echo ""
echo "📁 Directory structure:"
ls -la "$BASE_DIR"