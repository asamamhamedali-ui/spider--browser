# Roadmap & Milestones

## M0 — Product and architecture (complete)
- Product scope, architecture, security boundaries, acceptance criteria.

## M1 — Mobile shell
- Expo project, TypeScript, navigation, theme, basic screen layout.
- Acceptance: app starts on Android; navigation works; no fatal errors.

## M2 — Persistence and settings
- SQLite schema/migrations; settings persistence; app restart tests.
- Acceptance: settings and task metadata persist, migration tests pass.

## M3 — Basic transfer engine
- HTTP/HTTPS download, metadata, stream-to-file, progress, cancel, retry.
- Acceptance: test file verified by hash; cancellation doesn't corrupt completed files.

## M4 — Android background transfer
- Kotlin foreground service; notification actions; lifecycle recovery; permissions.
- Acceptance: transfer continues under supported conditions; process death recovery tested; battery policy limitations documented.

## M5 — Resume
- Range requests; server capability checks; validators; persisted byte offset.
- Acceptance: interruption/resume matches reference checksum; non-range server fallback works.

## M6 — Queue and controls
- Queue, priority, concurrency caps, speed limiter, schedules.
- Acceptance: limits respected; no task starts twice; pause/resume race tests.

## M7 — Browser MVP
- WebView shell, navigation, address/search, tabs, bookmarks, history.
- Security policy, safe navigation, permission prompts.
- Acceptance: malicious URL and navigation tests; browser limitations clearly documented.

## M8 — Browser/download integration
- User-initiated download interception, link handoff, share intents, clipboard opt-in.
- Acceptance: downloads started from browser are tracked with consent and correct URL handling.

## M9 — Files and organization
- Categories, file metadata, duplicate detection, safe rename, export/share.
- Acceptance: no unauthorized file access; duplicate detection test fixtures.

## M10 — Advanced transfer
- Multi-connection segments, adaptive worker count, mirror handling, integrity verification.
- Acceptance: range-compatible fixtures; segment correctness; server limits obeyed; benchmark report.

## M11 — Media capability
- Detect direct media and HLS/DASH manifests; metadata and subtitle discovery where accessible.
- Acceptance: fixture-based tests; DRM or access-control bypass explicitly excluded.

## M12 — AI assistant
- Provider abstraction, user-consented context, tool allowlist, confirmation gates.
- Acceptance: no tool can exceed permissions; sensitive context excluded by default.

## M13 — Release hardening
- CI, tests, crash handling, backup/restore, signing, store compliance, privacy disclosures.
- Acceptance: release checklist completed; reproducible build and security review.

Milestones must be completed in order unless an architecture decision record explains the dependency change.


## Mandatory download-manager hardening track (must be completed before commercial release)
- Disk-space preflight and low-space recovery
- Duplicate URL/hash detection and collision-safe filename policy
- Global/per-task bandwidth limiting
- Configurable queue concurrency and priority
- Bounded retry policy, jitter and Retry-After
- Wi-Fi-only / charging constraints and scheduling
- Task logs with secret redaction
- File checksum and content-length verification
- Safe redirects and source-change validation
- Batch/share-to-app intake
- Notifications with action controls
- Resource and battery benchmarks
- Acceptance: all requirements in `CRITICAL_DOWNLOAD_FEATURES.md` tested and signed off.
