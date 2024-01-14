// npm i
// npx expo start

import React from 'react';
import {
  Text, ScrollView, View,
} from 'react-native';
import PlantInfo from '../Components/PlantInfo';
import styles from '../ExploreStyles';

export default function Explore() {
  const PLANT_INFO = [
    {
      id: 2,
      name: 'Succulents',
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
      name: 'Ferns',
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
    {
      id: 5,
      name: 'Cacti',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [0, 30] },
        ],
      },
      picture: require('../../../assets/succulents.jpg'),

    },
    {
      id: 6,
      name: 'Philodendrion',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [0, 30] },
        ],
      },
      picture: require('../../../assets/ferns.jpeg'),

    },
    {
      id: 7,
      name: 'Roses',
      data: {
        labels: ['min', 'max'],
        datasets: [
          { data: [60, 70] },
        ],
      },
      picture: require('../../../assets/floral.jpeg'),

    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore!</Text>
      <View style={styles.twoColumnContainer}>
        {PLANT_INFO.map((plant) => (
          <PlantInfo
            key={plant.id}
            name={plant.name}
            data={plant.data}
            picture={plant.picture}
            containerStyle={styles.plantContainer}
          />
        ))}
      </View>
    </ScrollView>
  );
}
