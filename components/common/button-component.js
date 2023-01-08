import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

{
  /*
    <Button
  title="Press me"
  onPress={() => alert('Button pressed!')}
/>

    */
}

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default Button;
