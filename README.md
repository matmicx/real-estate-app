# SOYL-mobile

A cross-platform application built with React Native for mobile and Electron for desktop.

## Overview

SOYL-mobile is a unified codebase solution that delivers a seamless experience across iOS, Android, and desktop platforms using React Native and Electron.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16.0.0 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- For iOS: Xcode (Mac only)
- For Android: Android Studio, JDK 11+
- For Desktop: No additional requirements

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/SOYL-mobile.git
   cd SOYL-mobile
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. For iOS development (Mac only), install pods:
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Mobile Platforms

**iOS (Mac only):**

```bash
npm run ios
# or specific device
npm run ios -- --simulator="iPhone 14 Pro"
```

**Android:**

```bash
npm run android
# Make sure you have an emulator running or device connected
```

### Desktop Platform

**Run in development mode:**

```bash
npm run desktop
```

**Build desktop app:**

```bash
npm run build-desktop
```

## Project Structure

```
SOYL-mobile/
├── android/          # Android native code
├── ios/              # iOS native code
├── electron/         # Electron-specific code
│   └── main.js       # Electron main process
├── src/              # Cross-platform JavaScript/React code
│   ├── components/   # Reusable components
│   ├── screens/      # App screens
│   ├── navigation/   # Navigation setup
│   └── utils/        # Utility functions
├── App.js            # Main app component
└── index.js          # Entry point
```

## Development

### Code Organization

- Use the `Platform.OS` API for platform-specific code
- Place shared code in the `src` directory
- Create platform-specific implementations in separate files when needed

### Styling

The app uses React Native's StyleSheet API, which works across platforms.

### Adding Dependencies

When adding new dependencies, ensure they support all platforms:

```bash
npm install --save new-package
# Check platform compatibility in the package documentation
```

## Troubleshooting

### Common Issues

- **Metro bundler issues**: Try clearing cache with `npx react-native start --reset-cache`
- **iOS build errors**: Ensure CocoaPods is up to date and reinstall pods
- **Android build errors**: Check your JDK version and Android SDK setup
- **Electron errors**: Verify that main.js paths are correct for your project structure

### Debugging

- React Native Debugger works for mobile development
- For Electron, use Chrome DevTools (accessible from the View menu in dev mode)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
