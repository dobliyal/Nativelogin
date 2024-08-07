import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import CardContainer from './CardContainer';
import { CardData } from '../utils/types';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ListRenderItemInfo } from 'react-native';

const MainCardComponent: React.FC = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pixabay.com/api/?key=45184623-9eeaf5f50113a44caea62ef9a&q=yellow+flowers&image_type=photo&per_page=10')
      .then(response => {
        const fetchedData = response.data.hits.map((item: any) => ({
          pageURL: item.webformatURL, 
          likes: item.likes,
          tags: item.tags,
          views: item.views,
          downloads: item.downloads,
        }));
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  const renderItem = ({ item }:  ListRenderItemInfo<CardData> ) => (
    <CardContainer
      pageURL={item.pageURL}
      likes={item.likes}
      tags={item.tags}
      views={item.views}
      downloads={item.downloads}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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











































































// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import CardContainer from './CardContainer';
// import { fetchImagesRequest } from '../Redux/imageSlice';
// import { RootState } from '../../../Redux/store';
// import { PixabayImage } from '../../../Redux/types';
// import { ListRenderItemInfo } from 'react-native';
// import { CardData } from '../utils/types';
// const MainCardComponent: React.FC = () => {
//   const dispatch = useDispatch();
//   const { images, loading, error } = useSelector((state: RootState) => state.image);

//   useEffect(() => {
//     console.log('Dispatching fetchImagesRequest');
//     dispatch(fetchImagesRequest());
//   }, [dispatch]);

//   useEffect(() => {
//     console.log('images state changed', images);
//   }, [images]);

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   if (!images || images.length === 0) {
//     return <View><Text>No data available</Text></View>;
//   }

//   const renderItem = ({ item }: ListRenderItemInfo<CardData> ) => (
//     <CardContainer
//       pageURL={item.pageURL}
//       likes={item.likes}
//       tags={item.tags}
//       views={item.views}
//       downloads={item.downloads}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   error: {
//     color: 'red',
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default MainCardComponent;




















































