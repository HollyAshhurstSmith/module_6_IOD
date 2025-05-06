import React from 'react';

function SingleCat({ name, latinName, image, onDelete }) {
  return (
    <li style={{ marginBottom: '20px', listStyle: 'none' }}>
      <h2>{name}</h2>
      <em>{latinName}</em>
      <br />
      <img src={image} alt={name} style={{ width: '200px', height: 'auto' }} />
      <br />
      <button onClick={onDelete} style={{ marginTop: '0.5rem' }}>Delete</button>
    </li>
  );
}

export default SingleCat;
