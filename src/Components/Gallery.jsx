import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: '/public/gallery2.jpg',
      alt: 'Law Office',
    },
    {
      src: '/public/gallery1.jpg',
      alt: 'Courtroom',
    },
    {
      src: '/public/gallery3.jpg',
      alt: 'Legal Documents',
    },
    {
      src: '/public/blog5.jpg',
      alt: 'Lawyer Working',
    },
    {
      src:  '/public/gallery4.jpg',
      alt: 'Client Meeting',
    },
    {
      src: '/public/blog4.jpg',
      alt: 'Gavel and Books',
    },
  ];

  return (
    <section className="bg-orange-50 mt-25 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={img.src} alt={img.alt} className="w-full h-60 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
