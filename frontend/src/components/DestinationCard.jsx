import React from 'react';
import { Link } from 'react-router-dom';
import { getDestinationPhotoCredit } from '../data/photos';

function DestinationCard({ destination, isFavorite, onToggleFavorite }) {
  const photo = getDestinationPhotoCredit(destination.name, destination.type, destination.image);

  return (
    <div className="card-shell">
      <button
        type="button"
        className={`favorite-button ${isFavorite ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(destination._id);
        }}
        aria-label={isFavorite ? `Remove ${destination.name} from favorites` : `Add ${destination.name} to favorites`}
      >
        {isFavorite ? '♥ Saved' : '♡ Save'}
      </button>

      <Link to={`/destinations/${destination._id}`} className="card">
        <img
          src={photo.url}
          alt={photo.alt}
          className="card-image"
          loading="lazy"
        />
        <div className="card-body">
          <h3>{destination.name}</h3>
          <p>{destination.description?.substring(0, 120)}...</p>
          <div className="card-meta">
            <span className={`badge badge-${destination.difficulty}`}>{destination.difficulty}</span>
            <span>{destination.rating} / 5</span>
          </div>
          <div className="card-meta">
            <span>{destination.municipality}</span>
            <span>{destination.altitude_m}m</span>
          </div>
        </div>
      </Link>
      <a className="photo-credit" href={photo.source} target="_blank" rel="noreferrer">
        Photo: {photo.description} · {photo.license}
      </a>
    </div>
  );
}

export default DestinationCard;
