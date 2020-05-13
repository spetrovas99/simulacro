import React from 'react';

const header = (props) => {
        
        return (
           <div className="Header">
               <h1>DICCIONARIO</h1>
               <input className = "Bar" placeholder= "Write a world" type="Text" id="searchbar"></input>
                <button className = "Boton" onClick={props.searchBarHandler.bind(this)}>Search</button>
           </div> 
       );
        
};
export default header;