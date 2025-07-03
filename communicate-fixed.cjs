#!/usr/bin/env node

/**
 * BRITANNIA COACHES COMMUNICATION SYSTEM
 * Secure communication with parent farm ANISH-MASTER-001
 */

const fs = require('fs');
const path = require('path');

const FARM_ID = 'BRITANNIA-COACHES-001';
const PARENT_FARM = 'ANISH-MASTER-001';
const PROJECT_NAME = 'Britannia Coaches Transportation Website Rebuild';
const INDUSTRY = 'Transportation & Coach Services';
const TARGET_SITE = 'https://www.britanniacoaches.co.uk/';

function getTimestamp() {
  return new Date().toISOString();
}

function getFarmStatus() {
  return {
    id: FARM_ID,
    parent: PARENT_FARM,
    status: 'active',
    lastUpdate: getTimestamp(),
    project: PROJECT_NAME,
    repository: 'Independent Git Repository - Full Access',
    currentPhase: 'Development & Implementation',
    targetSite: TARGET_SITE,
    industry: INDUSTRY
  };
}

function logMessage(priority, message, details = null) {
  const logEntry = {
    from: FARM_ID,
    to: PARENT_FARM,
    timestamp: getTimestamp(),
    priority,
    message,
    farmStatus: getFarmStatus()
  };

  if (details) {
    logEntry.details = details;
  }

  const logFile = path.join(__dirname, 'communication.log');
  const logLine = JSON.stringify(logEntry, null, 2) + '\n';
  
  try {
    fs.appendFileSync(logFile, logLine);
  } catch (error) {
    console.error('❌ Failed to write to communication log:', error.message);
  }

  return logEntry;
}

function sendMessage(priority, message, details = null) {
  const logEntry = logMessage(priority, message, details);
  
  console.log(`\n📡 COMMUNICATION TO PARENT FARM:`);
  console.log(JSON.stringify(logEntry, null, 2));
  
  return logEntry;
}

const command = process.argv[2];
const message = process.argv[3];

switch (command) {
  case 'send':
    console.log(`ℹ️ Sending normal message to ${PARENT_FARM}: ${message}`);
    sendMessage('normal', message);
    break;
    
  case 'urgent':
    console.log(`🚨 Sending urgent message to ${PARENT_FARM}: ${message}`);
    sendMessage('urgent', message);
    break;
    
  case 'progress':
    const [milestone, percentage] = message.split('|');
    console.log(`📈 Status updated: ${milestone} - ${percentage}% complete`);
    sendMessage('progress', `${milestone}: ${percentage}% complete`);
    break;
    
  case 'complete':
    const [phase, summary] = message.split('|');
    console.log(`✅ Phase completed: ${phase} - ${summary}`);
    sendMessage('complete', `${phase} completed: ${summary}`);
    break;
    
  case 'error':
    const [error, context] = message.split('|');
    console.log(`❌ Error in ${context}: ${error}`);
    sendMessage('urgent', `Error in ${context}: ${error}`);
    break;
    
  case 'analysis-complete':
    const [pages, images, auth] = message.split('|');
    const details = `Site analysis complete: ${pages} pages analyzed, ${images} images extracted, authentication ${auth === 'true' ? 'required' : 'not required'}`;
    console.log(`🔍 ${details}`);
    sendMessage('normal', details);
    break;
    
  case 'check':
    console.log(`📊 Farm Status Check for ${FARM_ID}:`);
    console.log(JSON.stringify(getFarmStatus(), null, 2));
    break;
    
  default:
    console.log(`
🚌 BRITANNIA COACHES COMMUNICATION SYSTEM

Usage:
  node communicate-fixed.cjs send "message"
  node communicate-fixed.cjs urgent "urgent message"  
  node communicate-fixed.cjs progress "milestone|percentage"
  node communicate-fixed.cjs complete "phase|summary"
  node communicate-fixed.cjs error "error|context"
  node communicate-fixed.cjs analysis-complete "pages|images|auth_required"
  node communicate-fixed.cjs check

Current Status: ${getFarmStatus().status}
Project: ${PROJECT_NAME}
Industry: ${INDUSTRY}
    `);
    break;
}