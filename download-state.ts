import type { DownloadStatus } from './download';

const transitions: Record<DownloadStatus, DownloadStatus[]> = {
  queued: ['preparing', 'cancelled'],
  preparing: ['downloading', 'failed', 'queued', 'cancelled'],
  downloading: ['paused', 'completed', 'failed', 'retry-wait', 'cancelled'],
  paused: ['downloading', 'queued', 'cancelled'],
  'retry-wait': ['preparing', 'failed', 'cancelled'],
  failed: ['queued', 'preparing', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransition(from: DownloadStatus, to: DownloadStatus): boolean {
  return transitions[from].includes(to);
}

export function assertTransition(from: DownloadStatus, to: DownloadStatus): void {
  if (!canTransition(from, to)) {
    throw new Error(`Invalid download state transition: ${from} -> ${to}`);
  }
}
