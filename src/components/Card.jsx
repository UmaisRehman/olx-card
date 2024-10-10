import React from 'react';
import './Card.css'; // Import the custom CSS file

function Card(props) {
  return (
    <div className="card" style={{ width: '18rem', margin: '20px' }}>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text font-weight-bold">${props.price}</p>
        <div className="d-flex flex-column">
          <button className="btn btn-warning">Add to Cart</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
