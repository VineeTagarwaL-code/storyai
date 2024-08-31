/** @type {import('next').NextConfig} */
import { checkEnv } from "./lib/env-checker.mjs";
const nextConfig = {};

checkEnv();
export default nextConfig;
