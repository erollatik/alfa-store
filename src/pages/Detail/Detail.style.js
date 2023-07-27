import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddc488',
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 20,
    fontSize: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
