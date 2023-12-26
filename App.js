import { ScrollView, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  MD3DarkTheme as DefaultTheme,
  MD3LightTheme,
  PaperProvider,
  Text,
} from "react-native-paper";
import { DarkScheme } from "./src/themes/DarkScheme";
import { LightScheme } from "./src/themes/LightScheme";
import LandingScreen from "./src/screens/LandingScreen";
import NavigationStack from "./src/navigation/NavigationStack";
import { en, registerTranslation } from "react-native-paper-dates";

registerTranslation("en", en);

const theme = {
  ...DefaultTheme,
  colors: DarkScheme,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <NavigationStack />
      </SafeAreaView>
    </PaperProvider>
  );
}
