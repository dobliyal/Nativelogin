import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { CardContainerProps } from '../ScreenHome/utils/types';
import DownloadIcon from '../../utils/download';
import EyeIcon from '../../utils/eye';
import HeartIcon from '../../utils/like';
const CardContainer: React.FC<CardContainerProps> = ({ pageURL, likes, tags, views, downloads }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => Linking.openURL(pageURL)}>
        <Image
          source={{ uri: pageURL }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Tags: {tags}</Text>
      <View style={styles.description}>
        <View style={styles.temp}>
            <HeartIcon width={16} height={16}  color="#000" />
            <Text>{likes}</Text>
          </View>
        <View style={styles.temp}>
            <EyeIcon width={16} height={16} color="#000" />
            <Text>{views}</Text>
          </View>
        <View style={styles.temp}>
            <DownloadIcon width={16} height={16} color="#000" />
            <Text>{downloads}</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    temp:{
      flexDirection:'row'
    },
  card: {
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    margin: 10,
    borderColor: 'black',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  description: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
});

export default CardContainer;
