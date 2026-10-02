import React, { useState, useEffect } from 'react';
import RouteCard from '../components/RouteCard';
import SearchBar from '../components/SearchBar';
import { getRoutes } from '../services/api';

function Routes() {
  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRoutes()
      .then(res => setRoutes(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const difficulties = ['all', ...new Set(routes.map(r => r.difficulty))];

  const filtered = routes.filter(r => {
    const matchSearch = r.route_name?.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || r.difficulty === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="container section">
      <h1 className="section-title">Trekking Routes</h1>
      <p className="section-subtitle">Discover trekking and hiking routes in Bajhang</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search routes..." />
      <div className="filter-buttons">
        {difficulties.map(d => (
          <button key={d} className={`filter-btn ${filter === d ? 'active' : ''}`} onClick={() => setFilter(d)}>
            {d}
          </button>
        ))}
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="loading-spinner"></div>
          <p style={{ color: '#888', marginTop: '15px' }}>Loading routes...</p>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {filtered.map((r, i) => <RouteCard key={r._id} route={r} index={i} />)}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No routes found.</p>}
        </>
      )}
    </div>
  );
}

export default Routes;
