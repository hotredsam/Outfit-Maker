import React, { useEffect, useContext } from "react";
import './viewItems.css';
import ScrollableSection from './ScrollableSection';
import ClothingFetch from "../apis/ClothingFetch";
import { ClothingContext } from "../context/ClothingItemsContext";
import { useNavigate } from "react-router-dom";



//test
const ViewItems = () => {
    // const images = [
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200',
    // ].map(s => ({
    //     top: s,
    //     middle: s,
    //     bottom: s
    // }));
    const rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto', // Enable horizontal scrolling
        height: '100%', // Set the height to enable scroll bars (adjust as needed)
        margin: '10px 0' // Adjust margin as needed
    };

    const parentStyle = {
        overflowX: 'hidden', // Hide horizontal scrollbar

    }

    const containerStyle = {
        width: '70%', // Set the width to 70% of the parent container
        margin: '0 auto', // Center the container horizontally
        marginLeft: '1%', // Adjust the left margin as needed
    };

    const { tops, setTops } = useContext(ClothingContext);
    const { bottoms, setBottoms } = useContext(ClothingContext);
    const { shoes, setShoes } = useContext(ClothingContext);

    let navigate = useNavigate();

    useEffect(() => {
        const fetchTops = async () => {
          try {
            const response = await ClothingFetch.get("/tops");
            console.log(response);
            setTops(response.data.data.clothing);
          } catch (err) {}
        };
        
        fetchTops();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await ClothingFetch.get("/bottoms");
            //console.log(response);
            setBottoms(response.data.data.clothing);
          } catch (err) {}
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await ClothingFetch.get("/shoes");
            //console.log(response);
            setShoes(response.data.data.clothing);
          } catch (err) {}
        };
    
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      //STILL NEEDS WORK
    const handleClothingSelect = (id) => {
        navigate(`/viewitems/${id}`);
    };

    return (
        <div className="scrollable-section-container" style={parentStyle}>
            <h2>Tops</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {tops && tops.map((top) => (
                        <div className="section-column" onClick={() => handleClothingSelect(top.clothing_id)}
                        key={top.clothing_id}>
                            <img src={top.photo} alt={top.title} />
                        </div>
                    ))}
                </div>
            </div>
            <h2>Bottoms</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {bottoms && bottoms.map((bottom) => (
                        <div className="section-column" onClick={() => handleClothingSelect(bottom.clothing_id)}
                        key={bottom.clothing_id}>
                            <img src={bottom.photo} alt={bottom.title} />
                        </div>
                    ))}
                </div>
            </div>
            <h2>Shoes</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {shoes && shoes.map((shoe) => (
                        <div className="section-column" onClick={() => handleClothingSelect(shoe.clothing_id)}
                        key={shoe.clothing_id}>
                            <img src={shoe.photo} alt={shoe.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewItems