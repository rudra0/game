import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'

import {Button} from  'react-bootstrap'
import {Link} from 'react-scroll'

import i1 from './asset/i1.jpg';
import i2 from './asset/i2.jpg';
import i3 from './asset/i3.jpg';

const Home = () => {

    return (
        <div className="home" >
            <div className="col-lg-13 mr-auto text-center mb-5 mb-lg-0">
            
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
               
                src={i1}
                alt="First slide"
                />
                 <Carousel.Caption>
                <Link to="about"><Button className="btn-danger">Explore</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={i3}
                alt="Third slide"
                /> <Carousel.Caption>
                <Link to="about"><Button className="btn-danger">Explore</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={i2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Link to="contact"><Button className="btn-danger">Explore</Button></Link>
                </Carousel.Caption>
              
            </Carousel.Item>
           
            </Carousel>
            </div>        
            

            </div>
        

    );

}

export { Home };
