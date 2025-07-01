# Use Node.js official image based on Alpine Linux
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build the source code
FROM base AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --include=dev
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Note: Build may fail in environments with restricted network access to fonts.googleapis.com
# If this happens, consider temporarily removing Google Fonts imports during build
RUN npm run build

# Production image for regular deployment with Lambda Web Adapter support
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy Lambda Web Adapter for serverless deployment support
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.0 /lambda-adapter /opt/extensions/lambda-adapter

# Copy the standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV AWS_LWA_PORT=3000

CMD ["node", "server.js"]