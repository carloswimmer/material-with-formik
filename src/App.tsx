import React from 'react';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <h1>Material with Formik</h1>
    </AppProvider>
  );
};

export default App;
