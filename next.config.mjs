import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: [
    process.env.REPLIT_DEV_DOMAIN,
    '*.replit.dev',
    '*.spock.replit.dev',
  ].filter(Boolean),
};

export default nextConfig;
