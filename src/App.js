import React from "react";
import Header from "./Components/Header";

function App() {
  return  <div><Header title="this is heading"  btnclick ={(n,s)=>{alert(n);alert(s)}}/></div>
}

export default App;
