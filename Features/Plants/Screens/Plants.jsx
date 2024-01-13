// npm i
// npx expo start

import React from 'react';
import {
  Text, ScrollView, ImageBackground, View,
} from 'react-native';
import styles from '../PlantsStyles';

const image = require('../../../assets/plant2.jpg');

export default function Plants() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>My Plants</Text>
        <View style={styles.information}>
          <Text style={styles.statsTitle}>Temp</Text>
          <Text style={styles.statsPercent}>50%</Text>
        </View>
        <View style={styles.information}>
          <Text styles={styles.statsTitle}>Humidity</Text>
          <Text style={styles.statsPercent}>60%</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
