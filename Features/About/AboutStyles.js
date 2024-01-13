import { StyleSheet } from 'react-native';

const aboutStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    margin: 20,
  },
  person: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  bio: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: 100,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default aboutStyles;
