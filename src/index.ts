/**
 * MCP Test Application
 */
import { fileURLToPath } from 'url';
import { startMcpServer } from './mcp-server.js';

/**
 * Adds two numbers together.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
export function add(a: number, b: number): number {
  return a + b;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  startMcpServer().catch(console.error);
}
