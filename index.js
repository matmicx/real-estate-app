/**
 * @format
 */

import { AppRegistry, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Register for React Native
AppRegistry.registerComponent(appName, () => App);

// Register for Web/Electron
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root"),
  });
}
