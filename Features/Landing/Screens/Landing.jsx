import React from 'react';
import {
  Button, StyleSheet, Text, View, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';

const image = require('../../../assets/plant.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 1000,
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
  button: {
    marginVertical: 20,
  },
});

export default function Landing({ navigation }) {
  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };
  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Welcome to iThirsty!</Text>
        <Text style={styles.text}>Helping you water your plants</Text>

        <Button
          style={styles.button}
          title="Go to Plants"
          onPress={navigateToFeed}
        />
        <Button
          style={styles.button}
          title="About Us"
          onPress={navigateToAbout}
        />
      </ImageBackground>
    </View>
  );
}

Landing.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
