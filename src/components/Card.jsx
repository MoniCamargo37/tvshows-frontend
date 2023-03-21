import React from 'react';

export default function Card({ show }) {
  if (!show) {
    return null; 
  }

  const { image, title, description, launched, creator, genre } = show;
  return (
    <div className="cardShow">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p> {creator}</p>
        <p> {launched}</p>
        <p>{genre}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

