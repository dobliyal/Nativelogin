import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import Navigation from './src/Navigation/Navigation';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
