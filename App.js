import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "./utils/constants/colors";
import TabNavigator from "./screens/navigations/tab-navigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.color1,
    secondary: colors.color2,
    primary: colors.color3,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <TabNavigator />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
