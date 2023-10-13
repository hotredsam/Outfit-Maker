import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOutfit } from '../actions/outfitActions'; // Create this action
// import { createAccount } from '../components/accountActions'; // Adjust this path if necessary

function CreateOutfitForm() {
  const [outfitName, setOutfitName] = useState('');
  const dispatch = useDispatch();

  const handleCreateOutfit = () => {
    if (outfitName.trim() !== '') {
      dispatch(createOutfit(outfitName));
      setOutfitName('');
    }
  };

  return (
    <div>
      <h2>Create New Outfit</h2>
      <input
        type="text"
        placeholder="Outfit Name"
        value={outfitName}
        onChange={e => setOutfitName(e.target.value)}
      />
      <button onClick={handleCreateOutfit}>Create</button>
    </div>
  );
}

export default CreateOutfitForm;
