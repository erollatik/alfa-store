import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ddc488',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    minHeight: 100,
  },
  body_container: {
    padding: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
