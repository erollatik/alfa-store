import React from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import Config from 'react-native-config';
import usePost from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }
  console.log('data' + data);

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Alfa Store', 'User not found!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
    console.log(data);
  }
  // if (!loading) {
  //   if (data) {
  //     if (data.token !== undefined) {
  //       console.log('Success');
  //       navigation.navigate('ProductsPage');
  //     } else {
  //       Alert.alert('Alfa Store', 'Something went wrong!');
  //     }
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image source={require('../../Assets/logo.png')} style={styles.logo} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter your username"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Enter your password"
              value={values.password}
              onType={handleChange('password')}
              isSecure
            />
            <Button text="Login" onPress={handleSubmit} loading={loading} />
            <Text style={styles.alfastore}>Alfa Store Ⲁ</Text>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};
