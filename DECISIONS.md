# Architecture Decision Records

## ADR-001: Android-first
Decision: prioritize Android for first functional release.
Reason: browser/download behavior and background transfer require platform-specific work; validate on one platform first.

## ADR-002: Expo + React Native
Decision: use Expo framework with TypeScript and file-based navigation.
Reason: productive mobile workflow and managed tooling, with native module escape hatch.

## ADR-003: Kotlin native download service
Decision: transfer engine lifecycle-critical functionality belongs in native Android code.
Reason: long-running transfers, foreground notifications, network and storage integration need native reliability.

## ADR-004: WebView is not full Chromium
Decision: initial browser prototype may use Android WebView, but product must not advertise full Chromium or extension support until implemented and verified.
Reason: WebView has different engine lifecycle, APIs, profile and extension capabilities.

## ADR-005: Local-first
Decision: local SQLite metadata and files; cloud sync is future optional architecture.
Reason: privacy, offline use and lower initial operational complexity.
