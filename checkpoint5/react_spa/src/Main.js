import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import {
  Link
} from "react-router-dom";

const API_KEY = 'AIzaSyDRe1bfRyW6FvsLkmwd7QsQHaOIJEvQ6tc';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Doodle Dogs and Kids');
    }

    videoSearch(searchTerm) {
        YTSearch({maxResults: 5, key: API_KEY, term: searchTerm}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }


    render() {

        return (  
                <div className= "home">
                    <header>
                        <h1 className="logo">Darling Davis Doodles</h1>
                        <nav>
                            <ul className="nav_links">
                                <li><Link to="/Parents">Parents</Link></li>
                                <li><Link to="/Puppies">Puppies</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li class="home"><Link to="/">Home</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <div>
                        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList
                            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                            videos={this.state.videos} />
                    </div>
                    {/*<Carousel id="myCarousel"> 
                        
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
                    </Carousel>*/}

                    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
                    <script src="https://apis.google.com/js/api.js"></script>
                </div>
        );
    }
}

export default Main;