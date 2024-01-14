import { Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../AboutStyles';

export default function Person({
  name, major, year, picture,
}) {
  return (
    <View style={styles.bioContainer}>
      <Image source={picture} style={styles.picture} />
      <View style={styles.bio}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.body}>{major}</Text>
        <Text style={styles.body}>{year}</Text>
      </View>
    </View>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  picture: PropTypes.number.isRequired,
};
