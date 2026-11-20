# Android Native Module Plan

Native code is not implemented in this scaffold. Generate the Android project only when ready to begin native work:

```bash
npx expo prebuild --platform android
```

Planned Kotlin package areas:
- `download/DownloadForegroundService.kt` — user-visible active transfer service
- `download/DownloadNotificationController.kt` — notification progress/actions
- `download/TransferCoordinator.kt` — task lifecycle orchestration
- `download/HttpTransferWorker.kt` — streaming HTTP implementation
- `download/SegmentWorker.kt` — bounded byte-range segment worker (later milestone)
- `storage/DownloadFileStore.kt` — safe paths, temporary files and atomic finalize
- `storage/DownloadDatabase.kt` — persistence adapter (coordinate with chosen DB)
- `bridge/NovaDownloadModule.kt` — typed React Native/Expo module API

Native APIs must be designed against current Android platform requirements before implementation. Do not copy service permissions blindly: foreground service types, notification permission, storage model and scheduling policy depend on target SDK and Android versions.

Native module contract draft:
- `enqueue(request): Promise<DownloadId>`
- `pause(id): Promise<void>`
- `resume(id): Promise<void>`
- `cancel(id): Promise<void>`
- `getTasks(): Promise<DownloadSnapshot[]>`
- `subscribeProgress(listener): Subscription`

All requests and event payloads must be validated. Progress events are throttled and include task ID, bytes, total (nullable), speed and state. Native code must not expose arbitrary filesystem access to JS.
