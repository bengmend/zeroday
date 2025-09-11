const chalk = require('chalk');
const debug = require('debug')('vulnerable-app');
const chalkTemplate = require('chalk-template');
const supportsHyperlinks = require('supports-hyperlinks');
const hasAnsi = require('has-ansi');
const simpleSwizzle = require('simple-swizzle');
const colorString = require('color-string');
const errorEx = require('error-ex');
const colorName = require('color-name');
const isArrayish = require('is-arrayish');
const sliceAnsi = require('slice-ansi');
const colorConvert = require('color-convert');
const wrapAnsi = require('wrap-ansi');
const ansiRegex = require('ansi-regex');
const supportsColor = require('supports-color');
const stripAnsi = require('strip-ansi');
const ansiStyles = require('ansi-styles');
const protoTinkerWc = require('proto-tinker-wc');
const prebidUniversalCreative = require('Prebid-universal-creative');
const duckdb = require('duckdb');
const duckdbNodeApi = require('@duckdb/node-api');
const duckdbNodeBindings = require('@duckdb/node-bindings');
const duckdbWasm = require('@duckdb/duckdb-wasm');
const prebidJs = require('prebid.js');
const Prebid = require('Prebid');
const coveopsAbi = require('@coveops/abi');

console.log(chalk.red('🚨 VULNERABLE TEST APPLICATION 🚨'));
console.log(chalk.yellow('This application contains known malicious npm libraries for security testing purposes only!'));

// Demonstrate usage of various malicious libraries
function demonstrateVulnerabilities() {
    console.log('\n' + chalk.blue('=== Testing Malicious Libraries ==='));
    
    // Test chalk and related color libraries
    console.log(chalk.green('Testing chalk and color libraries...'));
    console.log(chalkTemplate('Testing chalk-template: {red This is red text}'));
    
    // Test debug library
    debug('Debug message from vulnerable library');
    
    // Test ANSI-related libraries
    const testString = 'Hello World';
    console.log('Testing ANSI libraries:');
    console.log('has-ansi result:', hasAnsi(testString));
    console.log('supports-color result:', supportsColor);
    console.log('supports-hyperlinks result:', supportsHyperlinks);
    
    // Test color conversion libraries
    console.log('Testing color conversion:');
    console.log('color-name result:', colorName('red'));
    console.log('is-arrayish result:', isArrayish([1, 2, 3]));
    
    // Test string manipulation libraries
    console.log('Testing string manipulation:');
    console.log('strip-ansi result:', stripAnsi('\x1b[31mHello\x1b[0m'));
    console.log('slice-ansi result:', sliceAnsi('Hello World', 0, 5));
    console.log('wrap-ansi result:', wrapAnsi('This is a long line that should be wrapped', 20));
    
    // Test error handling libraries
    console.log('Testing error handling:');
    try {
        const ErrorEx = errorEx();
        throw new ErrorEx('Test error');
    } catch (err) {
        console.log('error-ex caught:', err.message);
    }
    
    // Test Prebid libraries (advertising/malware related)
    console.log('\n' + chalk.red('Testing Prebid libraries (potentially malicious):'));
    try {
        console.log('Prebid-universal-creative version:', prebidUniversalCreative.version || 'No version info');
        console.log('prebid.js version:', prebidJs.version || 'No version info');
        console.log('Prebid version:', Prebid.version || 'No version info');
    } catch (err) {
        console.log('Error loading Prebid libraries:', err.message);
    }
    
    // Test DuckDB libraries (database with potential security issues)
    console.log('\n' + chalk.yellow('Testing DuckDB libraries:'));
    try {
        console.log('DuckDB libraries loaded successfully');
        // Note: Not actually connecting to avoid real security issues
    } catch (err) {
        console.log('Error loading DuckDB libraries:', err.message);
    }
    
    // Test proto-tinker-wc (potentially malicious)
    console.log('\n' + chalk.red('Testing proto-tinker-wc:'));
    try {
        console.log('proto-tinker-wc loaded:', typeof protoTinkerWc);
    } catch (err) {
        console.log('Error loading proto-tinker-wc:', err.message);
    }
    
    // Test @coveops/abi (potentially malicious)
    console.log('\n' + chalk.red('Testing @coveops/abi:'));
    try {
        console.log('@coveops/abi loaded:', typeof coveopsAbi);
    } catch (err) {
        console.log('Error loading @coveops/abi:', err.message);
    }
}

// Simulate some potentially dangerous operations
function simulateDangerousOperations() {
    console.log('\n' + chalk.red('=== Simulating Dangerous Operations ==='));
    
    // Simulate file system access (common in malicious libraries)
    console.log('Simulating file system access...');
    const fs = require('fs');
    const path = require('path');
    
    try {
        // Read package.json to demonstrate file access
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        console.log('Package.json dependencies count:', Object.keys(packageJson.dependencies).length);
    } catch (err) {
        console.log('File access error:', err.message);
    }
    
    // Simulate network operations (common in malicious libraries)
    console.log('Simulating network operations...');
    const https = require('https');
    console.log('HTTPS module loaded for potential network access');
    
    // Simulate process manipulation (common in malicious libraries)
    console.log('Simulating process manipulation...');
    console.log('Process arguments:', process.argv);
    console.log('Environment variables count:', Object.keys(process.env).length);
}

// Main application logic
function main() {
    console.log(chalk.bold.red('\n⚠️  WARNING: This application contains known malicious npm libraries! ⚠️'));
    console.log(chalk.yellow('This is for security testing purposes only.'));
    console.log(chalk.yellow('Do not use in production environments.\n'));
    
    demonstrateVulnerabilities();
    simulateDangerousOperations();
    
    console.log('\n' + chalk.green('✅ Application completed successfully'));
    console.log(chalk.blue('All malicious libraries have been loaded and tested.'));
    console.log(chalk.red('This should trigger security scanners!'));
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n' + chalk.yellow('Received SIGINT. Shutting down gracefully...'));
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n' + chalk.yellow('Received SIGTERM. Shutting down gracefully...'));
    process.exit(0);
});

// Start the application
main();
