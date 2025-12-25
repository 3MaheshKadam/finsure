"use client";
import React, { useState, useEffect } from 'react';

const AdminUpload = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const CLOUD_NAME = 'dqfum2awz';
  const UPLOAD_PRESET = 'finsure';

  // Fetch offers on mount
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await fetch('/api/offers');
        if (!res.ok) throw new Error('Failed to fetch offers');
        const data = await res.json();
        setOffers(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Please select an image');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      // Upload to Cloudinary
      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (!uploadRes.ok) throw new Error('Image upload failed');

      const { secure_url: imageUrl } = await uploadRes.json();

      // Save to /api/offers
      const saveRes = await fetch('/api/offers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, imageUrl })
      });

      if (!saveRes.ok) throw new Error('Failed to save offer');

      const newOffer = await saveRes.json();
      setOffers([...offers, newOffer]);
      setSuccess(true);

      // Reset form
      setTitle('');
      setDescription('');
      setImage(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p>Loading offers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Offers</h2>
      <ul>
        {offers.map((offer) => (
          <li key={offer._id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <img src={offer.imageUrl} alt={offer.title} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>

      <h3>Add New Offer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Offer added successfully!</p>}
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Offer'}
        </button>
      </form>
    </div>
  );
};

export default AdminUpload;