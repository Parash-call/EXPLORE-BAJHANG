import React, { useState, useEffect } from 'react';
import HotelCard from '../components/HotelCard';
import SearchBar from '../components/SearchBar';
import { getHotels } from '../services/api';

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotels()
      .then(res => setHotels(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const types = ['all', ...new Set(hotels.map(h => h.type))];

  const filtered = hotels.filter(h => {
    const matchSearch = h.name?.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || h.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="container section">
      <h1 className="section-title">Hotels & Homestays</h1>
      <p className="section-subtitle">Find the best accommodation in Bajhang</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search hotels..." />
      <div className="filter-buttons">
        {types.map(t => (
          <button key={t} className={`filter-btn ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>
            {t.replace('_', ' ')}
          </button>
        ))}
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="loading-spinner"></div>
          <p style={{ color: '#888', marginTop: '15px' }}>Loading hotels...</p>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {filtered.map(h => <HotelCard key={h._id} hotel={h} />)}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No hotels found.</p>}
        </>
      )}
    </div>
  );
}

export default Hotels;
