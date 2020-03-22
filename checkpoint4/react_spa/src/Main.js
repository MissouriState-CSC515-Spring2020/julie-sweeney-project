import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import {
  Link
} from "react-router-dom";


class Main extends Component {
    render() {
        return (  
                <div className= "home">
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
                                src={require("./img/DadBrodyPebs.JPG")}
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Grandpa, Brody, and Pebbles</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/DaxHezBrody.jpg")} 
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Daxton, Hezzy, and Brody</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/ShawnAbra.jpg")}
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Shawn and Abra</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/DaxHezPebs.jpg")}
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Daxton, Hezzy, and Pebbles</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link to="/About">
                                <img
                                className="d-block w-100"
                                src={require("./img/ShawnHezFinDixie.jpg")}
                                alt="First slide"
                                />
                            </Link>
                            <Carousel.Caption className="carousel-caption">
                                <h3>Shawn, Hezzy, Finn, and Dixie</h3>
                            </Carousel.Caption>
                        </Carousel.Item>     
                    </Carousel>

                    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
                </div>
        );
    }
}

export default Main;