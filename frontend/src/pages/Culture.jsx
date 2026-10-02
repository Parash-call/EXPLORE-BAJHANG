import React, { useState, useEffect } from 'react';
import FestivalCard from '../components/FestivalCard';
import SearchBar from '../components/SearchBar';
import { getCulture } from '../services/api';

function Culture() {
  const [festivals, setFestivals] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCulture()
      .then(res => setFestivals(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = festivals.filter(f =>
    f.festival_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container section">
      <h1 className="section-title">Culture & Festivals</h1>
      <p className="section-subtitle">Experience the vibrant cultural heritage of Bajhang</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search festivals..." />
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="loading-spinner"></div>
          <p style={{ color: '#888', marginTop: '15px' }}>Loading festivals...</p>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {filtered.map((f, i) => <FestivalCard key={f._id} festival={f} index={i} />)}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No festivals found.</p>}
        </>
      )}
    </div>
  );
}

export default Culture;
