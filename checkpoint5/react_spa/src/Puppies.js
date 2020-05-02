import React, { Component, Suspense, lazy } from "react";
import YTSearch from 'youtube-api-search';

import {
  Link
} from "react-router-dom";

const SearchBar = lazy(() =>
import('./components/search_bar'));

const VideoDetail = lazy(() =>
import('./components/video_detail'));

const VideoList = lazy(() =>
import('./components.video_list'));

const API_KEY = 'AIzaSyDRe1bfRyW6FvsLkmwd7QsQHaOIJEvQ6tc';


class Puppies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Doodle Puppies');
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
            <div className= "Puppies">
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                        <VideoDetail video={this.state.selectedVideo}/>
                        <VideoList
                            onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                            videos={this.state.videos} />
                    </Suspense>
                </div>
                <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
                <script src="https://apis.google.com/js/api.js"></script>
                </div>
        );
    }
}

export default Puppies;