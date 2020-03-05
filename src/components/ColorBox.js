import React, {useContext} from 'react';
import ColorContext from '../contexts/color';
import {ColorConsumer} from '../contexts/color';

/*
const ColorBox = () => {

   return(
       <ColorContext.Consumer>
           { value => (
               <div style={ {width: '64px', height: "64px", background: value.color }}>

               </div>
           )}
       </ColorContext.Consumer>
   )
}
*/
/*
const ColorBox = () => {

    return(
       <ColorConsumer>
           { value => (
               <>
                   <div style={ {width: '64px', height: "64px", background: value.state.color }}>

                   </div>
                   <div style={ {width: '32px', height: "32px", background: value.state.subcolor }}>

                   </div>
               </>
           )}
       </ColorConsumer>
    )
}
*/
const ColorBox = () => {
    const {state} = useContext(ColorContext);

    return(
        <div>
            <div style={ {width: '64px', height: "64px", background: state.color }}>

            </div>
            <div style={ {width: '32px', height: "32px", background: state.subcolor }}>

            </div>
        </div>
    )
}
export default ColorBox;