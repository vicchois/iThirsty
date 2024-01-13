import React from 'react';
import {
  Button, Text, View, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../LandingStyles';

const image = require('../../../assets/plant.jpg');

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
