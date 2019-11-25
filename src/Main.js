import React, { Component } from "react";
import {
  Link
} from "react-router-dom";


class Main extends Component {
  render() {
    return (
      // <HashRouter>
      <div>
        <div>
          <h1 className="blog-heading">My blog posts</h1>
        </div>
        <div className="blog-posts">
          <div className="post">
            <Link to="/travel">
              <img className="blog-post-image" src={require('./images/travel-love.jpg')}></img>
            </Link>
            <Link to="/travel" className="title-link">
              <h1 className="post-title">Why I Love traveling?</h1>
            </Link>
            <p>
            Every traveller has her/his own reasons of doing so. The love for travel is the reason why. Here are my reasons..
            <Link to="/travel">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/places">
              <img className="blog-post-image" src={require('./images/places.jpg')}></img>
            </Link>
            <Link to="/places" className="title-link">
              <h1 className="post-title">Places I want to vist</h1>
            </Link>
            <p>
            The world is full of beautiful places that most of us don’t even know about. From breath-taking waterfalls and ..
            <Link to="/places">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/cuisines">
              <img className="blog-post-image" src={require('./images/food.jpg')}></img>
            </Link>
            <Link to="/cuisines" className="title-link">
              <h1 className="post-title">Cuisines I love</h1>
            </Link>
            <p>
            Food ultimately shapes everything in our world in the past and modern day. Without food there would obviously be ..
            <Link to="/cuisines">
                Read More
            </Link>
            </p>
          </div>
          <div className="clear-fix">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
