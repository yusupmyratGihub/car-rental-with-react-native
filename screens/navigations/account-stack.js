import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../login-screen";
import ProfileScreen from "../profile-screen";
import RegisterScreen from "../register-screen";
import ReservationDetailsScreen from "../reservation-detail-screen";
import ReservationScreen from "../reservation-screen";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="reservation" component={ReservationScreen} />
      <Stack.Screen
        name="reservation-details"
        component={ReservationDetailsScreen}
      />

      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
export default AccountStack;
