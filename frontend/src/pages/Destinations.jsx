import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';
import SearchBar from '../components/SearchBar';
import Map from '../components/Map';
import { getDestinations } from '../services/api';
import bajhangPlaces from '../data/places';

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedMapLocation, setSelectedMapLocation] = useState(null);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('bajhang-favorites') || '[]');
    setFavorites(savedFavorites);

    getDestinations()
      .then(res => {
        const items = res.data.length > 0 ? res.data : bajhangPlaces;
        setDestinations(items);
        if (items.length > 0) setSelectedMapLocation(items[0]);
      })
      .catch(() => {
        setDestinations(bajhangPlaces);
        setSelectedMapLocation(bajhangPlaces[0]);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleFavorite = (destinationId) => {
    const nextFavorites = favorites.includes(destinationId)
      ? favorites.filter(id => id !== destinationId)
      : [...favorites, destinationId];

    setFavorites(nextFavorites);
    localStorage.setItem('bajhang-favorites', JSON.stringify(nextFavorites));
  };

  const types = ['all', ...new Set(destinations.map(d => d.type))];

  const filtered = destinations
    .filter(d => {
      const matchSearch = d.name?.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || d.type === filter;
      const matchFavorite = !showFavoritesOnly || favorites.includes(d._id);
      return matchSearch && matchFilter && matchFavorite;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'altitude':
          return (b.altitude_m || 0) - (a.altitude_m || 0);
        default:
          return 0;
      }
    });

  useEffect(() => {
    if (!filtered.length) return;
    if (!selectedMapLocation || !filtered.some(item => item._id === selectedMapLocation._id)) {
      setSelectedMapLocation(filtered[0]);
    }
  }, [filtered, selectedMapLocation]);

  return (
    <div className="container section">
      <h1 className="section-title">Destinations</h1>
      <p className="section-subtitle">Explore the beautiful places of Bajhang District</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search destinations..." />

      <div className="toolbar-row">
        <div className="toolbar-group">
          <label htmlFor="sortDestinations">Sort by</label>
          <select id="sortDestinations" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="rating">Top rated</option>
            <option value="name">Name</option>
            <option value="altitude">Altitude</option>
          </select>
        </div>

        <div className="toolbar-group view-toggle-group">
          <button type="button" className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
            Grid view
          </button>
          <button type="button" className={`toggle-btn ${viewMode === 'map' ? 'active' : ''}`} onClick={() => setViewMode('map')}>
            Map view
          </button>
        </div>

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={(e) => setShowFavoritesOnly(e.target.checked)}
          />
          Favorites only
        </label>
      </div>

      <div className="filter-buttons">
        {types.map(t => (
          <button key={t} className={`filter-btn ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>
            {t === 'all' ? 'All' : t.replace('_', ' ')}
          </button>
        ))}
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="loading-spinner"></div>
          <p style={{ color: '#888', marginTop: '15px' }}>Loading destinations...</p>
        </div>
      ) : (
        <>
          {viewMode === 'map' ? (
            <div className="map-view-shell">
              <div className="map-view-panel">
                <Map
                  latitude={selectedMapLocation?.latitude}
                  longitude={selectedMapLocation?.longitude}
                  name={selectedMapLocation?.name}
                  locations={filtered.slice(0, 8).map(item => ({ latitude: item.latitude, longitude: item.longitude, name: item.name }))}
                />
              </div>

              <div className="map-list-panel">
                {filtered.slice(0, 8).map(d => (
                  <button
                    key={d._id}
                    type="button"
                    className={`map-list-item ${selectedMapLocation?._id === d._id ? 'active' : ''}`}
                    onClick={() => setSelectedMapLocation(d)}
                  >
                    <span>{d.name}</span>
                    <small>{d.type?.replace(/_/g, ' ')}</small>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="card-grid">
              {filtered.map(d => (
                <DestinationCard
                  key={d._id}
                  destination={d}
                  isFavorite={favorites.includes(d._id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No destinations found.</p>}
        </>
      )}
    </div>
  );
}

export default Destinations;
