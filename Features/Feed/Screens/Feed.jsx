// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Button, Text, View, ImageBackground,
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
      id: 2,
      name: 'Succulents and Cacti',
      min: 0,
      max: 30,
      picture: require('../../../assets/succulents.jpg'),
    },
    {
      id: 3,
      name: 'Ferns and Philodendron',
      min: 40,
      max: 70,
      picture: require('../../../assets/ferns.jpeg'),
    },
    {
      id: 4,
      name: 'Floral Plants',
      min: 50,
      max: 70,
      picture: require('../../../assets/floral.jpeg'),
    },
  ];

  const handlePlantSelection = (itemValue) => {
    const selectedPlantInfo = PLANT_INFO.find((plant) => plant.id.toString() === itemValue);
    setSelectedPlant(selectedPlantInfo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iThirsty</Text>
      <Button
        style={{ marginBottom: 20 }}
        title="Home"
        onPress={navigateToLanding}
      />
      <Text style={styles.subtitle}>Select Plant:</Text>
      <Picker
        selectedValue={selectedPlant ? selectedPlant.id.toString() : null}
        onValueChange={(itemValue) => handlePlantSelection(itemValue)}
      >
        {PLANT_INFO.map((plant) => (
          <Picker.Item key={plant.id} label={plant.name} value={plant.id.toString()} />
        ))}
      </Picker>

      {selectedPlant && (
      <View style={styles.information}>
        <Text style={styles.subtitle}>Moisture</Text>
        <ImageBackground source={selectedPlant.picture} style={styles.image} />
      </View>
      )}
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
