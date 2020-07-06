import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={route.params.colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorBox name={item.colorName} hex={item.hexCode} type={'list'} />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
