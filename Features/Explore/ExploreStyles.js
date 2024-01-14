import { StyleSheet } from 'react-native';

const exploreStyles = StyleSheet.create({
  // Explore.jsx
  container: {
    flex: 1,
  },
  title: {
    marginTop: 150,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  twoColumnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 25,
  },
  // PlantInfo.jsx
  cardContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    height: 200,
    width: 150,
    borderRadius: 20,
    alignItems: 'center',
  },
  name: {
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  popup: {
    alignItems: 'center',
  },
});

export default exploreStyles;
