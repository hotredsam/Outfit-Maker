import React, { useEffect, useContext } from "react";
import { OutfitsContext } from "../context/OutfitsContext";
import OutfitsFetch from "../apis/OutfitsFetch";
import { useNavigate } from "react-router-dom";


const ViewOutfits = () => {
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto', // Enable horizontal scrolling
    height: '100%', // Set the height to enable scroll bars (adjust as needed)
    margin: '10px 0' // Adjust margin as needed
  };

  let navigate = useNavigate();
  const { outfits, setOutfits } = useContext(OutfitsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OutfitsFetch.get("/");
        console.log(response.data);
        setOutfits(response.data.data.outfits);
      } catch (err) { }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await OutfitsFetch.delete(`/${id}`);
      // console.log(response);
      // navigate(`/viewoutfits`);
      setOutfits(
        outfits.filter((outfit) => {
          return outfit.outfits_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/viewoutfits/${id}/update`);
  };

  return (
    <>
      <h1>Your Closet</h1>
      <div style={rowStyle}>
        {outfits && outfits.map((outfit) => (
          <div style={columnStyle}>
            <h2>{outfit.title}</h2>
            <img src={outfit.tops} alt={outfit.title} height='200px' width='200px' />
            <img src={outfit.bottoms} alt={outfit.title} height='200px' width='200px' />
            <img src={outfit.shoes} alt={outfit.title} height='200px' width='200px' />
            <h3>Notes:</h3>
            <div>{outfit.notes}</div>
            <button onClick={(e) => handleUpdate(e, outfit.outfits_id)}>Edit</button>
            <button onClick={(e) => handleDelete(e, outfit.outfits_id)}>Delete</button>
          </div>
        ))}
      </div>
    </>

  );
}

export default ViewOutfits;
