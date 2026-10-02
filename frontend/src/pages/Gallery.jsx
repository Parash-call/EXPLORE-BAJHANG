import React, { useState } from 'react';
import { getGalleryPhotos } from '../data/photos';

function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = getGalleryPhotos();

  return (
    <div className="container section">
      <h1 className="section-title">Photo Gallery</h1>
      <p className="section-subtitle">Beautiful moments captured in Bajhang</p>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
            <div
            key={i}
            className="gallery-item"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.url} alt={photo.alt} loading="lazy" />
            <div className="gallery-overlay">
              <h4>{photo.caption}</h4>
              <a
                className="photo-credit gallery-photo-credit"
                href={photo.source}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Photo: {photo.photographer} · {photo.license}
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>
              &times;
            </button>
            <img src={selectedPhoto.url} alt={selectedPhoto.alt} />
            <div className="lightbox-caption">
              <h3>{selectedPhoto.caption}</h3>
              <a
                className="photo-credit gallery-photo-credit"
                href={selectedPhoto.source}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                Photo: {selectedPhoto.photographer} · {selectedPhoto.license}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
