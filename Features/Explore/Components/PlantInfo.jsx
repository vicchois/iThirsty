import React, { useState } from 'react';
import {
  Text, Image, View, TouchableOpacity, Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../ExploreStyles';

export default function PlantInfo({ name, data, picture }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={picture} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

PlantInfo.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
    ).isRequired,
  }).isRequired,
  picture: PropTypes.number.isRequired,
};
