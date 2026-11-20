# APK Build and Install Instructions (Beginner)

## A. Prepare
1. Download and install Node.js LTS.
2. Install VS Code.
3. Download this project ZIP and extract it (Windows: right-click ZIP → Extract All).
4. Open the extracted `SpiderBrowser` folder in VS Code.
5. In VS Code, choose Terminal → New Terminal.

## B. Install dependencies and preview
Run these commands one at a time:

```bash
npm install
npx expo install --fix
npx expo start
```

For UI preview, install Expo Go on your Android phone and scan the QR code. This is only the scaffold preview; native services require a custom build.

## C. Build APK with EAS (cloud)
1. Sign up/login at Expo: https://expo.dev/
2. In VS Code terminal:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

3. Follow any prompts. Wait for build completion.
4. EAS provides a build link. Open the link and download the `.apk`.
5. If the build is an `.aab`, it is a store bundle and not directly installable as a normal APK; choose the preview APK profile for direct installation.

## D. Install APK on Android
1. Download APK to the phone, usually in Downloads.
2. Open the phone's Files app and select the APK.
3. Android may show a security dialog. Go to Settings and enable **Allow from this source** for the app you used to open the APK (Files/browser).
4. Go back and select Install.
5. Open Spider Browser from the app drawer.
6. Optionally turn off the unknown-app installation permission again.

Menu names differ between Android versions and phone manufacturers. Only install APKs you trust.

## E. Local APK build (advanced)
Install Android Studio and SDK; ensure the required JDK is installed per current Expo/Android compatibility.

```bash
npx expo prebuild --platform android
npx expo run:android
```

Windows PowerShell:

```powershell
cd android
.\gradlew.bat assembleDebug
```

APK output:
`android/app/build/outputs/apk/debug/app-debug.apk`

## Troubleshooting
- `npm` not found: reinstall Node.js LTS and restart VS Code/terminal.
- SDK not found: install Android SDK through Android Studio and configure environment.
- Build fails on package mismatch: run `npx expo install --fix`, review the full error, and avoid randomly upgrading packages.
- Phone cannot install: confirm APK (not AAB), storage space, and unknown-app permission.
- QR won't connect: same Wi-Fi, disable VPN temporarily, or use `npx expo start --tunnel` if available.
