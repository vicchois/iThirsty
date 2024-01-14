import React from 'react';
import {
  Text, ScrollView,
} from 'react-native';
import Person from '../Components/Person';
import styles from '../AboutStyles';

const OUR_TEAM = [
  {
    id: 1,
    name: 'Victoria Choi',
    body: 'Computer Science, 2026',
    picture: require('../../../assets/victoria.png'),
  },
  {
    id: 2,
    name: 'Nathan Chen',
    body: 'Electrical Engineering, 2026',
    picture: require('../../../assets/nathan.png'),
  },
  {
    id: 3,
    name: 'Jerard Agravante',
    body: 'Electrical Engineering, 2026',
    picture: require('../../../assets/jerard.png'),
  },
  {
    id: 4,
    name: 'Simba Chen',
    body: 'Electrical Engineering, 2026',
    picture: require('../../../assets/simba.png'),
  },
  {
    id: 5,
    name: 'Blake Dee',
    body: 'Mechanical Engineering, 2026',
    picture: require('../../../assets/blake.png'),
  },
];

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About iThirsty</Text>
      {
        OUR_TEAM.map((person) => (
          <Person key={person.id} name={person.name} body={person.body} picture={person.picture} />
        ))
      }
    </ScrollView>
  );
}
