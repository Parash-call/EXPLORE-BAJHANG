import React from 'react';
import { getGuidePhoto } from '../data/photos';

function GuideCard({ guide, index = 0 }) {
  const imgSrc = getGuidePhoto(index);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={guide.name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-body">
        <h3>{guide.name}</h3>
        <p>{guide.description}</p>
        <div className="card-meta">
          <span>{guide.experience_years} yrs experience</span>
          <span>{guide.rating} / 5</span>
        </div>
        <div className="card-meta">
          <span>{guide.expertise}</span>
          <span>NPR {guide.price_per_day_np}/day</span>
        </div>
        <div className="card-meta">
          <span>Language: {guide.language}</span>
          <span>{guide.certified === 'Yes' ? 'Certified' : ''}</span>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
