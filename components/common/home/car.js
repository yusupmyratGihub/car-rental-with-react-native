import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Button } from "react-native-paper";

const Car = ({ data }) => {
  //const { model } = data;
  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.cover}
        source={{ uri: "https://picsum.photos/700" }}
      />

      <Card.Content style={styles.content}>
        <View>
          <Text variant="titleLarge">Card title</Text>
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
