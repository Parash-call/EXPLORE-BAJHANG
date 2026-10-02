import React from 'react';
import { getRoutePhoto } from '../data/photos';

function RouteCard({ route, index = 0 }) {
  const imgSrc = getRoutePhoto(index);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={route.route_name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-body">
        <h3>{route.route_name}</h3>
        <p>{route.description}</p>
        <div className="card-meta">
          <span className={`badge badge-${route.difficulty}`}>{route.difficulty}</span>
          <span>{route.rating} / 5</span>
        </div>
        <div className="card-meta">
          <span>{route.start_point} to {route.end_point}</span>
        </div>
        <div className="card-meta">
          <span>{route.distance_km} km</span>
          <span>{route.duration_days} days</span>
        </div>
        <div className="card-meta">
          <span>+{route.elevation_gain}m elevation</span>
          <span>{route.best_season}</span>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;
