import { StyleSheet } from 'react-native';

const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    marginTop: 100,
    marginBottom: 50,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default feedStyles;
