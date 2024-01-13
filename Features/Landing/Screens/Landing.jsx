import React from 'react';
import {
  Text, View,
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from '../LandingStyles';

export default function Landing() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Welcome to iThirsty!</Text>
        <Text style={styles.text}>Helping you water your plants</Text>
      </View>
      <View style={styles.bottom}>
        <LottieView
          style={styles.animation}
          source={require('../../../assets/plant.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}
