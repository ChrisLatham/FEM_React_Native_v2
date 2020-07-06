import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    ).catch();
    if (result.ok) {
      console.log(result);
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
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
  btnContainer: {
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  btnText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 10,
    color: '#fff',
  },
});

export default Home;
