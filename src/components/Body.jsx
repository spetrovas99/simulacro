import React from 'react';
import Nombre from "./Nombre";
const body = (props) => {
        
        return (
           <div className="Body">
                <div className="Definiciones">
                <div className = "aux">
                    {props.palabra? "definiciones de "+ props.palabra : "" }
                </div>
                {props.definitions.map(elem => {
                    return(
                        <div> {elem.definicion}</div>
                    )
                })}    
                </div> 
                <div className = "Juntos">
                    <div className = "Sinonimos">
                        <div className = "aux">
                            {props.palabra? "sinonimos de "+ props.palabra : "" }
                        </div>
                    
                        {props.sinonimos.map(elem => {
                            return(
                                <Nombre selectHandler = {props.selectHandler} e = {elem.sinonimo}></Nombre>
                            )
                        })}
                    </div>
                    <div className = "Antonimos">
                        <div className = "aux">
                            {props.palabra? "antonimos de "+ props.palabra : "" }
                        </div>
                        {props.antonimos.map(elem => {
                            return(
                                <Nombre selectHandler = {props.selectHandler} e = {elem.antonimo}></Nombre>
                            )
                        })}
                    </div>
                </div>
               
           </div> 
       );
        
};

export default body;