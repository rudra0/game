import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i5 from './asset/i5.jpg' 



const About = () => {

    return (
        <div className="about">
            <div className="col-13">
            <img
                className="d-block w-100"

                src={i5}
                alt="First slide"
                />
                
              
            </div>
        </div>

    );

}

export { About };
