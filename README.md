# Spider Browser — Intelligent Browser & Download Manager

**Project status:** Mobile scaffold / UI prototype  
**Initial target:** Android  
**Stack:** Expo, React Native, TypeScript, Expo Router, Zustand

> Honest status: this archive contains the app shell and prototype screens. It does **not** yet contain a working Chromium browser, native background download service, multi-connection transfer engine, persistent download database, or AI implementation. Those are planned milestones, not current features.

## Included
- Dashboard, Browser, Downloads, Library and Settings screens
- TypeScript download task model and lifecycle transition rules
- Android app identity: `com.spider.browser`
- Build profiles in `eas.json`
- Architecture, security, acceptance criteria, roadmap, download engine specification, and build guide

## 1. Prerequisites
- Node.js LTS: https://nodejs.org/
- Visual Studio Code: https://code.visualstudio.com/
- Android phone (Android 8+ recommended for initial test) or Android Studio emulator
- For APK cloud build: Expo account and EAS CLI
- For local native builds: Android Studio, Android SDK, JDK version supported by the current Expo/Android toolchain

## 2. Install dependencies
Extract this ZIP first. Open the extracted `SpiderBrowser` folder in VS Code. Open **Terminal → New Terminal**, then run:

```bash
npm install
npx expo install --fix
npx expo start
```

For a quick UI preview, scan the QR code using Expo Go. This preview does not include future native Kotlin modules.

## 3. Create an installable Android APK (cloud build)
The `preview` profile in `eas.json` is configured for APK output.

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

When the build finishes, EAS displays a build page/download URL. Open it on your phone or PC and download the `.apk` file.

### Install the APK on Android
1. Transfer/download the APK to your Android phone.
2. Open the APK in Files / Downloads.
3. If Android blocks installation, go to the prompt for **Install unknown apps** and allow your file manager or browser for this installation.
4. Return and tap **Install**.
5. Open Spider Browser.
6. After installation, disable “Allow from this source” if you no longer need it.

Only install APKs you built yourself or trust. Android menu names vary by manufacturer/version.

## 4. Local Android build
This requires Android Studio/SDK configured and a generated native project:

```bash
npx expo prebuild --platform android
npx expo run:android
```

For a local APK, after native generation, use Gradle from the Android project:

```bash
cd android
./gradlew assembleDebug
```

On Windows Command Prompt/PowerShell:

```powershell
cd android
.\gradlew.bat assembleDebug
```

Expected debug APK location:
`android/app/build/outputs/apk/debug/app-debug.apk`

This local Gradle route may require Android SDK/JDK configuration. The EAS cloud route is usually simpler for beginners.

## 5. Documentation
Read in this order:
1. `docs/PROJECT_SPECIFICATION.md`
2. `docs/ARCHITECTURE.md`
3. `docs/ROADMAP.md`
4. `docs/ACCEPTANCE_CRITERIA.md`
5. `docs/ENGINEERING_RULES.md`
6. `docs/SECURITY.md`
7. `docs/DOWNLOAD_ENGINE_DESIGN.md`
8. `docs/APK_BUILD_AND_INSTALL.md`

## Current routes
- `/` Dashboard
- `/browser` Browser scaffold
- `/downloads` Download manager scaffold
- `/library` Library scaffold
- `/settings` Settings scaffold

## Build an APK with GitHub Actions

The repository includes a GitHub Actions workflow at `.github/workflows/android-apk.yml`. After pushing to `main` or `master`, the workflow runs automatically; you can also start it from the GitHub **Actions** tab using **Run workflow**. It builds a debug APK and uploads it as the `spider-browser-debug-apk` artifact. No Expo token is needed for this workflow.

See [GitHub Actions APK guide](docs/GITHUB_ACTIONS_APK.md) for the download/install steps.
