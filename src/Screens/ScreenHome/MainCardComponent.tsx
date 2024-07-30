import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardContainer from './CardContainer';
import { CardData } from './utils/types';
const cardData: CardData[] = [
  {
    name: 'Chicken Hawaiian',
    description: 'Chicken, Cheese and Pineapple',
   // img: require('../assets/cardImages/cardimg1.png'),
    price:'$ 12.20',
    rate:4.5,
    ratecount:'(25+)'
  },
  {
    name: 'Red N Hot Pizza',
    description: 'Chicken, Chili',
    //img: require('../assets/cardImages/cardimg2.png'),
    price:'$ 10.35',
    rate:4.5,
    ratecount:'(25+)',
  },
];

const MainCardComponent: React.FC= () => {
  return (
    <View style={styles.container}>
      {cardData.map((item, index) => (
        <CardContainer key={index} name={item.name} description={item.description}  price={item.price} rate={item.rate} ratecount={item.ratecount}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainCardComponent;