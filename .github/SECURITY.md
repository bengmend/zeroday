# Security Policy

## 🚨 IMPORTANT SECURITY NOTICE

**This repository contains intentional security vulnerabilities and malicious code for testing purposes only.**

## Supported Versions

This project is for security testing and educational purposes only. No production support is provided.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :x: Testing only   |

## Reporting a Vulnerability

### ⚠️ Before Reporting

**This project intentionally contains malicious npm libraries and security vulnerabilities. Please verify that the vulnerability you're reporting is NOT part of the intended testing suite before submitting a report.**

### Expected Vulnerabilities

The following vulnerabilities are **intentionally included** and should NOT be reported:

- 27+ malicious npm packages (backslash, chalk-template, supports-hyperlinks, etc.)
- Typosquatting attacks
- Compromised dependencies
- Malware distribution packages
- Container security issues related to malicious libraries

### Reporting Process

If you find a vulnerability that is **NOT** part of the intended testing suite:

1. **Do NOT** create a public GitHub issue
2. **Do NOT** discuss the vulnerability publicly
3. Email security details to: [security@example.com]
4. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution**: Depends on severity and complexity

## Security Testing Guidelines

### For Security Researchers

- This project is designed for security testing
- All malicious libraries are documented in the README
- Use only in isolated, controlled environments
- Do not use in production systems

### For Organizations

- Use this project to test your security scanners
- Validate SCA (Software Composition Analysis) tools
- Train security teams on vulnerability detection
- Test containerized security solutions

## Safe Usage

### ✅ Safe Practices

- Run in isolated Docker containers
- Use dedicated testing environments
- Monitor network traffic during testing
- Document all findings for security teams
- Follow your organization's security policies

### ❌ Unsafe Practices

- Installing dependencies on production systems
- Running in production environments
- Using code from this project in real applications
- Sharing without proper security warnings
- Ignoring container isolation

## Security Tools Integration

This project is designed to work with:

- **Mend SCA** (formerly WhiteSource)
- **Snyk**
- **Sonatype Nexus**
- **GitHub Security Advisories**
- **npm audit**
- **OWASP Dependency Check**
- **Trivy**
- **Clair**

## Contact

For security-related questions or concerns:

- **Email**: [security@example.com]
- **GitHub Security Advisories**: Use the private vulnerability reporting feature
- **Issues**: Use the security vulnerability issue template

## Disclaimer

This project is created solely for security testing and educational purposes. The authors are not responsible for any misuse of this code. Users assume all risks when using this project.

**Remember: This project contains real malicious code. Use with extreme caution and only in controlled, isolated environments!**
