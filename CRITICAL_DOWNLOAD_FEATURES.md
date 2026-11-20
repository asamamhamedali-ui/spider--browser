# Critical Download Manager Requirements

These requirements are mandatory for a trustworthy release. They are design requirements until implemented and tested.

## Reliability and recovery
- Durable task records and crash recovery; recover interrupted transfers on app restart.
- Resume-safe checkpoints and remote validators (ETag/Last-Modified); never append blindly.
- Atomic finalization: temporary file -> verify -> rename to final.
- Detect disk-full, storage permission loss, destination removal and corrupted partial files.
- File integrity: expected length validation; optional SHA-256; user-supplied checksum verification.
- Recovery journal for task/segment state and consistency repair.

## Transfer controls
- Pause/resume/cancel/restart with race-safe state transitions.
- Queue ordering and priorities; user-configurable active-transfer limit.
- Per-task and global bandwidth caps; smooth limiter, not just UI display.
- Scheduling by time and optional network conditions (Wi-Fi only, charging only).
- Smart retry rules: bounded retries, exponential backoff + jitter, Retry-After support; classify permanent vs transient failures.
- Retry policy settings and a clear manual retry option.
- Connection/segment count capped by server, device, user preference, battery and network; adaptive adjustment only after measured evidence.

## HTTP correctness
- HTTP/HTTPS; redirects with policy validation at every hop.
- HEAD/range probe with fallback when HEAD is unsupported.
- Validate Content-Range and range support before segmented transfer.
- Chunked responses and unknown-length downloads supported with indeterminate progress.
- Correct handling of 200/206/416, 429, 5xx, authentication challenges and expired links.
- Respect ETag/Last-Modified and detect source changes before resume.
- Cookie/header support must be scoped to a user-initiated task and never leak to unrelated hosts.
- Timeouts, cancellation, connection pooling, TLS verification; never disable certificate validation.
- User agent customization only as a documented preference, not a spoofing default.

## Task and file management
- Duplicate detection by normalized URL and, after completion, file hash (user can choose action).
- Conflict handling: ask, auto-rename safely, replace only after explicit confirmation, or skip.
- Safe filename sanitation; defend against path traversal and reserved names.
- Categories based on MIME plus extension with user override.
- Batch import, paste link, share-to-app intent, drag/drop where platform supports it.
- Download detail view with source, destination, file size, speed, ETA, retry history and error code.
- Download logs with privacy-safe redaction.
- Delete task vs delete file must be distinct and clearly confirmed.
- Open/share completed file using Android content URI, not raw unrestricted filesystem paths.

## Notifications and background
- Foreground notification for user-visible ongoing work when Android requires it.
- Notification actions: pause/resume and cancel, with permission-aware behavior.
- Respect Android battery optimization and background execution restrictions; disclose vendor-specific limitations.
- Scheduler uses appropriate Android APIs and doesn't promise exact timing if OS defers work.
- On reboot/process recreation, reconcile persisted tasks with filesystem and service state.

## Performance and observability
- Stream to disk; memory usage must not scale with file size.
- Throttle progress events and UI updates.
- Record transfer duration, throughput samples, retry count, outcome and reason.
- ETA is an estimate; hide or mark uncertain when total length or speed is unknown.
- Resource limits: maximum workers, queued tasks, retry attempts, temporary disk usage and file descriptors.
- Analytics are local by default and clearable/exportable.

## Safety and privacy
- Validate URL schemes; default only HTTP/HTTPS.
- Prevent redirect abuse and unintended access to local/private network targets from page-originated downloads; provide explicit user-approved exceptions where appropriate.
- No DRM circumvention or access-control bypass.
- Scan integration may be offered through Android security tools; do not claim built-in malware scanning without an implementation.
- Do not log credentials, cookies, authorization headers, signed query strings, or private paths.
