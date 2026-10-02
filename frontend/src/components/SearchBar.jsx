import React, { useState, useRef, useEffect } from 'react';
import bajhangPlaces from '../data/places';
import { getDestinationPhotoCredit } from '../data/photos';

function getTypeEmoji(type) {
  const emojis = {
    national_park: '🌿', valley: '🏔️', meadow: '🌾', religious: '🛕',
    base_camp: '⛺', cave: '🕳️', temple: '🛕', lake: '🏞️',
    viewpoint: '👁️', church: '⛪', waterfall: '💧', village: '🏘️',
    bridge: '🌉', trek_start: '🥾', mountain: '⛰️', pass: '🛤️',
    river: '🌊', road: '🛣️', town: '🏙️'
  };
  return emojis[type] || '📍';
}

function SearchBar({ value, onChange, placeholder }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState(bajhangPlaces);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (value === '') {
      setFilteredPlaces(bajhangPlaces);
      setSelectedPlace(null);
    } else {
      const filtered = bajhangPlaces.filter(place =>
        place.name.toLowerCase().includes(value.toLowerCase()) ||
        place.type.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredPlaces(filtered);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setShowDropdown(true);
  };

  const handlePlaceClick = (place) => {
    onChange(place.name);
    setSelectedPlace(place);
    setShowDropdown(false);
  };

  const handleCloseInfo = () => {
    setSelectedPlace(null);
    onChange('');
  };

  return (
    <div className="search-bar-container" ref={dropdownRef}>
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          placeholder={placeholder || 'Search places in Bajhang...'}
        />
      </div>
      {showDropdown && filteredPlaces.length > 0 && (
        <div className="search-dropdown">
          {filteredPlaces.map(place => {
            const photo = getDestinationPhotoCredit(place.name, place.type, place.image);
            return (
              <div
                key={place.id}
                className="search-dropdown-item"
                onClick={() => handlePlaceClick(place)}
              >
                <div className="search-dropdown-left">
                  <img src={photo.url} alt={photo.alt} className="search-dropdown-photo" loading="lazy" />
                  <span className="search-dropdown-emoji">{getTypeEmoji(place.type)}</span>
                  <div className="search-dropdown-info">
                    <span className="search-dropdown-name">{place.name}</span>
                    <span className="search-dropdown-desc">{place.description}</span>
                  </div>
                </div>
                <span className="search-dropdown-type">{place.type.replace('_', ' ')}</span>
              </div>
            );
          })}
        </div>
      )}
      {selectedPlace && (
        <div className="place-info-card">
          {(() => {
            const photo = getDestinationPhotoCredit(selectedPlace.name, selectedPlace.type, selectedPlace.image);
            return (
              <>
                <img src={photo.url} alt={photo.alt} className="place-info-photo" />
                <a className="photo-credit" href={photo.source} target="_blank" rel="noreferrer">
                  Photo: {photo.description} · {photo.license}
                </a>
              </>
            );
          })()}
          <button className="place-info-close" onClick={handleCloseInfo}>✕</button>
          <div className="place-info-header">
            <span className="place-info-emoji">{getTypeEmoji(selectedPlace.type)}</span>
            <div>
              <h3 className="place-info-name">{selectedPlace.name}</h3>
              <span className="place-info-type">{selectedPlace.type.replace('_', ' ')}</span>
            </div>
          </div>
          <p className="place-info-description">{selectedPlace.description}</p>
          <div className="place-info-meta">
            <span>District: Bajhang</span>
            <span>Province: Sudurpashchim, Nepal</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
