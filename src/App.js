import React from 'react';
import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SelectColors from './components/SelectColors';

const App =() => {
  return (
    <ColorProvider>
        <div>
            <SelectColors/>
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
