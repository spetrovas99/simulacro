import React from 'react';

const nombre = (props) => {
        
        return (
            <div className="Nombre" onClick={props.selectHandler.bind(this,props.e)}>
           {props.e}
           </div> 
       );
        
};

export default nombre;