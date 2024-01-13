// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Text, ScrollView, ImageBackground, View,
} from 'react-native';
import styles from '../PlantsStyles';

const image = require('../../../assets/plant2.jpg');

export default function Plants() {
  return (
    <ScrollView>
      <ImageBackground source={image} style={styles.image} />
    </ScrollView>
  );
}
