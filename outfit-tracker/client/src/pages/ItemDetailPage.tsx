import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClothingContext } from "../context/ClothingItemsContext";
import ClothingFetch from "../apis/ClothingFetch";
import { useNavigate } from "react-router-dom";
import './ItemDetailPage.css';

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
            //console.log(selectedClothing)
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
            navigate(`/viewitems`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/viewitems/${id}/update`);
    };


    return (
        <div className="item-details">
            <h1>{selectedClothing.title}</h1>
            {/* <div>{selectedClothing.photo}</div> */}
            <img className="center" src={selectedClothing.photo} alt='Photo Not Working' height="300px"/>
            <h2>Color:</h2>
            <div>{selectedClothing.color}</div>
            <h2>Category:</h2>
            <div>{selectedClothing.category}</div>
            <button className="center" onClick={(e) => handleUpdate(e, selectedClothing.clothing_id)}>Edit</button>
            <button className="center" onClick={(e) => handleDelete(e, selectedClothing.clothing_id)}>Delete</button>
        </div>
    )
};

export default ItemDetailPage;