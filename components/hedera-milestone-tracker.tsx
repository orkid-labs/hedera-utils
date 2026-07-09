'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle, Clock } from 'lucide-react'

const MILESTONES = [
  {
    id: 'acceptance',
    label: 'Acceptance Payment',
    hbar: '10%',
    status: 'completed',
    description: 'KYC, funding agreement, and acceptance complete.',
  },
  {
    id: 'testnet',
    label: 'Milestone 1: Testnet Deployment',
    hbar: '50,000',
    status: 'in-progress',
    description: 'Smart contracts on Hedera Testnet, UI operational, HIP-1195 hooks live.',
  },
  {
    id: 'mainnet',
    label: 'Milestone 2: Mainnet Launch',
    hbar: '100,000',
    status: 'pending',
    description: 'Mainnet contracts, HTS/HCS integration, public UI.',
  },
  {
    id: 'traction',
    label: 'Milestone 3: Initial Traction',
    hbar: '150,000',
    status: 'pending',
    description: 'TVL $20K+, 200+ MAUs, or 25K+ monthly transactions.',
  },
  {
    id: 'adoption',
    label: 'Milestone 4: Sustained Adoption',
    hbar: '150,000',
    status: 'pending',
    description: 'TVL $40K+, 400+ MAUs, or 50K+ monthly transactions.',
  },
]

export function HederaMilestoneTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hedera Launch Program S2 Milestones</CardTitle>
        <CardDescription>
          Progress tracker against Thrive Hedera grant milestones for zk-proof, negentropy, and zenhook integration.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {MILESTONES.map((milestone) => (
          <div
            key={milestone.id}
            className="flex items-start gap-4 rounded-lg border border-border bg-muted/40 p-4"
          >
            {milestone.status === 'completed' ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
            ) : milestone.status === 'in-progress' ? (
              <Clock className="mt-0.5 h-5 w-5 text-amber-400" />
            ) : (
              <Circle className="mt-0.5 h-5 w-5 text-muted-foreground" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">{milestone.label}</p>
                <Badge
                  variant={
                    milestone.status === 'completed'
                      ? 'success'
                      : milestone.status === 'in-progress'
                        ? 'warning'
                        : 'default'
                  }
                >
                  {milestone.status === 'completed'
                    ? 'Completed'
                    : milestone.status === 'in-progress'
                      ? 'In Progress'
                      : 'Pending'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{milestone.description}</p>
              <p className="text-xs text-amber-400/80 mt-1">Up to {milestone.hbar} HBAR</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
