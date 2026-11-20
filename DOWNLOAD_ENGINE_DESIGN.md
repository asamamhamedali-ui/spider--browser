# Download Engine Design

## Phased implementation
Phase A: single HTTP(S) stream to app-controlled temporary file.
Phase B: Android foreground transfer service and persistence.
Phase C: resume with Range and validators.
Phase D: queue, retry policy, concurrency limits.
Phase E: multi-segment download for range-capable servers.
Phase F: adaptive connection allocation and analytics.

## Transfer lifecycle
QUEUED -> PREPARING -> DOWNLOADING -> COMPLETED
DOWNLOADING -> PAUSED | RETRY_WAIT | FAILED | CANCELLED
PAUSED -> DOWNLOADING | QUEUED | CANCELLED
RETRY_WAIT -> PREPARING | FAILED | CANCELLED
FAILED -> QUEUED | PREPARING | CANCELLED

## Metadata probe
Use HEAD if supported. If unreliable, use a bounded range probe. Collect:
- effective URL after redirects
- content length (if known)
- MIME
- Content-Disposition filename
- Accept-Ranges
- ETag
- Last-Modified

## Segmentation
Only segment when the server reliably supports byte ranges and file size is known. Segments are half-open ranges [start, end), stored with unique IDs and durable checkpoints. Worker count is bounded by user setting, server constraints, battery policy and network observations. Never assume more connections means faster.

## Resume safety
Use ETag/Last-Modified validators. If remote content changed, discard or quarantine partial state and restart rather than combining versions. If range requests fail, fallback to a single-stream restart.

## Retry
Exponential backoff with jitter, retry limits, Retry-After support. Distinguish retryable network/5xx/429 from permanent 4xx and local filesystem errors.

## Storage
Stream to disk. Keep partial files separate from final names. Use atomic rename when supported. Persist task metadata and segment checkpoints. Handle insufficient disk space and destination permission failures.

## Android lifecycle
Use a foreground service only for user-visible ongoing transfers and follow current platform policy. Notification permission and service restrictions vary by Android version. WorkManager may handle deferred/scheduled tasks, but is not a substitute for an active foreground transfer where immediate continuous work is required.

## Metrics
Progress events are throttled; track bytes, elapsed time, rolling speed, ETA confidence, retry counts, and network type where permission/policy allows. Avoid retaining detailed network identifiers unnecessarily.


## Critical production controls
See `CRITICAL_DOWNLOAD_FEATURES.md` for the complete release-blocking checklist. Additional invariants:
- A task must have one authoritative state owner; UI may request commands but cannot mutate transfer state directly.
- Every command is idempotent or returns a stable conflict error.
- Duplicate start commands must not create concurrent writers to one destination.
- Destination reservation is atomic and collision policy is explicit.
- Persisted transfer records are reconciled on startup against temporary and final files.
- Progress event emission is bounded (target around 4 updates/sec/task, configurable and benchmarked).
- Retry decisions use typed error classes, not string matching.
