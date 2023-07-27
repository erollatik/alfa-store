import React from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import Config from 'react-native-config';
import usePost from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    if (data) {
      if (data.status === 'Error') {
        Alert.alert('AlfaStore', 'User not found!');
      } else {
        navigation.navigate('ProductsPage');
      }
      console.log(data);
    } else {
      Alert.alert('AlfaStore', 'Something went wrong!');
    }
  }

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
