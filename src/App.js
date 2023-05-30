import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import StudentForm from "./Components/StudentForm";

import Gallery from "./Components/gallery/Gallery";

function App() {
  const [name, setName] = useState("Ghimiray");
  const [finalname, setfinalName] = useState("Ghimiray");
  
  const updateName = () => {
    setName(`Bishnu ${new Date()}`);
  }

const updateFinalName=()=>{
  setfinalName(name);
}

useEffect(() => {
  alert("new site opened!!")
},[name])

  const handleInputChange =(e) => {

  }
  return (
    <>
      <div>
         <Header title={name} btnclick={(n, s) => { alert(n); alert(s); }}/>
        <input onChange={(e)=>{console.log(e)
        setName (e.target.value)
        }}/>




        <button onClick={() => {updateName(); }}> {" "} Update Name </button>


        <button onClick={() => {updateName(); }}> {" "} Update FinalName </button>
        <StudentForm/> 
        
      </div>
    </>
  );
}

export default App;
