# Use Node.js 18 LTS as base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Create non-root user for security (even though this is a vulnerable app)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./

# Install dependencies (including malicious ones)
# Use flags to bypass security checks and ignore scripts that might fail
RUN npm install --ignore-scripts --no-audit --no-fund --legacy-peer-deps || \
    (echo "Some packages failed to install, continuing with available packages..." && \
     npm install --ignore-scripts --no-audit --no-fund --legacy-peer-deps --force)

# Copy application code
COPY . .

# Change ownership to non-root user
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port (if needed for web services)
EXPOSE 3000

# Health check to ensure the app is running
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "console.log('Health check passed')" || exit 1

# Default command
CMD ["node", "index.js"]

# Labels for identification
LABEL maintainer="Security Testing"
LABEL description="Vulnerable Node.js application with malicious npm libraries for security testing"
LABEL version="1.0.0"
LABEL security-warning="This container contains known malicious npm libraries - for testing only!"
