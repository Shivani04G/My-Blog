import React, { Component } from "react";
import "./index.css";

class Cuisines extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>Cuisine I love</h1>
        <p>Food ultimately shapes everything in our world in the past and modern day. Without food there would obviously be no life, but the way culture, society, technology and Cuisines all develop can all be connected to food.
        </p>
        <img src={require('./images/food.jpg')}></img>
        <p className="special-text">Here are few of my favourite cuisine from around the world!</p>
        <h2>Indian Cuisine</h2>  
        <img src={require('./images/indian-cuisine.jpg')}></img>
        <p>Indian Cuisine Think of India and one of the first things that come to mind is its diversity. A large populous country divided into many states; each with its own unique traditions and gastronomic fare. Indian cooking is one of the most popular cuisines across the globe. Not only is it popular among the large Indian diaspora but also among the mainstream population of North America and Europe. For the uninitiated, Indian food may seem foreign, scary, spicy and not for the faint of heart.
        </p>

        <h2>French cuisine</h2>
        <img src={require('./images/french-cuisine.jpg')}></img>
        <p>
        French cuisine dates back to the Middle Ages. During the middle ages French cuisine was similar Moorish cuisine (Manero). French cuisine was similar to Moorish cuisine because upon the arrival of moors in 711 A.D., smoked and spiced meats were introduced to the French as well as the appearance of food was influenced because, Moors often altered the appearance of foods with ingredients such as saffron, egg yolks, and sunflowers (Manero)
        </p>

        <h2>Mexican Cuisine</h2>
        <img src={require('./images/mexican-cuisine.jpg')}></img>
        <p>Mexican Cuisine Mexican cuisine is a style of food that originates in Mexico. It is known for its varied flavors, colorful decoration, and variety of spices and ingredients, many of which are native to the country. What makes a meal distinctly Mexican, of course, are the lively seasonings. Not all Mexican recipes are fiery, though; while renowned for their heat, many subtle and intriguing spice combinations are also found in Mexican fare. 
        </p>

        <h2>Italian cuisine</h2>
        <img src={require('./images/italian-cuisine.jpg')}></img>
        <p> Italian cuisine has influenced many parts of their own culture, and other cultures around the world. Food has always played a major part in three major aspects of Italian culture: history, symbolism, and art. The history of Italian cuisine revolves around the evolution of what Cuisines were compelled to eat throughout the ages. Once, food was thought to be little more than macaroni or noodles in the Italian Peninsula.
        </p>

      </div>
    );
  }
}

export default Cuisines;
