import React, { useState, createContext } from "react";

export const ClothingContext = createContext();

export const ClothingContextProvider = (props) => {
  const [clothing, setClothing] = useState([]);
  const [selectedClothing, setSelectedClothing] = useState("");

  const addClothing = (clothingItem) => {
    setClothing([...clothing, clothingItem]);
  };
  return (
    <ClothingContext.Provider
      value={{
        clothing,
        setClothing,
        addClothing,
        selectedClothing,
        setSelectedClothing,
      }}
    >
      {props.children}
    </ClothingContext.Provider>
  );
};