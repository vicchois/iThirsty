import { StyleSheet } from 'react-native';

const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: 350,
    width: 350,
    marginTop: 40,
  },
  text: {
    marginTop: 20,
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  button: {
    marginVertical: 20,
  },
});

export default landingStyles;
