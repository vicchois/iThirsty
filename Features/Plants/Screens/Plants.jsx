// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Text, ScrollView, ImageBackground, View,
} from 'react-native';
import styles from '../PlantsStyles';
import ThingSpeak from './ThingSpeak';

const image = require('../../../assets/plant3.jpg');

export default function Plants() {
  const [lastTemp, setLastTemp] = useState(null);
  const [lastHumid, setLastHumid] = useState(null);
  const [lastWater, setLastWater] = useState(null);
  const [status, setStatus] = useState('iFull');

  const handleLastTempChange = (value) => {
    setLastTemp(value);
  };
  const handleLastHumidChange = (value) => {
    setLastHumid(value);
  };
  const handleLastWaterChange = (value) => {
    setLastWater(value);

    if (value !== null) {
      if (value < 5) {
        setStatus('iThirsty. Water is less than 5cm');
      } else {
        setStatus('iFull');
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>My Plants</Text>
        <View style={styles.plantInformation}>
          <View style={styles.status}>
            <Text style={styles.statsTitle}>Status </Text>
            <Text style={styles.statusInfo}>{status}</Text>
          </View>
          <View style={styles.information1}>
            <Text style={styles.statsTitle}>Temp</Text>
            <Text style={styles.statsPercent}>
              {lastTemp}
              {' '}
              °C
            </Text>
          </View>
          <View style={styles.information2}>
            <Text styles={styles.statsTitle}>Humidity</Text>
            <Text style={styles.statsPercent}>
              {lastHumid}
              {' '}
              %
            </Text>
          </View>
          <View style={styles.information2}>
            <Text styles={styles.statsTitle}>Water Level</Text>
            <Text style={styles.statsPercent}>
              {lastWater}
              {' '}
              cm
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ThingSpeak
        onLastTempChange={handleLastTempChange}
        onLastHumidChange={handleLastHumidChange}
        onLastWaterChange={handleLastWaterChange}
        style={styles.charts}
      />

    </ScrollView>
  );
}
