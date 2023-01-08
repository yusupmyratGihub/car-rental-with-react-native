import React from "react";
import { View, StyleSheet } from "react-native";

{
  /*

  This component accepts a few props:

numColumns: the number of columns in the grid (defaults to 2)
items: an array of items to be displayed in the grid
renderItem: a function that takes an item as an argument and returns a react element to be rendered in the grid

    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

<Grid
  items={items}
  renderItem={(item) => <Text>{item}</Text>}
/>
    */
}
const Grid = (props) => {
  const numColumns = props.numColumns || 2;
  const items = props.items || [];
  const renderItem = props.renderItem || (() => {});
  const itemWidth = 100 / numColumns;

  return (
    <View style={styles.grid}>
      {items.map((item, index) => (
        <View key={index} style={{ width: itemWidth + "%" }}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: -1,
  },
});

export default Grid;
