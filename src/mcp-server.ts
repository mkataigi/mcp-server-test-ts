/**
 * Model Context Protocol (MCP) サーバーの実装
 * 今日の日付を返すシンプルなツールを提供します
 */
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

/**
 * MCPサーバーのインスタンスを作成
 */
export const server = new McpServer({
  name: 'DateServer',
  version: '1.0.0',
});

/**
 * 今日の日付を返すツールを追加
 * パラメータなしでシンプルに今日の日付をISO形式で返します
 */
server.tool(
  'getTodayDate',
  {}, // パラメータなし
  async () => {
    const today = new Date();
    const isoDate = today.toISOString().split('T')[0]; // YYYY-MM-DD形式
    return {
      content: [{ type: 'text', text: isoDate }],
    };
  }
);

export async function startMcpServer(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
