import React from 'react';
import { AppProvider } from './Provider';
import TextForm from './TextForm.jsx';
import RenderedText from './RenderedText.jsx';

const App = () => {
  return (
    <AppProvider>
      <div>
        <TextForm />
        <RenderedText />
      </div>
    </AppProvider>
  );
};

export default App;
