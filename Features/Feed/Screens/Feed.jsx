// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import styles from '../FeedStyles';

export default function Feed({ navigation }) {
  const [selectedPlant, setSelectedPlant] = useState();

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const PLANT_INFO = [
    {
      id: 1,
      name: 'House Plant',
      min: 20,
      max: 50,
    },
    {
      id: 2,
      name: 'Bamboo',
      min: 30,
      max: 50,
    },
    {
      id: 3,
      name: 'Succulent',
      min: 10,
      max: 20,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iThirsty</Text>
      <Text style={styles.text}>Select Plant:</Text>
      <Picker
        selectedValue={selectedPlant}
        onValueChange={(itemValue, itemIndex) => setSelectedPlant(itemValue)}
      >
        <Picker.Item label="House Plant" value="1" />
        <Picker.Item label="Bamboo" value="2" />
        <Picker.Item label="Succulent" value="3" />
      </Picker>

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
