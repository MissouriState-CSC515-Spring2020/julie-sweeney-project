import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

class About extends Component{
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
                <img
                    className="familyphoto"
                    src={require("./img/familyphoto.jpg")}
                    alt="Family Photo"
                    />
                <p id="famStory">Darling Davis Doodles is a family run breeding program that strives to produce healthy, smart, beautiful Poodles and Doodles that have a great 
                    temperament and are ready to be loved and spoiled. We consist of three generations of dog lovers working to raise quality pups. Our pups and parent dogs are never raised in a kennel and are always raised with love and attention from adults, kids and other dogs. Check out our ABOUT page to find out more about who we are, how the dogs are cared for, where they are raised, and what health testing they undergo!
                    Abra is our growing AKC Old English Sheepdog. She is very sweet, energetic and smart. It will be a while before she has pups but we are confident 
                    hers are going to be amazing! Chloe is our newest addition and is an ACA Miniature Poodle. She will be the future mother to our F1B Cavapoos! She 
                    is still a puppy but is VERY cuddly but also loves to play with the other dogs as well as people.</p>
            </div>
        );
    }
}

export default About;