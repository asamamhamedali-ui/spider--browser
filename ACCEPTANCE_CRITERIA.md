# Acceptance Criteria

## Global gates
- [ ] No critical/high unresolved security findings.
- [ ] Typecheck passes.
- [ ] Unit/integration tests pass.
- [ ] No secrets or personal data in logs.
- [ ] User-facing feature status is truthful.
- [ ] Permissions are requested only when needed and explained.
- [ ] Crash and error states have recovery or clear user guidance.
- [ ] Accessibility: screen-reader labels and adequate touch targets.
- [ ] Performance/battery/resource limits are documented and measured.

## M1 Mobile shell
- [ ] Android app launches on a supported device/emulator.
- [ ] Home, Browser, Downloads, Library and Settings routes open.
- [ ] Back behavior is correct.
- [ ] UI handles small screens and safe areas.
- [ ] No placeholder is presented as working functionality.

## Download MVP
- [ ] HTTP and HTTPS URL validation.
- [ ] Metadata can be discovered or fallback is handled.
- [ ] Download streams to disk (never buffers entire file).
- [ ] Progress and speed are calculated without excessive UI events.
- [ ] Pause/cancel/retry behavior is deterministic.
- [ ] Task state survives restart.
- [ ] Final file length and checksum match test fixture.
- [ ] Temporary files are cleaned or recoverable.
- [ ] Disk-full and permission errors are surfaced.
- [ ] Unsafe filenames and path traversal are rejected.

## Resume
- [ ] Resume only if server supports byte ranges.
- [ ] Remote validators prevent mixing different versions.
- [ ] Resume after network loss and process restart tested.
- [ ] Non-range servers restart safely.

## Multi-connection
- [ ] Segment ranges don't overlap or leave gaps.
- [ ] Server range support is verified.
- [ ] Worker limit is configurable and bounded.
- [ ] Segment failures retry independently within policy.
- [ ] Assembly is atomic and checksum verified.
- [ ] If server refuses ranges, engine falls back safely.

## Background service
- [ ] Android foreground service notification is shown when required.
- [ ] Notification controls work and are permission-aware.
- [ ] Service lifecycle and process recreation are tested.
- [ ] Android version/vendor battery restrictions are documented.

## Browser
- [ ] URL scheme allowlist.
- [ ] Unsafe external schemes are blocked or require confirmation.
- [ ] JavaScript bridge is disabled unless a narrowly scoped bridge is required.
- [ ] File access, mixed content and geolocation/camera/mic permissions are denied by default.
- [ ] Tabs and history persist as intended.
- [ ] Incognito data is not persisted.
- [ ] Download interception is tested.

## AI
- [ ] AI provider can be disabled.
- [ ] User consent before transmitting content externally.
- [ ] Tool registry allowlists actions.
- [ ] Destructive operations require explicit confirmation.
- [ ] Secrets, cookies and passwords are never sent to AI.
- [ ] AI responses are treated as untrusted.

## Release
- [ ] Android release build produced from clean checkout.
- [ ] Signing keys are secured outside repository.
- [ ] Privacy policy and data disclosures reviewed.
- [ ] Permissions match actual features.
- [ ] Crash-free smoke test completed on target Android versions.


## Critical download manager gates (release-blocking)
- [ ] Disk-space preflight and disk-full recovery
- [ ] Duplicate URL and hash detection with user-controlled resolution
- [ ] Safe filename and path traversal tests
- [ ] Global and per-task bandwidth limiter tests
- [ ] Queue priority and active-task concurrency tests
- [ ] Retry limits, backoff, jitter and Retry-After tests
- [ ] Wi-Fi-only/charging scheduler constraints tested and limitations documented
- [ ] Batch and Android share-intent link ingestion tested
- [ ] Notifications and pause/resume/cancel actions tested
- [ ] Source validator change prevents unsafe resume
- [ ] Checksum/size verification and atomic file finalization
- [ ] Sensitive headers, cookies, URL credentials and signed URL parameters redacted from logs
- [ ] Redirect destination policy validated
- [ ] App process restart reconciles task database and partial files
- [ ] Memory use remains bounded for large files; benchmark documented

## GitHub Actions APK workflow
- [ ] Push and manual `workflow_dispatch` builds complete successfully.
- [ ] All generated APK files are uploaded as an Actions artifact.
- [ ] The artifact can be downloaded from a completed Actions run.
