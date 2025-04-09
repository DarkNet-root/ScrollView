import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const LogoItens = ({ item: { uri, nome, width, height } }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={[styles.image, { width, height, borderRadius: width / 2 }]} />
      <Text style={styles.text}>{nome}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    marginRight: 10,
  },
  text: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 22,
  },
});

export default LogoItens;
