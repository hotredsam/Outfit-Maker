import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClothingContext } from "../context/ClothingItemsContext";
import ClothingFetch from "../apis/ClothingFetch";

const ItemDetailPage = () => {
    const { id } = useParams()
    const { selectedClothing, setSelectedClothing } = useContext(ClothingContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await ClothingFetch.get(`/${id}`);
            console.log(response);
            setSelectedClothing(response.data.data.clothing);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            <div>{selectedClothing.title}</div>
            <div>{selectedClothing.photo}</div>
            <div>{selectedClothing.color}</div>
            <div>{selectedClothing.category}</div>
        </div>
    )
};

export default ItemDetailPage;