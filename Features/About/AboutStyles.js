import { StyleSheet } from 'react-native';

const aboutStyles = StyleSheet.create({
  bioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  bio: {
    flex: 1,
    display: 'flex',
    marginTop: 20,
  },
  name: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  body: {
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
