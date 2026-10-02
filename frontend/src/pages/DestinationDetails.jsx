import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Map from '../components/Map';
import { getDestinationById } from '../services/api';
import { getDestinationPhotoCredit } from '../data/photos';

function DestinationDetails() {
  const { id } = useParams();
  const [dest, setDest] = useState(null);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bajhang-favorites') || '[]');
    setFavorite(saved.includes(id));

    getDestinationById(id)
      .then(res => setDest(res.data))
      .catch(() => setError('Failed to load destination. Please try again.'));
  }, [id]);

  const toggleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem('bajhang-favorites') || '[]');
    const next = favorite ? saved.filter(item => item !== id) : [...saved, id];
    localStorage.setItem('bajhang-favorites', JSON.stringify(next));
    setFavorite(!favorite);
  };

  if (error) return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <p style={{ color: '#c0392b', fontSize: '1.1rem' }}>{error}</p>
      <Link to="/destinations" className="btn-primary" style={{ color: 'white', textDecoration: 'none', marginTop: '15px', display: 'inline-block' }}>
        Back to Destinations
      </Link>
    </div>
  );

  if (!dest) return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <div className="loading-spinner"></div>
      <p style={{ color: '#888', marginTop: '15px' }}>Loading destination...</p>
    </div>
  );

  const photo = getDestinationPhotoCredit(dest.name, dest.type, dest.image);
  const imgSrc = photo.url;

  return (
    <div>
      <div className="detail-hero" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '40px',
      }}>
        <div className="container" style={{ position: 'relative', width: '100%' }}>
          <button
            type="button"
            className={`favorite-button detail-favorite ${favorite ? 'active' : ''}`}
            onClick={toggleFavorite}
            style={{ position: 'absolute', right: '20px', top: '20px' }}
          >
            {favorite ? '♥ Saved' : '♡ Save'}
          </button>
          <Link to="/destinations" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>
            Back to Destinations
          </Link>
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginTop: '10px' }}>{dest.name}</h1>
          <a className="photo-credit hero-photo-credit" href={photo.source} target="_blank" rel="noreferrer">
            Photo: {photo.description} · {photo.license}
          </a>
        </div>
      </div>

      <div className="detail-page">
        <div className="detail-info">
          <div className="detail-grid">
            <div className="detail-field">
              <strong>Type</strong>
              <span>{dest.type?.replace(/_/g, ' ')}</span>
            </div>
            <div className="detail-field">
              <strong>Location</strong>
              <span>{dest.municipality}, {dest.district}</span>
            </div>
            <div className="detail-field">
              <strong>Altitude</strong>
              <span>{dest.altitude_m}m</span>
            </div>
            <div className="detail-field">
              <strong>Area</strong>
              <span>{dest.area_sq_km} sq km</span>
            </div>
            <div className="detail-field">
              <strong>Difficulty</strong>
              <span className={`badge badge-${dest.difficulty}`}>{dest.difficulty}</span>
            </div>
            <div className="detail-field">
              <strong>Best Season</strong>
              <span>{dest.best_season}</span>
            </div>
            <div className="detail-field">
              <strong>Rating</strong>
              <span>{dest.rating} / 5</span>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h2 style={{ color: '#1a5276', marginBottom: '15px' }}>About this destination</h2>
            <p style={{ lineHeight: '1.9', fontSize: '1.05rem' }}>{dest.description}</p>
          </div>

          <Map latitude={dest.latitude} longitude={dest.longitude} name={dest.name} />

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/destinations" className="btn-primary" style={{ color: 'white', textDecoration: 'none' }}>
              View More Destinations
            </Link>
            <Link to="/routes" className="btn-primary" style={{ color: 'white', textDecoration: 'none', background: '#27ae60' }}>
              Explore Routes
            </Link>
            <Link to="/hotels" className="btn-primary" style={{ color: 'white', textDecoration: 'none', background: '#d35400' }}>
              Find Accommodation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
