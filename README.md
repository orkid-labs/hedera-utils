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

---

## Part of Orkid Labs

**hedera-utils** — Hedera Hashgraph utilities — HCS logging, milestone tracking, and dashboard components.

- Install: `npm install @orkid-labs/hedera-utils`
- Package: https://www.npmjs.com/package/@orkid-labs/hedera-utils
- API docs: https://docs.orkidlabs.xyz/packages/hedera-utils
- Docs: https://docs.orkidlabs.xyz/packages/hedera-utils

Related Orkid projects: [settlement-types](https://github.com/orkid-labs/settlement-types), [hedera-analytics](https://github.com/orkid-labs/hedera-analytics), [zk-attest](https://github.com/orkid-labs/zk-attest)

Orkid Labs builds gasless, MEV-protected swap routing and agent-native DeFi infrastructure — [orkidlabs.xyz](https://orkidlabs.xyz) · [@orkid-labs on npm](https://www.npmjs.com/org/orkid-labs) · [github.com/orkid-labs](https://github.com/orkid-labs)
