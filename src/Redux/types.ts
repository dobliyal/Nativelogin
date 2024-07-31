export interface PixabayImage {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  }
  
  export interface PixabayApiResponse {
    total: number;
    totalHits: number;
    hits: PixabayImage[];
  }
  
  export interface User {
    username: string;
    email: string;
    password: string;
  }
  
  export interface UserState {
    isLoggedIn: boolean;
    data: User | null;
  }