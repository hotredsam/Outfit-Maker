import React, { useState, createContext } from "react";

export const OutfitsContext = createContext();

export const OutfitsContextProvider = (props) => {
  const [outfits, setOutfits] = useState("");
  const [selectedOutfit, setSelectedOutfit] = useState("");

  const addOutfit = (outfit) => {
    setOutfits([...outfits, outfit]);
  };
  return (
    <OutfitsContext.Provider
      value={{
        outfits,
        setOutfits,
        addOutfit,
        selectedOutfit,
        setSelectedOutfit,
      }}
    >
      {props.children}
    </OutfitsContext.Provider>
  );
};