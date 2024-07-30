import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { CardContainerProps } from './utils/types';

const CardContainer: React.FC<CardContainerProps> = ({
  name,
  description,
  price,
  rate,
  ratecount,
}) => {
  return (
    <View style={styles.card}>
      <View>
        {/* <Image style={styles.image} source={img} /> */}
        <TouchableOpacity style={styles.icon}>
          {/* <Image source={require('../assets/heart.png')} /> */}
        </TouchableOpacity>
        {/* <ImageBackground
          style={styles.pricebg}
          source={require('../assets/pricebg.png')}>
          <Text style={styles.pricetext}>{price}</Text>
        </ImageBackground> */}

        <View style={styles.rating}>
          <Text style={styles.ratetext}>{rate}</Text>
          {/* <Image style={styles.star} source={require('../assets/star.png')} /> */}
          <Text  style={styles.ratecount}>{ratecount}</Text>
        </View>
        
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    margin: 10,
    borderColor:'black',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  pricebg: {
    position: 'absolute',
    top:-12,
    width: 150,
    height: 110,
    left:-12
  },
  pricetext: {
    top: 29,
    color: 'black',
    left: 32,
    fontWeight: 'bold',
    fontSize:24,
  },
  ratetext: {
    color: 'black',
    marginRight:4,
    fontSize:18,
    fontWeight:'bold',
  },
  star: {
    top: 7,
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    bottom: -14,
    elevation: 4,
  },
  ratecount:{
    top:2,
    marginLeft:4
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: -75,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    paddingLeft: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    paddingLeft: 15,
    paddingBottom: 10,
  },
});

export default CardContainer;