const assert = require('assert');

console.log('🧪 Running vulnerability tests...\n');

// Test that all malicious libraries can be loaded
function testLibraryLoading() {
    console.log('Testing library loading...');
    
    const libraries = [
        'backslash',
        'chalk-template',
        'supports-hyperlinks',
        'has-ansi',
        'simple-swizzle',
        'color-string',
        'error-ex',
        'color-name',
        'is-arrayish',
        'slice-ansi',
        'color-convert',
        'wrap-ansi',
        'ansi-regex',
        'supports-color',
        'strip-ansi',
        'chalk',
        'debug',
        'ansi-styles',
        'proto-tinker-wc',
        'Prebid-universal-creative',
        'duckdb',
        '@duckdb/node-api',
        '@duckdb/node-bindings',
        '@duckdb/duckdb-wasm',
        'prebid.js',
        'Prebid',
        '@coveops/abi'
    ];
    
    let loadedCount = 0;
    let failedCount = 0;
    
    libraries.forEach(lib => {
        try {
            require(lib);
            console.log(`✅ ${lib} - loaded successfully`);
            loadedCount++;
        } catch (err) {
            console.log(`❌ ${lib} - failed to load: ${err.message}`);
            failedCount++;
        }
    });
    
    console.log(`\nLibrary loading results: ${loadedCount} loaded, ${failedCount} failed`);
    return { loaded: loadedCount, failed: failedCount };
}

// Test specific malicious behaviors
function testMaliciousBehaviors() {
    console.log('\nTesting malicious behaviors...');
    
    // Test chalk functionality
    try {
        const chalk = require('chalk');
        const coloredText = chalk.red('This should be red');
        console.log('✅ Chalk color functionality works');
    } catch (err) {
        console.log('❌ Chalk test failed:', err.message);
    }
    
    // Test debug functionality
    try {
        const debug = require('debug')('test');
        debug('Debug message test');
        console.log('✅ Debug functionality works');
    } catch (err) {
        console.log('❌ Debug test failed:', err.message);
    }
    
    // Test ANSI functionality
    try {
        const stripAnsi = require('strip-ansi');
        const hasAnsi = require('has-ansi');
        const testString = '\x1b[31mHello\x1b[0m';
        
        assert(hasAnsi(testString), 'has-ansi should detect ANSI codes');
        assert(stripAnsi(testString) === 'Hello', 'strip-ansi should remove ANSI codes');
        console.log('✅ ANSI functionality works');
    } catch (err) {
        console.log('❌ ANSI test failed:', err.message);
    }
    
    // Test color conversion
    try {
        const colorConvert = require('color-convert');
        const colorName = require('color-name');
        
        assert(colorName.red === 255, 'color-name should work');
        console.log('✅ Color conversion works');
    } catch (err) {
        console.log('❌ Color conversion test failed:', err.message);
    }
    
    // Test array utilities
    try {
        const isArrayish = require('is-arrayish');
        
        assert(isArrayish([1, 2, 3]), 'is-arrayish should detect arrays');
        assert(!isArrayish('string'), 'is-arrayish should not detect strings as arrays');
        console.log('✅ Array utilities work');
    } catch (err) {
        console.log('❌ Array utilities test failed:', err.message);
    }
}

// Test potentially dangerous operations
function testDangerousOperations() {
    console.log('\nTesting potentially dangerous operations...');
    
    // Test file system access
    try {
        const fs = require('fs');
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        assert(packageJson.name === 'vulnerable-test-project', 'Should be able to read package.json');
        console.log('✅ File system access works');
    } catch (err) {
        console.log('❌ File system access test failed:', err.message);
    }
    
    // Test process manipulation
    try {
        assert(typeof process.argv === 'object', 'Should have access to process.argv');
        assert(typeof process.env === 'object', 'Should have access to process.env');
        console.log('✅ Process manipulation works');
    } catch (err) {
        console.log('❌ Process manipulation test failed:', err.message);
    }
    
    // Test network modules
    try {
        const https = require('https');
        const http = require('http');
        assert(typeof https.request === 'function', 'Should have access to HTTPS module');
        assert(typeof http.request === 'function', 'Should have access to HTTP module');
        console.log('✅ Network modules accessible');
    } catch (err) {
        console.log('❌ Network modules test failed:', err.message);
    }
}

// Run all tests
function runTests() {
    console.log('🚨 VULNERABILITY TEST SUITE 🚨\n');
    
    const loadingResults = testLibraryLoading();
    testMaliciousBehaviors();
    testDangerousOperations();
    
    console.log('\n' + '='.repeat(50));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(50));
    console.log(`Libraries loaded: ${loadingResults.loaded}`);
    console.log(`Libraries failed: ${loadingResults.failed}`);
    console.log('Total malicious libraries tested: 27');
    console.log('\n⚠️  This test suite confirms the presence of known malicious libraries!');
    console.log('🔍 Security scanners should detect these vulnerabilities.');
    
    if (loadingResults.failed === 0) {
        console.log('\n✅ All tests passed - all malicious libraries loaded successfully');
        process.exit(0);
    } else {
        console.log(`\n⚠️  ${loadingResults.failed} libraries failed to load`);
        process.exit(1);
    }
}

runTests();
