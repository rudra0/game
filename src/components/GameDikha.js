import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import game_dikha from './asset/game_dikha.mp4'
import game from './asset/game.png'


const GameDikha = () => {
    var styles={
        

    }
  
    return (
        <div className="gamedikha">
        <header >   
        <div className="overlay" ></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" >
          <source src={game_dikha} type="video/mp4"/>
       </video>
       <div className="container">
        <img src = {game}/>
        </div>
       
       </header>
       
       </div>
      
       
    );

}

export {GameDikha };
