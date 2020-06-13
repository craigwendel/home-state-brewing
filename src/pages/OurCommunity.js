import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';

export default function OurCommunity() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPhotos() {
    setLoading(true);
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&collections=1873975,3113249,136286&count=20`
    );
    const allPhotos = await response.json();
    setPhotos(allPhotos);
    setLoading(false);
  }

  useEffect(() => {
    fetchPhotos();
    return () => {
      setPhotos([]);
    };
  }, []);

  return (
    <Page>
      <PageHeader title="Our Community" />
      <Gallery photos={photos} loading={loading} />
    </Page>
  );
}
