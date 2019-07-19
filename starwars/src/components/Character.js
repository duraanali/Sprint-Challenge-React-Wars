import React from 'react';

// props added to component as a class property
// accessible via the "this" keyword - this.props

export default function Character(props) {

  return (
    <div className="charCard">
      <div className="charInfo">
        <h3>{props.chars.name}</h3>
        <p>
          <strong>Height:</strong> {props.chars.height}
        </p>
        <p>
          <strong>Gender:</strong> {props.chars.gender}
        </p>
        <p>
          <strong>Hair Color:</strong>{' '}
          {props.chars.hair_color}
        </p>
      </div>
    </div>
  )
}