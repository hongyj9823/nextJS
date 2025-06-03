// app/gallery/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get('/api/unsplash?query=wish');
      setImages(res.data.results);
    };
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.urls.small}
          alt={img.alt_description}
          className="rounded shadow"
        />
      ))}
    </div>
  );
}
