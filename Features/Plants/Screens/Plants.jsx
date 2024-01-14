// npm i
// npx expo start

import React, { useState, useEffect } from 'react';
import {
  Text, ScrollView, ImageBackground, View,
} from 'react-native';
import styles from '../PlantsStyles';
import ThingSpeak from './ThingSpeak';

const image = require('../../../assets/plant3.jpg');

export default function Plants() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>My Plants</Text>
        <View style={styles.plantInformation}>
          <View style={styles.information1}>
            <Text style={styles.statsTitle}>Temp</Text>
            <Text style={styles.statsPercent}>50%</Text>
          </View>
          <View style={styles.information2}>
            <Text styles={styles.statsTitle}>Humidity</Text>
            <Text style={styles.statsPercent}>60%</Text>
          </View>
          <View style={styles.information2}>
            <Text styles={styles.statsTitle}>Water Level</Text>
            <Text style={styles.statsPercent}>60%</Text>
          </View>
        </View>
      </ImageBackground>
      <ImageBackground source={image} style={styles.image}>
        <ThingSpeak />
      </ImageBackground>

    </ScrollView>
  );
}
