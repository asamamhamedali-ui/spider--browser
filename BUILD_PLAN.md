# Build Plan

## Local debug
1. Install Node.js LTS and VS Code.
2. Extract archive.
3. Open extracted `NovaMobile` folder in VS Code.
4. Run `npm install`.
5. Run `npx expo install --fix`.
6. Run `npx expo start`.
7. Launch Android Emulator or scan with Expo Go.

## Android development build
Expo Go is for early UI preview. Native Kotlin transfer modules require a custom development build.
1. Install Android Studio and Android SDK.
2. Configure Android environment variables.
3. Install EAS CLI and sign in, or use local Gradle.
4. Generate native project with `npx expo prebuild --platform android`.
5. Add/implement native module and service.
6. Build development APK and test on device.
7. For release: configure signing securely and build release artifact.

## Build verification checklist
- [ ] Clean npm install
- [ ] Expo dependency compatibility check
- [ ] TypeScript check
- [ ] App starts
- [ ] Android navigation smoke test
- [ ] Build APK
- [ ] Install APK on physical device
- [ ] Test on at least two Android API levels before production release

Build commands and platform requirements may change; consult the official Expo docs before final release.
