import React from 'react';
import { getFestivalPhoto } from '../data/photos';

function FestivalCard({ festival, index = 0 }) {
  const imgSrc = getFestivalPhoto(index);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={festival.festival_name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-body">
        <h3>{festival.festival_name}</h3>
        <p>{festival.description}</p>
        <div className="card-meta">
          <span className="badge badge-moderate">{festival.type}</span>
          <span>{festival.season}</span>
        </div>
        <div className="card-meta">
          <span>{festival.location}</span>
          <span>{festival.duration_days} days</span>
        </div>
        <div className="card-meta">
          <span>{festival.month}</span>
          <span>{festival.attendance?.toLocaleString()} attendees</span>
        </div>
      </div>
    </div>
  );
}

export default FestivalCard;
