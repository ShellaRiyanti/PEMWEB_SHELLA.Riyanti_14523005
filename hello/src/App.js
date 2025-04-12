// Import Libraries
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
// Membuat komponen dengan class

// Create Component
const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello React</h1>
      <p>Self Reward</p>
      <List />
      <Footer />
    </div>
  );
};
// Export Default
export default App;

