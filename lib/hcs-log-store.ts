export interface HcsLogEntry {
  memo: string
  payload: Record<string, unknown>
  topicId?: string
}

export interface HcsLogRecord {
  sequenceNumber: number
  transactionHash: string
  topicId: string
  memo: string
  status: 'submitted' | 'simulated'
  timestamp: string
}

const HCS_LOGS: HcsLogRecord[] = []

export function pushHcsLog(entry: HcsLogEntry, sequenceNumber: number, transactionHash: string) {
  HCS_LOGS.push({
    sequenceNumber,
    transactionHash,
    topicId: entry.topicId || '0.0.123456',
    memo: entry.memo,
    status: 'simulated',
    timestamp: new Date().toISOString(),
  })
  while (HCS_LOGS.length > 100) HCS_LOGS.shift()
}

export function getHcsLogs(): HcsLogRecord[] {
  return HCS_LOGS.slice()
}

export function findHcsLogByMemo(memo: string): HcsLogRecord | undefined {
  return HCS_LOGS.find((l) => l.memo === memo)
}
