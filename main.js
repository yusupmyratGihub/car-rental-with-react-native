import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "./store";
import { getVeicles } from "./api/vehicle-service";
import { setVehiclesInStore } from "./store/vehicles/vehicles-actions";
import TabNavigator from "./screens/navigations/tab-navigator";

const Main = () => {
  const { dispachVehicles } = useStore();

  const loadData = async () => {
    try {
      /* LOAD VEHICLES*/
      const repVehicles = await getVeicles();
      dispachVehicles(setVehiclesInStore(repVehicles.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TabNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
