import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../about-screen";
const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="about-screen" component={AboutScreen} />
    </Stack.Navigator>
  );
};
export default AboutStack;
