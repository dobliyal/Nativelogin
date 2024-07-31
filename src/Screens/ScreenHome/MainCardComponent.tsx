import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardContainer from './CardContainer';
import { fetchImagesRequest } from '../../Redux/slices/imageSlice';
import { RootState } from '../../Redux/store';
import { PixabayImage } from '../../Redux/types';

const MainCardComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.image.images);
  const loading = useSelector((state: RootState) => state.image.loading);

  useEffect(() => {
    dispatch(fetchImagesRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderItem = ({ item }: { item: PixabayImage }) => (
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
        keyExtractor={(item) => item.id.toString()}
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