import React from 'react';
import {
  Text, View, ImageBackground,
} from 'react-native';
import styles from '../LandingStyles';

const image = require('../../../assets/plant.jpg');

export default function Landing() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>Welcome to iThirsty!</Text>
        <Text style={styles.text}>Helping you water your plants</Text>
      </ImageBackground>
    </View>
  );
}
