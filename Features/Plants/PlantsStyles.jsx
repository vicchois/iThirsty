import { StyleSheet } from 'react-native';

const plantsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    height: 1000,
  },
  title: {
    marginTop: 150,
    marginLeft: 50,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text: {
    margin: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  information: {
    marginTop: 50,
    marginLeft: 50,
    color: 'black',
    backgroundColor: '#9db98b',
    width: 125,
    padding: 20,
    borderRadius: 10,
  },
  statsTitle: {
    fontSize: 15,
  },
  statsPercent: {
    fontSize: 25,
  },
});

export default plantsStyles;
