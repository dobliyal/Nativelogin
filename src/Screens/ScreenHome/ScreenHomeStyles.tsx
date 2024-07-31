import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    count: {
      flexDirection: 'row',
    },
    countdata: {
      marginLeft: 4,
    },
    card: {
      borderRadius: 30,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 2},
      elevation: 1,
      margin: 10,
      borderColor: 'black',
      padding: 2,
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
      paddingBottom:5,
    },
    title: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5,
      paddingLeft: 25,
    },
  });