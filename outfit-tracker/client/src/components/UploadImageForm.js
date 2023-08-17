import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UploadImageForm() {
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState('');
  const dispatch = useDispatch();

  const handleFileChange = e => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleUpload = () => {
    if (imageFile && imageName.trim() !== '') {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('name', imageName);

      //dispatch(uploadImage(formData));
      setImageFile(null);
      setImageName('');
    }
  };

  return (
    <div>
      <h2>Upload Outfit Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Image Name"
        value={imageName}
        onChange={e => setImageName(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadImageForm;