// npm i
// npx expo start

import React, { useState } from 'react';
import {
  Text, ScrollView, ImageBackground, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { BarChart } from 'react-native-chart-kit';
import styles from '../FeedStyles';

export default function Feed() {
  const [selectedPlant, setSelectedPlant] = useState();
  const PLANT_INFO = [
    {
      id: 2,
      name: 'Succulents and Cacti',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [0, 30] },
        ],
      },
      picture: require('../../../assets/succulents.jpg'),
    },
    {
      id: 3,
      name: 'Ferns and Philodendron',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [40, 70] },
        ],
      },
      picture: require('../../../assets/ferns.jpeg'),
    },
    {
      id: 4,
      name: 'Floral Plants',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [50, 70] },
        ],
      },
      picture: require('../../../assets/floral.jpeg'),
    },
  ];

  const handlePlantSelection = (itemValue) => {
    const selectedPlantInfo = PLANT_INFO.find((plant) => plant.id.toString() === itemValue);
    setSelectedPlant(selectedPlantInfo);
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plant Moisture</Text>
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
        <ImageBackground source={selectedPlant.picture} style={styles.image} />
        <BarChart
          data={selectedPlant.data}
          width={400}
          height={400}
          chartConfig={chartConfig}
          styles={{ margin: 100 }}
        />
      </View>
      )}
    </ScrollView>
  );
}
