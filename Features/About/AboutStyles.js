import { StyleSheet } from 'react-native';

const aboutStyles = StyleSheet.create({
  bioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: '#bdd1a0',
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  bio: {
    flex: 1,
    display: 'flex',
  },
  name: {
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
    marginRight: 20,
    marginBottom: 5,
  },
  body: {
    fontSize: 15,
    textAlign: 'left',
  },
  title: {
    marginTop: 150,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default aboutStyles;
