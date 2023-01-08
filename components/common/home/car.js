import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Button, Paragraph } from "react-native-paper";
import { getVehiclesImage } from "../../../utils/functions/vehicle";

const Car = ({ data }) => {
  const { id, model, pricePerHour, image } = data;
  const getVehicleImage = getVehiclesImage(image[0]);
  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={getVehicleImage} />

      <Card.Content style={styles.content}>
        <View>
          <Text variant="titleLarge">{model}</Text>
          <Paragraph> from ${pricePerHour}/hour</Paragraph>
        </View>
        <Button>Ok</Button>
      </Card.Content>
    </Card>
  );
};

export default Car;

const styles = StyleSheet.create({
  card: { borderRadius: 30, marginTop: 15 },
  content: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
