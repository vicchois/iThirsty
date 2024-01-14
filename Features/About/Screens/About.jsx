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
    major: 'Computer Science',
    year: '2026',
    picture: require('../../../assets/victoria.png'),
  },
  {
    id: 2,
    name: 'Nathan Chen',
    major: 'Electrical Engineering',
    year: '2026',
    picture: require('../../../assets/nathan.png'),
  },
  {
    id: 3,
    name: 'Jerard Agravante',
    major: 'Electrical Engineering',
    year: '2026',
    picture: require('../../../assets/jerard.png'),
  },
  {
    id: 4,
    name: 'Simba Chen',
    major: 'Electrical Engineering',
    year: '2026',
    picture: require('../../../assets/simba.png'),
  },
  {
    id: 5,
    name: 'Blake Dee',
    major: 'Mechanical Engineering',
    year: '2026',
    picture: require('../../../assets/blake.png'),
  },
];

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>iThirsty Team</Text>
      {
        OUR_TEAM.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            major={person.major}
            year={person.year}
            picture={person.picture}
          />
        ))
      }
    </ScrollView>
  );
}
