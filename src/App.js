import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';

const App =() => {
  return (
    <ColorProvider>
        <div>
            <ColorBox/>
        </div>
    </ColorProvider>
  );
}
/*
     <ColorContext.Provider value={{color: 'red'}}>
    <div>
      <ColorBox/>
    </div>
     </ColorContext.Provider>
     */
export default App;
