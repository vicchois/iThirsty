import { StyleSheet } from 'react-native';

const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  information: {
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400,
    alignItems: 'center',
    padding: 100,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    marginTop: 100,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default feedStyles;
