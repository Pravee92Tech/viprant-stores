import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Products from './components/AllProducts';
function App() {
  return (
    <div className="App">
      <Products />
      <Footer/>
    </div>
  );
}
export default App;