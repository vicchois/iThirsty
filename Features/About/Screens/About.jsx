import React from 'react';
import {
  Button, Text, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
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
    picture: require('../../../assets/plant.jpg'),
  },
];

export default function About({ navigation }) {
  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About iThirsty</Text>
      <Button
        style={styles.button}
        title="Home"
        onPress={navigateToLanding}
      />
      {
        OUR_TEAM.map((person) => (
          <Person key={person.id} name={person.name} body={person.body} picture={person.picture} />
        ))
      }
    </ScrollView>
  );
}

About.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
