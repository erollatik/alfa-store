import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Products.style';
const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    <Loading />;
  }
  if (error) {
    <Error />;
  }
  return (
    <FlatList data={data} renderItem={renderProduct} style={styles.container} />
  );
};

export default Products;
