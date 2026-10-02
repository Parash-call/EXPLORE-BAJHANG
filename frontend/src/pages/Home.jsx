import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations, getRoutes, getCulture, getGuides } from '../services/api';
import bajhangPlaces from '../data/places';
import { getDestinationPhotoCredit } from '../data/photos';

const tripIdeas = {
  Adventure: ['Khaptad National Park', 'Api Base Camp', 'Durgathali Ridge Walk', 'Melauli Valley Trail'],
  Culture: ['Badimalika Temple', 'Khaptad Baba Ashram', 'Traditional Village', 'Basuling Church'],
  Pilgrimage: ['Triveni Dham', 'Khaptad Baba Ashram', 'Badimalika Temple', 'Gyaneshwor Temple'],
  Scenic: ['Durga Thali', 'Surma Valley', 'Melauli Lake', 'Saipal Viewpoint'],
  Spring: {
    Adventure: ['Khaptad National Park', 'Api Base Camp', 'Surkhet Corridor Trek Start'],
    Culture: ['Badimalika Temple', 'Khaptad Baba Ashram', 'Traditional Village'],
    Pilgrimage: ['Triveni Dham', 'Khaptad Baba Ashram', 'Gyaneshwor Temple'],
    Scenic: ['Durga Thali', 'Surma Valley', 'Melauli Lake'],
  },
  Summer: {
    Adventure: ['Lamabagar Waterfall', 'Masta Cave', 'Api Himal'],
    Culture: ['Traditional Village', 'Badimalika Temple', 'Basuling Church'],
    Pilgrimage: ['Khaptad Baba Ashram', 'Triveni Dham', 'Badimalika Temple'],
    Scenic: ['Surma Valley', 'Khaptad Phatante Lake', 'Satellite Viewpoint'],
  },
  Autumn: {
    Adventure: ['Khaptad National Park', 'Surkhet Corridor Trek Start', 'Api Base Camp'],
    Culture: ['Martadi', 'Durgathali', 'Traditional Village'],
    Pilgrimage: ['Khaptad Baba Ashram', 'Gyaneshwor Temple', 'Triveni Dham'],
    Scenic: ['Durga Thali', 'Badi Lake', 'Saipal Viewpoint'],
  },
  Winter: {
    Adventure: ['Nampa Himal', 'Syanla Pass', 'Api Himal'],
    Culture: ['Badimalika Temple', 'Basuling Church', 'Martadi'],
    Pilgrimage: ['Khaptad Baba Ashram', 'Triveni Dham', 'Gyaneshwor Temple'],
    Scenic: ['Surma Valley', 'Melauli Lake', 'Durga Thali'],
  },
};

function Home() {
  const [stats, setStats] = useState({ destinations: 0, routes: 0, culture: 0, guides: 0 });
  const [featured, setFeatured] = useState([]);
  const [tripSeason, setTripSeason] = useState('Spring');
  const [tripInterest, setTripInterest] = useState('Adventure');
  const [tripDays, setTripDays] = useState(3);
  const [itinerarySaved, setItinerarySaved] = useState(() => Boolean(localStorage.getItem('bajhang-saved-itinerary')));

  useEffect(() => {
    Promise.all([
      getDestinations().catch(() => ({ data: [] })),
      getRoutes().catch(() => ({ data: [] })),
      getCulture().catch(() => ({ data: [] })),
      getGuides().catch(() => ({ data: [] })),
    ]).then(([destRes, routeRes, cultureRes, guideRes]) => {
      setStats({
        destinations: destRes.data.length,
        routes: routeRes.data.length,
        culture: cultureRes.data.length,
        guides: guideRes.data.length,
      });
      const destinationData = destRes.data.length > 0
        ? destRes.data
        : bajhangPlaces.map((place) => ({ ...place, _id: place._id || String(place.id), localCatalog: true }));
      const top = [...destinationData]
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 6);
      setStats((current) => ({ ...current, destinations: destinationData.length }));
      setFeatured(top);
    });
  }, []);

  const tripSuggestions = tripIdeas[tripSeason]?.[tripInterest] || tripIdeas.Spring.Adventure;

  const itineraryDays = Array.from({ length: tripDays }, (_, index) => {
    const stop = tripSuggestions[index % tripSuggestions.length];
    const activityMap = {
      Adventure: ['Morning trek', 'Scenic viewpoint', 'Local food stop'],
      Culture: ['Temple visit', 'Heritage walk', 'Local festival experience'],
      Pilgrimage: ['Sacred site visit', 'Prayer and reflection', 'Cultural lunch'],
      Scenic: ['Sunrise lookout', 'Photography walk', 'Lake or valley stop'],
    };

    return {
      day: index + 1,
      name: stop,
      activities: activityMap[tripInterest] || ['Morning walk', 'Sightseeing', 'Local experience'],
    };
  });
  const fallbackPhoto = getDestinationPhotoCredit('Khaptad National Park', 'national_park');
  const heroPhoto = getDestinationPhotoCredit('Chainpur — City of Kings', 'heritage');

  const saveItinerary = () => {
    localStorage.setItem('bajhang-saved-itinerary', JSON.stringify({
      season: tripSeason,
      interest: tripInterest,
      days: itineraryDays,
      savedAt: new Date().toISOString(),
    }));
    setItinerarySaved(true);
  };

  const exportItinerary = () => {
    const content = [
      `Explore Bajhang ${tripDays}-Day Itinerary`,
      `Season: ${tripSeason}`,
      `Interest: ${tripInterest}`,
      '',
      ...itineraryDays.flatMap((day) => [
        `Day ${day.day}: ${day.name}`,
        ...day.activities.map((activity) => `  - ${activity}`),
        '',
      ]),
    ].join('\n');
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bajhang-itinerary.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(26,82,118,0.56), rgba(26,82,118,0.78)), url(${heroPhoto.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1>Explore Bajhang</h1>
        <p>Discover the pristine beauty, rich culture, and warm hospitality of Bajhang District in Far-Western Nepal</p>
        <Link to="/destinations" className="btn-primary" style={{ color: 'white', textDecoration: 'none' }}>
          Explore Destinations
        </Link>
        <a className="photo-credit hero-photo-credit" href={heroPhoto.source} target="_blank" rel="noreferrer">
          Photo: {heroPhoto.description} · {heroPhoto.license}
        </a>
      </section>

      <div className="container">
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">{stats.destinations}</div>
            <div className="stat-label">Destinations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.routes}</div>
            <div className="stat-label">Trekking Routes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.culture}</div>
            <div className="stat-label">Festivals</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.guides}</div>
            <div className="stat-label">Local Guides</div>
          </div>
        </div>

        <section className="section">
          <h2 className="section-title">Plan Your Bajhang Trip</h2>
          <div className="trip-planner">
            <div className="trip-form">
              <label>
                Trip length
                <select value={tripDays} onChange={(e) => setTripDays(Number(e.target.value))}>
                  <option value={2}>2 days</option>
                  <option value={3}>3 days</option>
                  <option value={4}>4 days</option>
                  <option value={5}>5 days</option>
                </select>
              </label>
              <label>
                Season
                <select value={tripSeason} onChange={(e) => setTripSeason(e.target.value)}>
                  <option>Spring</option>
                  <option>Summer</option>
                  <option>Autumn</option>
                  <option>Winter</option>
                </select>
              </label>
              <label>
                Interest
                <select value={tripInterest} onChange={(e) => setTripInterest(e.target.value)}>
                  <option>Adventure</option>
                  <option>Culture</option>
                  <option>Pilgrimage</option>
                  <option>Scenic</option>
                </select>
              </label>
            </div>
            <div className="trip-results">
              {itineraryDays.map((day) => (
                <div key={`${day.day}-${day.name}`} className="trip-result-item itinerary-result-item">
                  <div className="itinerary-day-tag">Day {day.day}</div>
                  <div>
                    <strong>{day.name}</strong>
                    <div className="itinerary-activity-list">
                      {day.activities.map((activity, index) => (
                        <span key={`${day.day}-${activity}-${index}`}>{activity}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="itinerary-actions">
              <button type="button" className="btn-primary" onClick={saveItinerary}>
                {itinerarySaved ? 'Update saved itinerary' : 'Save itinerary'}
              </button>
              <button type="button" className="btn-secondary" onClick={exportItinerary}>
                Export itinerary
              </button>
              {itinerarySaved && <span role="status">Saved on this device</span>}
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">Explore the natural wonders of Bajhang</p>
          <div className="card-grid">
            {featured.length > 0 ? featured.map(dest => {
              const photo = getDestinationPhotoCredit(dest.name, dest.type, dest.image);
              return (
                <div key={dest._id} className="card-shell">
                  <Link to={dest.localCatalog ? '/destinations' : `/destinations/${dest._id}`} className="card">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h3>{dest.name}</h3>
                      <p>{dest.description?.substring(0, 100)}...</p>
                      <div className="card-meta">
                        <span className={`badge badge-${dest.difficulty}`}>{dest.difficulty}</span>
                        <span>{dest.rating} / 5</span>
                      </div>
                    </div>
                  </Link>
                  <a className="photo-credit" href={photo.source} target="_blank" rel="noreferrer">
                    Photo: {photo.description} · {photo.license}
                  </a>
                </div>
              );
            }) : (
              <div className="card-shell">
                <div className="card">
                  <img src={fallbackPhoto.url} alt={fallbackPhoto.alt} className="card-image" />
                  <div className="card-body"><h3>Khaptad National Park</h3><p>Pristine national park with diverse flora and fauna</p></div>
                </div>
                <a className="photo-credit" href={fallbackPhoto.source} target="_blank" rel="noreferrer">
                  Photo: {fallbackPhoto.description} · {fallbackPhoto.license}
                </a>
              </div>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/destinations" className="btn-primary" style={{ color: 'white', textDecoration: 'none' }}>
              View All Destinations
            </Link>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Why Visit Bajhang?</h2>
          <div className="card-grid">
            {[
              { title: 'Natural Beauty', desc: 'Pristine forests, alpine meadows, crystal-clear lakes, and majestic Himalayan peaks.', photo: getDestinationPhotoCredit('Bajhang', 'mountain') },
              { title: 'Rich Culture', desc: 'Ancient festivals, traditional architecture, and warm Far-Western hospitality.', photo: getDestinationPhotoCredit('Chainpur — City of Kings', 'heritage') },
              { title: 'Adventure', desc: 'Trekking, camping, cave exploration, and off-the-beaten-path experiences.', photo: getDestinationPhotoCredit('Mount Saipal', 'mountain') },
              { title: 'Pilgrimage', desc: 'Sacred sites including Khaptad Baba Ashram, Triveni Dham, and ancient temples.', photo: getDestinationPhotoCredit('Khaptad Baba Ashram', 'religious') },
            ].map((item, i) => (
              <div key={i} className="card">
                <img src={item.photo.url} alt={item.photo.alt} className="card-image" loading="lazy" />
                <div className="card-body">
                  <a className="photo-credit" href={item.photo.source} target="_blank" rel="noreferrer">
                    Photo: {item.photo.description} · {item.photo.license}
                  </a>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Quick Links</h2>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {[
              { to: '/routes', label: 'Trekking Routes', icon: '🥾' },
              { to: '/culture', label: 'Culture & Festivals', icon: '🎉' },
              { to: '/hotels', label: 'Hotels & Homestays', icon: '🏨' },
              { to: '/guides', label: 'Local Guides', icon: '🧭' },
              { to: '/facilities', label: 'Facilities', icon: '🏥' },
              { to: '/gallery', label: 'Photo Gallery', icon: '📷' },
            ].map((item, i) => (
              <Link to={item.to} key={i} className="card" style={{ textDecoration: 'none', textAlign: 'center' }}>
                <div className="card-body" style={{ padding: '30px 20px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{item.icon}</div>
                  <h3 style={{ color: '#1a5276' }}>{item.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
