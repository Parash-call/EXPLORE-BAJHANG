import React from 'react';

function About() {
  return (
    <div className="container section">
      <h1 className="section-title">About Explore Bajhang</h1>
      <div className="detail-info" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#1a5276', marginBottom: '15px' }}>Our Mission</h2>
        <p style={{ lineHeight: '1.8' }}>
          Explore Bajhang is a comprehensive tourism data collection, analysis, and web platform
          dedicated to showcasing the natural beauty, rich cultural heritage, and warm hospitality
          of Bajhang District in Sudurpashchim Province, Nepal.
        </p>

        <h2 style={{ color: '#1a5276', marginBottom: '15px', marginTop: '30px' }}>About Bajhang</h2>
        <p style={{ lineHeight: '1.8' }}>
          Bajhang is a district in the far-western region of Nepal, bordered by Tibet (China) to the north
          and other Nepali districts to the south. The district is home to some of Nepal's most pristine
          natural landscapes, including Khaptad National Park, Mount Api (7132m), and the sacred Khaptad
          Baba Ashram. The district headquarters is located in Dipayal Silgadhi.
        </p>

        <h2 style={{ color: '#1a5276', marginBottom: '15px', marginTop: '30px' }}>What We Offer</h2>
        <ul style={{ lineHeight: '2', paddingLeft: '20px' }}>
          <li>Comprehensive tourism destination database</li>
          <li>Detailed trekking route information</li>
          <li>Cultural festival and event calendar</li>
          <li>Hotel and homestay listings</li>
          <li>Certified local guide directory</li>
          <li>Essential facility information</li>
          <li>Photo gallery of Bajhang landscapes</li>
          <li>ML-powered tourism recommendations</li>
        </ul>

        <h2 style={{ color: '#1a5276', marginBottom: '15px', marginTop: '30px' }}>Data Sources</h2>
        <p style={{ lineHeight: '1.8' }}>
          Our data is collected from Department of Tourism Nepal, Nepal Tourism Board, local community
          organizations in Bajhang, and field surveys conducted by our research team.
        </p>
      </div>
    </div>
  );
}

export default About;
