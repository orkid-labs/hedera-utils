# Hedera Utils

Utility library for Hedera Hashgraph development — HCS logging, milestone tracking, and dashboard components.

## Components

### HCS Log Store
TypeScript utilities for logging and tracking Hedera Consensus Service (HCS) messages.

```typescript
import { pushHcsLog, getHcsLogs, findHcsLogByMemo } from './lib/hcs-log-store'

pushHcsLog({ memo: 'test', payload: {} }, 1, '0x123')
const logs = getHcsLogs()
const found = findHcsLogByMemo('test')
```

### Milestone Tracker
React component for tracking Hedera grant/program milestones.

```tsx
import { HederaMilestoneTracker } from './components/hedera-milestone-tracker'

<HederaMilestoneTracker />
```

### Dashboard Client
React dashboard with milestone visualization and status tracking.

```tsx
import { HederaDashboardClient } from './components/hedera-dashboard-client'

<HederaDashboardClient />
```

## License

MIT
