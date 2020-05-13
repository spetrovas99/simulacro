import React,{useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import axios from "axios";

function App() {
  const [palabra,setPalabra] = useState(null);
  const [definitions,setDefinitions] = useState([]);
  const [sinonimos,setSinonimos] = useState([]);
  const[antonimos,setAntonimos] = useState([]);

  const definitionURL = "http://cors-anywhere.herokuapp.com/sesat.fdi.ucm.es:8080/servicios/rest/definicion/json/";
  const sinonimoURL ="http://cors-anywhere.herokuapp.com/sesat.fdi.ucm.es:8080/servicios/rest/sinonimos/json/";
  const antonimoURL ="http://cors-anywhere.herokuapp.com/sesat.fdi.ucm.es:8080/servicios/rest/antonimos/json/";


  const searchBarHandler = ()=>{
    setPalabra(document.getElementById("searchbar").value); 
    if(palabra){
      axios.get(definitionURL +  palabra).then(response =>{
        setDefinitions(response.data.definiciones);
      });
      axios.get(sinonimoURL +  palabra).then(response2 =>{
        setSinonimos(response2.data.sinonimos)
     });
     axios.get(antonimoURL +  palabra).then(response3 =>{
       setAntonimos(response3.data.antonimos)
     });
    }
      
  }

  const selectHandler =(e)=>{
    setPalabra(e);
    axios.get(definitionURL + palabra).then(response=>{
      setDefinitions(response.data.definiciones);
    }) 
    axios.get(sinonimoURL + palabra).then(response2 =>{
      setSinonimos(response2.data.sinonimos)
   });
   axios.get(antonimoURL +  palabra).then(response3 =>{
     setAntonimos(response3.data.antonimos)
   });
  }


  return (
    <div className="App">
     <Header searchBarHandler ={searchBarHandler}></Header>
     <Body selectHandler = {selectHandler} definitions = {definitions} sinonimos = {sinonimos} antonimos = {antonimos} palabra ={palabra} ></Body>
    </div>
  );
}

export default App;
