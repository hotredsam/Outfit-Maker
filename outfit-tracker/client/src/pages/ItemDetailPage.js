import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClothingContext } from "../context/ClothingItemsContext";
import ClothingFetch from "../apis/ClothingFetch";
import { useNavigate } from "react-router-dom";

const ItemDetailPage = () => {
    const { id } = useParams()
    const { selectedClothing, setSelectedClothing } = useContext(ClothingContext)
    let navigate = useNavigate();

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

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await ClothingFetch.delete(`/${id}`);
            console.log(response);
            navigate(`/dashboard`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/viewitems/${id}/update`);
    };


    return (
        <div>
            <div>{selectedClothing.title}</div>
            <div>{selectedClothing.photo}</div>
            <div>{selectedClothing.color}</div>
            <div>{selectedClothing.category}</div>
            <button onClick={(e) => handleUpdate(e, selectedClothing.clothing_id)}>Edit</button>
            <button onClick={(e) => handleDelete(e, selectedClothing.clothing_id)}>Delete</button>
        </div>
    )
};

export default ItemDetailPage;