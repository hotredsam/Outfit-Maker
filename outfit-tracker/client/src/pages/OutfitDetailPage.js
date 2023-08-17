import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OutfitsContext } from "../context/OutfitsContext";
import OutfitsFetch from "../apis/OutfitsFetch";
import { useNavigate } from "react-router-dom";

const OutfitDetailPage = () => {
    const { id } = useParams()
    const { selectedOutfit, setSelectedOutfit } = useContext(OutfitsContext)
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await OutfitsFetch.get(`/${id}`);
            console.log(response);
            setSelectedOutfit(response.data.data.outfits);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
    }, []);

    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await OutfitsFetch.delete(`/${id}`);
            console.log(response);
            navigate(`/`);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/viewoutfits/${id}/update`);
    };


    return (
        <div>
            <div>{selectedOutfit.title}</div>
            <div>{selectedOutfit.tops}</div>
            <div>{selectedOutfit.bottoms}</div>
            <div>{selectedOutfit.shoes}</div>
            <div>{selectedOutfit.notes}</div>
            <button onClick={(e) => handleUpdate(e, selectedOutfit.outfits_id)}>Edit</button>
            <button onClick={(e) => handleDelete(e, selectedOutfit.outfits_id)}>Delete</button>
        </div>
    )
};

export default OutfitDetailPage;