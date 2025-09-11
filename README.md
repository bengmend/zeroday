# 🚨 VULNERABLE TEST PROJECT 🚨

> **⚠️ CRITICAL SECURITY WARNING ⚠️**  
> This project contains **KNOWN MALICIOUS NPM LIBRARIES** for security testing purposes only.  
> **DO NOT USE IN PRODUCTION ENVIRONMENTS!**

## Overview

This project is intentionally built with known malicious npm libraries to test security scanners and detection systems. It serves as a controlled environment for:

- Testing SCA (Software Composition Analysis) tools
- Validating security scanner effectiveness
- Training security teams on vulnerability detection
- Testing containerized security solutions

## 🚨 Known Malicious Libraries Included

This project intentionally includes the following **27 known malicious npm libraries**:

| Library | Version | Risk Level | Description |
|---------|---------|------------|-------------|
| `backslash` | 0.2.1 | 🔴 HIGH | Known malicious package |
| `chalk-template` | 1.1.1 | 🔴 HIGH | Typosquatting attack |
| `supports-hyperlinks` | 4.1.1 | 🔴 HIGH | Malicious functionality |
| `has-ansi` | 6.0.1 | 🔴 HIGH | Compromised package |
| `simple-swizzle` | 0.2.3 | 🔴 HIGH | Malicious code injection |
| `color-string` | 2.1.1 | 🔴 HIGH | Typosquatting |
| `error-ex` | 1.3.3 | 🔴 HIGH | Malicious package |
| `color-name` | 2.0.1 | 🔴 HIGH | Compromised |
| `is-arrayish` | 0.3.3 | 🔴 HIGH | Malicious functionality |
| `slice-ansi` | 7.1.1 | 🔴 HIGH | Typosquatting |
| `color-convert` | 3.1.1 | 🔴 HIGH | Malicious package |
| `wrap-ansi` | 9.0.1 | 🔴 HIGH | Compromised |
| `ansi-regex` | 6.2.1 | 🔴 HIGH | Malicious code |
| `supports-color` | 10.2.1 | 🔴 HIGH | Typosquatting |
| `strip-ansi` | 7.1.1 | 🔴 HIGH | Malicious package |
| `chalk` | 5.6.1 | 🔴 HIGH | Compromised version |
| `debug` | 4.4.2 | 🔴 HIGH | Malicious functionality |
| `ansi-styles` | 6.2.2 | 🔴 HIGH | Typosquatting |
| `proto-tinker-wc` | 0.1.87 | 🔴 HIGH | Known malicious |
| `Prebid-universal-creative` | 1.17.3 | 🔴 HIGH | Malware distribution |
| `duckdb` | 1.3.3 | 🟡 MEDIUM | Potentially compromised |
| `@duckdb/node-api` | 1.3.3 | 🟡 MEDIUM | Related to above |
| `@duckdb/node-bindings` | 1.3.3 | 🟡 MEDIUM | Related to above |
| `@duckdb/duckdb-wasm` | 1.29.2 | 🟡 MEDIUM | Related to above |
| `prebid.js` | 10.9.2 | 🔴 HIGH | Malware distribution |
| `Prebid` | 10.9.1,10.9.2 | 🔴 HIGH | Malware distribution |
| `@coveops/abi` | 2.0.1 | 🔴 HIGH | Known malicious |

## 🛡️ Security Features

### Containerization
- **Dockerized** for safe isolation
- **Non-root user** execution
- **Resource limits** to prevent abuse
- **Read-only filesystem** where possible
- **Capability dropping** for security

### Network Isolation
- **Isolated Docker network**
- **No external network access** by default
- **Port restrictions**

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 16+ (for local development)
- GitHub account (for automated builds)

### GitHub Setup

1. **Create a new GitHub repository:**
   ```bash
   # Create a new repository on GitHub
   # Repository name: vulnerable-test-project (or your preferred name)
   # Make it private for security
   ```

2. **Clone and push to GitHub:**
   ```bash
   git clone <your-repository-url>
   cd vulnerable-test-project
   
   # Add all files
   git add .
   git commit -m "Initial commit: Vulnerable test project with malicious npm libraries"
   git push -u origin main
   ```

3. **Enable GitHub Actions:**
   - Go to your repository's Actions tab
   - Enable GitHub Actions if prompted
   - The workflows will automatically run on push/PR

4. **Configure secrets (optional):**
   - Go to Settings → Secrets and variables → Actions
   - Add `SNYK_TOKEN` if you want Snyk scanning
   - Add other security tool tokens as needed

### Running with Docker (Recommended)

1. **Build and run the vulnerable application:**
   ```bash
   # Production mode
   docker-compose up --build
   
   # Development mode with debugging
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Run security tests:**
   ```bash
   # Run the test suite inside the container
   docker-compose exec vulnerable-app node test.js
   ```

### GitHub Actions

The repository includes automated workflows:

- **Docker Build**: Builds and pushes Docker images to GitHub Container Registry
- **Security Testing**: Runs comprehensive security tests on multiple Node.js versions
- **CodeQL Analysis**: Performs static code analysis for security vulnerabilities
- **Vulnerability Scanning**: Uses Trivy and other tools to scan for vulnerabilities

**View Actions**: Go to the Actions tab in your GitHub repository to see all running workflows.

### Local Development (Not Recommended)

⚠️ **Warning: Running locally exposes your system to malicious code!**

```bash
# Install dependencies (DANGEROUS!)
npm install

# Run the application
npm start

# Run tests
npm test
```

## 🔍 Testing Security Scanners

### SCA Tools to Test
- **Mend (formerly WhiteSource)**
- **Snyk**
- **Sonatype Nexus**
- **GitHub Security Advisories**
- **npm audit**
- **OWASP Dependency Check**

### Expected Detection Results
When scanning this project, security tools should detect:
- ✅ 27+ high-severity vulnerabilities
- ✅ Known malicious packages
- ✅ Typosquatting attacks
- ✅ Compromised dependencies
- ✅ Malware distribution packages

### Running Security Scans

```bash
# npm audit (should show vulnerabilities)
npm audit

# Snyk scan (if installed)
npx snyk test

# OWASP Dependency Check
npx @cyclonedx/cyclonedx-npm --output-file bom.json
```

## 📊 Project Structure

```
vulnerable-test-project/
├── package.json                    # Dependencies with malicious libraries
├── index.js                        # Main application demonstrating vulnerabilities
├── test.js                         # Test suite for vulnerability validation
├── Dockerfile                      # Container configuration
├── docker-compose.yml              # Production deployment
├── docker-compose.dev.yml          # Development deployment
├── .dockerignore                   # Docker ignore patterns
├── .gitignore                      # Git ignore patterns
├── security-warning.txt            # Additional security warning
├── README.md                       # This file
└── .github/
    ├── workflows/
    │   ├── docker-build.yml        # Docker build and security scanning
    │   ├── security-test.yml       # Comprehensive security testing
    │   └── codeql.yml              # CodeQL static analysis
    ├── ISSUE_TEMPLATE/
    │   ├── security-vulnerability.md # Security issue template
    │   ├── bug-report.md            # Bug report template
    │   └── feature-request.md       # Feature request template
    ├── pull_request_template.md     # PR template
    ├── SECURITY.md                  # Security policy
    └── dependabot.yml              # Dependabot configuration
```

## 🧪 Test Suite

The included test suite (`test.js`) validates:
- ✅ All malicious libraries load successfully
- ✅ Malicious functionality works as expected
- ✅ File system access capabilities
- ✅ Network module accessibility
- ✅ Process manipulation capabilities

## ⚠️ Safety Guidelines

### For Security Testing
1. **Always run in isolated containers**
2. **Never run on production systems**
3. **Use dedicated testing environments**
4. **Monitor network traffic during testing**
5. **Document all findings for security teams**

### For Development Teams
1. **Never copy code from this project**
2. **Use this only for security testing**
3. **Ensure proper isolation**
4. **Follow your organization's security policies**

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to `production` or `development`
- `DEBUG`: Enable debug logging (set to `vulnerable-app:*`)

### Docker Configuration
- **Memory limit**: 512MB
- **CPU limit**: 0.5 cores
- **Port**: 3000 (configurable)
- **User**: Non-root (nodejs:1001)

## 📈 Monitoring and Detection

### What to Look For
- Unusual network connections
- File system modifications
- Process spawning
- Data exfiltration attempts
- Command injection attempts

### Log Analysis
Monitor container logs for:
```bash
docker-compose logs -f vulnerable-app
```

## 🤝 Contributing

This is a security testing project. Contributions should focus on:
- Adding more realistic vulnerability scenarios
- Improving container security
- Enhancing detection capabilities
- Adding more malicious library examples

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following the security testing guidelines
4. **Test your changes**:
   ```bash
   # Run local tests
   npm test
   
   # Test Docker build
   docker-compose up --build
   
   # Run security tests
   docker-compose exec vulnerable-app node test.js
   ```
5. **Commit your changes**: `git commit -m "Add: your feature description"`
6. **Push to your fork**: `git push origin feature/your-feature-name`
7. **Create a Pull Request** using the provided template

### GitHub Actions

All contributions are automatically tested via GitHub Actions:
- **Docker Build**: Ensures the container builds successfully
- **Security Testing**: Validates that malicious libraries are still detected
- **CodeQL Analysis**: Performs static security analysis
- **Vulnerability Scanning**: Scans for new vulnerabilities

### Issue Reporting

Use the provided issue templates:
- **Security Vulnerability**: For reporting unexpected vulnerabilities
- **Bug Report**: For reporting bugs in the testing framework
- **Feature Request**: For suggesting new testing capabilities

## 📄 License

MIT License - **FOR SECURITY TESTING PURPOSES ONLY**

## ⚠️ Disclaimer

This project is created solely for security testing and educational purposes. The authors are not responsible for any misuse of this code. Users assume all risks when using this project.

**Remember: This project contains real malicious code. Use with extreme caution and only in controlled, isolated environments!**

---

**🔒 Security Notice**: If you discover this project in a production environment, immediately report it to your security team and remove it from your systems.
