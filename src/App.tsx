import React from 'react';
import AppProvider from './hooks';

import Employees from './pages/Employees/Employees';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Employees />
    </AppProvider>
  );
};

export default App;
