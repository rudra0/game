import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'

import { Navigation, About,Home , GameDikha }  from './components';

class App extends Component {


  render() {
    return (
      <div >
      
        <Navigation />
        <div>
        <GameDikha/>
        <Home/>
        <About/>
        <Contact/></div>
        
      </div>
    );
  }
}

export default App;
