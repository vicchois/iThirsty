import { Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../AboutStyles';

export default function Person({ name, body, picture }) {
  return (
    <>
      <Image source={picture} style={styles.picture} />
      <Text style={styles.person}>{name}</Text>
      <Text style={styles.bio}>{body}</Text>
    </>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  picture: PropTypes.number.isRequired,
};
