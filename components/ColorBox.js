import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hex,
  };
  const textColor = {
    color:
      parseInt(props.hex.replace('#', ''), 16) > 0xffffff / 1.1
        ? '#000'
        : '#fff',
  };
  if (props.type === 'list') {
    return (
      <View style={[styles.box, boxColor]}>
        <Text style={textColor}>{`${props.name} ${props.hex}`}</Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.box, boxColor]}>
        <Text style={textColor}>{props.text}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default ColorBox;
