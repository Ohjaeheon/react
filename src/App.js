import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
      <div>
      <h2>I like {name}</h2>
      <img src = {picture} alt = {name} />
      </div>
);
}

const foodLike = [{
  key : 1,
  name : 'kimchi',
  img : 'https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp',
  rating : 4.5,
},
  {
    key : 2,
    name : 'Samgyeopsal',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynZzSRmxUq8UPuzxIRcXxaoerTLs-s4jErA&s',
    rating : 3.5,
  },
  {
    key : 3,
    name : 'Bibimbap',
    img: 'data:image/webp;base64,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',
    rating: 4.5,
  },
  {
    key : 4,
    name : 'Doncasu',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAyYNqCQ9Xk58BotHeuDNmXphAiDYB57ZEw&s',
    rating : 4.5,
  },
  {
    key : 5,
    name : 'Kimbap',
    rating : 4.5,
  }
];

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
}


function App() {
  return (
  <div>
    {foodLike.map(dish => (
        <Food key = {dish.id} name={dish.name} picture={dish.img} rating={dish.rating}/>
    ))}
  </div>);
}

export default App;
