export type DownloadStatus =
  | 'queued'
  | 'preparing'
  | 'downloading'
  | 'paused'
  | 'retry-wait'
  | 'completed'
  | 'failed'
  | 'cancelled';

export type DownloadPriority = 'low' | 'normal' | 'high';

export interface DownloadRecord {
  id: string;
  sourceUrl: string;
  displayName: string;
  destinationUri?: string;
  status: DownloadStatus;
  totalBytes?: number;
  downloadedBytes: number;
  bytesPerSecond: number;
  priority: DownloadPriority;
  retryCount: number;
  createdAt: string;
  updatedAt: string;
  errorCode?: string;
}

export type DownloadCommand =
  | { type: 'pause'; id: string }
  | { type: 'resume'; id: string }
  | { type: 'cancel'; id: string }
  | { type: 'retry'; id: string };
