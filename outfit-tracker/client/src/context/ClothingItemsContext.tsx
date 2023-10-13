import React, { useState, createContext } from "react";

export const ClothingContext = createContext();

export const ClothingContextProvider = (props) => {
    const [clothing, setClothing] = useState("");
    const [ topsC, setTopsC ] = useState("");
    const [ bottomsC, setBottomsC ] = useState("");
    const [ shoesC, setShoesC ] = useState("");
    const [selectedClothing, setSelectedClothing] = useState("");

    const addClothing = (clothingItem) => {
        setClothing([...clothing, clothingItem]);
    };
    return (
        <ClothingContext.Provider
            value={{
                clothing,
                setClothing,
                topsC,
                setTopsC,
                bottomsC,
                setBottomsC,
                shoesC,
                setShoesC,
                addClothing,
                selectedClothing,
                setSelectedClothing,
            }}
        >
            {props.children}
        </ClothingContext.Provider>
    );
};