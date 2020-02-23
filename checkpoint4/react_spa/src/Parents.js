import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {
    Link
} from "react-router-dom";

class Parents extends Component{
    render() {
        return (
                <div>
                    <header>
                        <h1 className="logo">Darling Davis Doodles</h1>
                        <nav>
                            <ul className="nav_links">
                                <li><Link to="/Parents">Parents</Link></li>
                                <li><Link to="/Parents">Puppies</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li class="home"><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Carousel id="myCarousel">
                        
                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Charolette.jpg")}
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Charolette (F1 Pyredoodle)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Finn.JPG")}
                                alt="Second slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Finn (Standard Poodle)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Brody.jpg")}
                                alt="Third slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Brody (Standard Poodle)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Abra.jpg")}
                                alt="Fourth slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Abra (Old English Sheep Dog)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Dixie.jpg")} 
                                alt="Fifth slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Dixie (Standard Poodle)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Henny.jpg")} 
                                alt="Sixth slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Henny (Cavapoo)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Pebbles.jpg")}
                                alt="Seventh slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Pebbles (Cavapoo)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/Cloey.JPG")} 
                                alt="Eigth slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Cloey (Minature Poodle)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    
                    </Carousel>
                            

                          
                   
                    
                    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
                </div>
        );
    }
}

export default Parents;