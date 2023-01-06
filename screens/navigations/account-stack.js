import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../login-screen";
import ProfileScreen from "../profile-screen";
import RegisterScreen from "../register-screen";
import ReservationDetailsScreen from "../reservation-detail-screen";
import ReservationScreen from "../reservation-screen";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="reservation"
        component={ReservationScreen}
        options={{ title: "Reservation" }}
      />
      <Stack.Screen
        name="reservation-details"
        component={ReservationDetailsScreen}
        options={{ title: "Details" }}
      />

      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Resgister" }}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
