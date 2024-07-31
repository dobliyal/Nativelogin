import axios from 'axios';

export const fetchImagesFromAPI = (query = 'yellow+flowers') => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '45184623-9eeaf5f50113a44caea62ef9a',
      q: query,
      image_type: 'photo',
      per_page: 10,
    },
  });
};
