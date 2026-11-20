# Architecture

## High-level modules
- App/UI: React Native screens, navigation, reusable components.
- Application services: commands/use cases, validation and orchestration.
- Browser adapter: WebView shell initially; native/browser capability investigation before claiming full Chromium.
- Download domain: transfer state machine, task model, queue and policy.
- Transfer implementation: Android Kotlin foreground service/worker, HTTP client, segment workers, checkpoint storage.
- Storage: SQLite metadata, filesystem partial/final files, secure preferences.
- Network: capability discovery, HTTP semantics, retry/backoff, redirect policy.
- Media detection: MIME/manifest inspection; no DRM circumvention.
- Scheduler: policies and Android scheduling integration.
- AI: provider adapter, context filters, constrained tool registry.
- Analytics: local aggregated metrics and opt-in diagnostics.
- Settings: validated configuration and privacy controls.

## Mobile architecture
React Native handles UI and app logic. Native Kotlin handles operations requiring reliable Android lifecycle integration, foreground service notifications, background scheduling, transfer streaming, network constraints and platform storage APIs.

## Communication boundary
Use a typed Native Module API (Expo Modules API or a maintained React Native module) with request/response contracts. Native event streams must be versioned, validated and documented. The UI must not directly access arbitrary filesystem or Android APIs.

## Browser reality
A React Native WebView is not a full standalone Chromium browser. Browser MVP can use WebView only after security review and limitations are documented. Full browser features such as profiles, extension compatibility, independent cookie stores and deep download interception require additional native work and may be constrained by Android WebView.

## Download flow
1. Validate URI and policy.
2. Discover metadata and range support.
3. Create DB record and temporary destination.
4. Start foreground service when Android policy requires it.
5. Stream bytes to disk; emit throttled progress events.
6. Persist checkpoints.
7. Validate length/checksum when available.
8. Atomically move/rename to final file.
9. Mark complete and emit notification.

## State machine
queued -> preparing -> downloading -> completed
downloading -> paused | retry-wait | failed | cancelled
paused -> downloading | queued | cancelled
retry-wait -> preparing | failed | cancelled
failed -> queued | preparing | cancelled
completed and cancelled are terminal unless a new task is created.

## Data boundaries
- URL and headers are sensitive metadata.
- Authentication cookies/tokens must never be logged.
- AI receives only the minimum data needed, with user consent and configurable provider.
- Download events are aggregated; raw browsing history is excluded from AI by default.
