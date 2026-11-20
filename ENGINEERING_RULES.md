# Engineering Rules

1. Never claim an unimplemented feature works.
2. TypeScript strict mode; avoid `any`, justify unavoidable use.
3. All user input and IPC/native bridge payloads are validated.
4. Keep UI components presentational where possible; use services/use cases for logic.
5. Native bridge contracts are typed, versioned, documented and permission-checked.
6. Download state changes must pass the domain state machine.
7. Network operations must be cancellable, bounded and timeout-aware.
8. Large transfers must stream to disk, not load into memory.
9. Don't log URLs with credentials, cookies, auth headers, tokens or private file paths.
10. No secrets in source control, app bundle, logs, screenshots or test fixtures.
11. Database schema changes require migrations and rollback/recovery notes.
12. Every feature needs tests and acceptance criteria.
13. Errors must have stable internal codes and understandable user messages.
14. Respect Android foreground-service, notification, storage and background execution rules.
15. No DRM circumvention, access-control bypass or unauthorized extraction.
16. Avoid unnecessary dependencies; review maintenance, license and security.
17. Prefer explicit permission prompts at point of use.
18. PRs must include purpose, tests, risks, and screenshots for UI changes.
19. Use conventional commits: feat, fix, docs, test, refactor, chore.
20. Never merge a milestone with failing acceptance tests.
