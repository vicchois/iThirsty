import { Text, Image, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../AboutStyles';

export default function Person({ name, body, picture }) {
  return (
    <View style={styles.bioContainer}>
      <Image source={picture} style={styles.picture} />
      <View style={styles.bio}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  picture: PropTypes.number.isRequired,
};
