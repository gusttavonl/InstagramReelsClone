import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Info from './components/Info/Info';


function App() {
  return (
    // onde ficam os chats
    <div className="App">
       {/* Container Scroll dos videos */}
        <div className="videos">
          <Header />
          <Info />
          <Footer /> 
        </div>
    </div>
  );
}
 
export default App;
