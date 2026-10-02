import React from 'react';

function Map({ latitude, longitude, name, locations = [] }) {
  const activeLatitude = latitude || locations[0]?.latitude;
  const activeLongitude = longitude || locations[0]?.longitude;

  if (!activeLatitude || !activeLongitude) {
    return <div style={{ background: '#ddd', height: '300px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Map not available</div>;
  }

  const bbox = locations.length > 1
    ? locations.reduce((bounds, point) => {
        const lat = Number(point.latitude);
        const lon = Number(point.longitude);
        if (!lat || !lon) return bounds;
        return {
          minLat: Math.min(bounds.minLat, lat),
          maxLat: Math.max(bounds.maxLat, lat),
          minLon: Math.min(bounds.minLon, lon),
          maxLon: Math.max(bounds.maxLon, lon),
        };
      }, {
        minLat: activeLatitude,
        maxLat: activeLatitude,
        minLon: activeLongitude,
        maxLon: activeLongitude,
      })
    : null;

  const boundsParam = bbox
    ? `${bbox.minLon - 0.08}%2C${bbox.minLat - 0.08}%2C${bbox.maxLon + 0.08}%2C${bbox.maxLat + 0.08}`
    : `${activeLongitude - 0.05}%2C${activeLatitude - 0.03}%2C${activeLongitude + 0.05}%2C${activeLatitude + 0.03}`;

  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '20px' }}>
      <iframe
        title={name || 'Bajhang map'}
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${boundsParam}&layer=mapnik&marker=${activeLatitude}%2C${activeLongitude}`}
        allowFullScreen
      />
    </div>
  );
}

export default Map;
