import React, { useState, useEffect } from 'react';
import GuideCard from '../components/GuideCard';
import SearchBar from '../components/SearchBar';
import { getGuides } from '../services/api';

function Guides() {
  const [guides, setGuides] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGuides()
      .then(res => setGuides(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = guides.filter(g =>
    g.name?.toLowerCase().includes(search.toLowerCase()) ||
    g.expertise?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container section">
      <h1 className="section-title">Local Guides</h1>
      <p className="section-subtitle">Connect with experienced local guides in Bajhang</p>
      <SearchBar value={search} onChange={setSearch} placeholder="Search guides by name or expertise..." />
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="loading-spinner"></div>
          <p style={{ color: '#888', marginTop: '15px' }}>Loading guides...</p>
        </div>
      ) : (
        <>
          <div className="card-grid">
            {filtered.map((g, i) => <GuideCard key={g._id} guide={g} index={i} />)}
          </div>
          {filtered.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No guides found.</p>}
        </>
      )}
    </div>
  );
}

export default Guides;
