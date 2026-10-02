import React, { useState, useEffect } from 'react';
import FacilityCard from '../components/FacilityCard';
import SearchBar from '../components/SearchBar';
import { getFacilities } from '../services/api';

function Facilities() {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFacilities()
      .then(res => setFacilities(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const types = ['all', ...new Set(facilities.map(f => f.type))];

  const filtered = facilities.filter(f => {
    const matchSearch = f.name?.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || f.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="container section">
      <h1 className="section-title">Facilities</h1>
      <p className="section-subtitle">Essential services and amenities in Bajhang</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search facilities..." />
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
          <p style={{ color: '#888', marginTop: '15px' }}>Loading facilities...</p>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {filtered.map(f => <FacilityCard key={f._id} facility={f} />)}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No facilities found.</p>}
        </>
      )}
    </div>
  );
}

export default Facilities;
