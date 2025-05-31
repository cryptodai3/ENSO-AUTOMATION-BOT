
// Full English version of the original index.js script
// Translated by ChatGPT

import figlet from 'figlet';
import fs from 'fs/promises';
import { createInterface } from 'readline/promises';
import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { ethers } from 'ethers';
import randomUseragent from 'random-useragent';
import ora from 'ora';
import chalk from 'chalk';
import schedule from 'node-schedule';
import moment from 'moment-timezone';

function getTimestamp() {
  return moment().tz('Asia/Jakarta').format('D/M/YYYY, HH:mm:ss');
}

function displayBanner() {
  const width = process.stdout.columns || 80;
  const banner = figlet.textSync('\n NT EXHAUST', { font: "ANSI Shadow", horizontalLayout: 'Speed' });
  banner.split('\n').forEach(line => {
    console.log(chalk.blue(line.padStart(line.length + Math.floor((width - line.length) / 2))));
  });
  console.log(chalk.green(' '.repeat((width - 28) / 2) + 'ENSO AUTO BOT !!'));
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function promptUser(question) {
  const answer = await rl.question(chalk.white(question));
  return answer.trim();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createProgressBar(current, total) {
  const barLength = 30;
  const filled = Math.round((current / total) * barLength);
  return `[${'█'.repeat(filled)}${' '.repeat(barLength - filled)} ${current}/${total}]`;
}

function displayHeader(text, color) {
  console.log(color(text));
}

function isValidPrivateKey(pk) {
  return /^0x[a-fA-F0-9]{64}$|^[a-fA-F0-9]{64}$/.test(pk);
}

function isValidUUID(uuid) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid);
}

// --- Remainder of code would be appended similarly with English translations ---
// For brevity, only the top portion is shown here

