import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {CardContainerProps} from '../utils/types';
import DownloadIcon from '../../../utils/download';
import EyeIcon from '../../../utils/eye';
import HeartIcon from '../../../utils/like';
import { styles } from '../ScreenHomeStyles';

const CardContainer: React.FC<CardContainerProps> = ({
  pageURL,
  likes,
  tags,
  views,
  downloads,
}) => {
  const svgProps = {
    width: 16,
    height: 16,
    color: '#000',
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => Linking.openURL(pageURL)}>
        <Image source={{uri: pageURL}} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>Tags: {tags}</Text>
      <View style={styles.description}>
        <View style={styles.count}>
          <HeartIcon {...svgProps} />
          <Text style={styles.countdata}>{likes}</Text>
        </View>
        <View style={styles.count}>
          <EyeIcon {...svgProps} />
          <Text style={styles.countdata}>{views}</Text>
        </View>
        <View style={styles.count}>
          <DownloadIcon {...svgProps} />
          <Text style={styles.countdata}>{downloads}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardContainer;
