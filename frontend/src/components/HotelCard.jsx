import React from 'react';
import { getHotelPhoto } from '../data/photos';

function HotelCard({ hotel }) {
  const imgSrc = getHotelPhoto(hotel.type);

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt={hotel.name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-body">
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <div className="card-meta">
          <span className="badge badge-easy">{hotel.price_range_np}</span>
          <span>{hotel.rating} / 5</span>
        </div>
        <div className="card-meta">
          <span>{hotel.municipality}</span>
          <span>{hotel.rooms} rooms</span>
        </div>
        <div className="card-meta">
          <span>WiFi: {hotel.has_wifi} | Parking: {hotel.has_parking}</span>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
