// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Button, Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    margin: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    marginTop: 100,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function Feed({ navigation }) {
  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant 1</Text>
      <Text style={styles.text}>Moisture</Text>
      <Text style={styles.text}>Helpful Information</Text>

      <Button
        style={styles.button}
        title="Home"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
