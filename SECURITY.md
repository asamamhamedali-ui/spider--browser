# Security & Privacy

## Threat model
Untrusted websites, malformed URLs, malicious downloads, redirect abuse, hostile filenames, local data theft, compromised AI providers, and accidental over-permission.

## Browser rules
- Web content is untrusted.
- Validate navigation schemes; allow HTTP/HTTPS only by default.
- Block or prompt for custom schemes and external intents.
- No unrestricted JavaScript bridge.
- Restrict file/content access.
- Handle web permissions through explicit allow/deny policy.
- Separate private browsing state and clear it on exit.
- Browser WebView is not equivalent to a complete Chromium browser; limitations must be communicated.

## Download rules
- Normalize and validate filenames; prevent path traversal.
- Restrict destinations to user-approved locations.
- Treat redirects as new policy checks.
- Guard against local/private network targets when a URL is initiated by untrusted page content; allow user-confirmed local workflows where appropriate.
- Do not trust MIME type or extension alone.
- Verify byte counts and optional checksums.
- Use temporary files and safe finalization.
- Avoid logging sensitive request headers.

## Storage
- SQLite database may contain browsing/download metadata; explain retention and provide clear/delete controls.
- Store secrets using platform secure storage; never hardcode encryption keys.
- Backups should be protected and user-controlled.
- Incognito history and cookies must not be persisted.

## AI
- External AI is opt-in.
- Minimize context; do not send passwords, cookies, tokens or private content by default.
- Clearly disclose what data is sent.
- AI tool calls require authorization and validation.
- Destructive actions require confirmation.

## Release process
- Dependency scanning and license review.
- Signed builds.
- Secrets scanning.
- Privacy policy and store disclosure review.
- Security issue reporting process.
