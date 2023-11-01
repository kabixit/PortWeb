import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const uploadToIPFS = async () => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('file', file);

      // Replace 'YOUR_API_KEY' and 'YOUR_API_SECRET' with your Pinata API credentials
      const pinataApiKey = 'YOUR_API_KEY';
      const pinataApiSecret = 'YOUR_API_SECRET';

      const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'pinata_api_key': pinataApiKey,
          'pinata_secret_api_key': pinataApiSecret,
        },
      });

      if (response.status === 200) {
        setIpfsHash(response.data.IpfsHash);
        alert('File uploaded to IPFS successfully!');
      } else {
        alert('Error uploading file to IPFS');
      }
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
      alert('Error uploading file to IPFS');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload to IPFS using Pinata</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadToIPFS} disabled={!file || uploading}>
        Upload to IPFS
      </button>
      {uploading && <p>Uploading...</p>}
      {ipfsHash && <p>IPFS Hash: {ipfsHash}</p>}
    </div>
  );
};

export default Upload;
