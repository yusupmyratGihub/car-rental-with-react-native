import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useStore } from "../store";
import Car from "../components/common/home/car";
import vehicless from "../api/cars.json";

const CarsScreen = () => {
  const { vehiclesState } = useStore();
  const { vehicles } = vehiclesState;
  return (
    <View style={styles.container}>
      <Car />

      {vehicless.map((item) => (
        <Car />
      ))}
    </View>
  );
};

export default CarsScreen;

const styles = StyleSheet.create({
  container: { padding: 15 },
});
