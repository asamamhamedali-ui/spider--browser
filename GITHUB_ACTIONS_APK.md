# Build Spider Browser APK with GitHub Actions

This repository includes `.github/workflows/android-apk.yml` to build a **debug APK** on GitHub-hosted runners.

## Run a build

1. Push the project to a GitHub repository. Ensure the default branch is `main` or `master`.
2. Open the repository on GitHub and select **Actions**.
3. Choose **Spider Browser - Android APK** from the workflows list.
4. For a manual build, select **Run workflow**. Builds also run automatically on pushes and pull requests targeting `main` or `master`.
5. Wait for the workflow to finish successfully.
6. Open the completed workflow run, scroll to **Artifacts**, and download `spider-browser-debug-apk`.
7. Extract the artifact ZIP. It contains `app-debug.apk`. Transfer it to your Android device and install it. You may need to allow installation from the file manager you use.

## What the workflow does

- Checks out the source code.
- Installs Node.js 22 and Java 17.
- Installs JavaScript dependencies.
- Runs Expo Prebuild to generate the Android native project.
- Runs Gradle `assembleDebug`.
- Uploads the APK as a GitHub Actions artifact for 14 days.

## Notes and limitations

- This workflow builds a **debug APK**, not a signed Play Store release.
- It does not require an Expo account or `EXPO_TOKEN`.
- Expo Prebuild generates the `android/` directory during the run; generated native files are not committed by default.
- This project is currently a UI/application scaffold. The APK is not yet a full Chromium-based browser and its advanced native download manager is not implemented.
- If a build fails, open the failed step's log in Actions and share it for troubleshooting.
