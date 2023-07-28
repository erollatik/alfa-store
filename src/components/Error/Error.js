import React from 'react';
import Lottieview from 'lottie-react-native';

function Error() {
  return (
    <Lottieview source={require('../../Assets/error.json')} autoPlay loop />
  );
}

export default Error;
