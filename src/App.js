
import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx"
import Main from "./Components/Main.jsx"
import './styles.css';
function App() {
  return (<>
    <Header/>
    <hr></hr>
    <div className="lg:mx-10 lg:px-3 font-sans sm:text-xs">
      <Main/>
      <Footer/>
    </div></>
  );
}

export default App;
