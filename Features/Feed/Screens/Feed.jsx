// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Text, View, ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../FeedStyles';

export default function Feed() {
  const [selectedPlant, setSelectedPlant] = useState();
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
