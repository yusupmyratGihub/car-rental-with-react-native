import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, StatusBar } from "react-native";
import colors from "./utils/constants/colors";
import { StoreProvider } from "./store";
import Main from "./main";
theme = {
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
    <StoreProvider>
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    </StoreProvider>
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
