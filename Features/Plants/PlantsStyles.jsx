import { StyleSheet } from 'react-native';

const plantsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plantInformation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    resizeMode: 'cover',
    height: 780,
    width: 500,
  },
  title: {
    marginTop: 150,
    marginBottom: 10,
    marginLeft: 50,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title2: {
    fontSize: 30,
    marginTop: 50,
    marginLeft: 50,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text: {
    margin: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  information1: {
    marginTop: 30,
    marginLeft: 50,
    color: 'black',
    backgroundColor: '#9db98b',
    width: 125,
    padding: 20,
    borderRadius: 10,
  },
  information2: {
    marginTop: 30,
    marginLeft: 50,
    color: 'black',
    backgroundColor: '#bdd1a0',
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
  chartContainerStyles: {
    backgroundColor: 'white',
    margin: 10,
  },
  chart: {
    marginBottom: 10,
  },
  status: {
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 10,
    width: 300,
    padding: 20,
    paddingBottom: 23,
    backgroundColor: '#9eb372',
  },
});

export default plantsStyles;
