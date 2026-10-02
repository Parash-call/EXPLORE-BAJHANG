import React from 'react';

const facilityImages = {
  hospital: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
  health_post: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
  security: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
  transport: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop',
  banking: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
  default: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
};

function FacilityCard({ facility }) {
  const imgSrc = facilityImages[facility.type] || facilityImages.default;

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={facility.name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-body">
        <h3>{facility.name}</h3>
        <p>{facility.description}</p>
        <div className="card-meta">
          <span className="badge badge-easy">{facility.type}</span>
          <span>{facility.rating} / 5</span>
        </div>
        <div className="card-meta">
          <span>{facility.municipality}</span>
          <span>{facility.operating_hours}</span>
        </div>
        <div className="card-meta">
          <span>{facility.phone}</span>
          <span>{facility.available_days}</span>
        </div>
      </div>
    </div>
  );
}

export default FacilityCard;
