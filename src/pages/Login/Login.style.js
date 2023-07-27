import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo_container: {},
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  body_container: {},
  alfastore: {
    color: 'red',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
