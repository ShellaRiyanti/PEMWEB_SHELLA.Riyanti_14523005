// Import Libraries
import React, {Component} from "react";
import Header from "./Header.jsx";
import "./App.css";
import Footer from "./Footer.jsx";
import  List from "./List.jsx";
import Top from "./Top.js";

// Membuat komponen dengan class

// Create Component
class App extends Component {
  render(){
  return (
    <div className="App">
      <Header list="10 daftar makanan" />
      <Top />
      <p>hslloe</p>
      <List />
      <Footer />
    </div>
  );
}
};
// Export Default
export default App;

