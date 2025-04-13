import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('MCP Server', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-04-13'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('getTodayDate tool should return current date in ISO format', async () => {
    const today = new Date();
    const isoDate = today.toISOString().split('T')[0]; // YYYY-MM-DD形式
    expect(isoDate).toBe('2025-04-13');
  });
});
