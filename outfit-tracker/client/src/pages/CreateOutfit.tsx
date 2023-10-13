import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClothingFetch from "../apis/ClothingFetch";
import OutfitsFetch from "../apis/OutfitsFetch";
import { ClothingContext } from "../context/ClothingItemsContext";
import '../components/viewItems.css';

const CreateOutfit = () => {
    // const images = [
    //     'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200', 'https://picsum.photos/200',
    //     'https://picsum.photos/200',

    //     // ... Your image URLs ...
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
        width: '90%', // Set the width to 70% of the parent container
        margin: '0 auto', // Center the container horizontally
        marginLeft: '1%', // Adjust the left margin as needed
    };

    const [titleA, setTitleA] = useState('');
    const [titleB, setTitleB] = useState('');
    const [titleC, setTitleC] = useState('');
    const { topsC, setTopsC } = useContext(ClothingContext);
    const { bottomsC, setBottomsC } = useContext(ClothingContext);
    const { shoesC, setShoesC } = useContext(ClothingContext);

    let navigate = useNavigate();

    useEffect(() => {
        const fetchTops = async () => {
            try {
                const response = await ClothingFetch.get("/tops");
                console.log(response);
                setTopsC(response.data.data.clothing);
            } catch (err) { }
        };

        fetchTops();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClothingFetch.get("/bottoms");
                //console.log(response);
                setBottomsC(response.data.data.clothing);
            } catch (err) { }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ClothingFetch.get("/shoes");
                //console.log(response);
                setShoesC(response.data.data.clothing);
            } catch (err) { }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [user_email, setEmail] = useState("natalie@test.com");
    const [title, setTitle] = useState("");
    const [tops, setTops] = useState("");
    const [bottoms, setBottoms] = useState("");
    const [shoes, setShoes] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await OutfitsFetch.post("/", {
            user_email,
            title,
            tops,
            bottoms,
            shoes,
            notes
        });
        console.log(response);
        navigate(`/viewoutfits`);
        } catch (err) {
        console.log(err);
        }
    };


    return (
        <div className="scrollable-section-container" style={parentStyle}>
            <h1>Create an outfit!</h1>
            <h2>Enter a title:</h2>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                />
            </div>
            <h2>Select a Top:</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {topsC && topsC.map((top) => (
                        <div className="section-column" onClick={() => setTops(top.photo)}>
                            <img src={top.photo} alt={top.title} onClick={() => setTitleA(top.title)} />
                        </div>
                    ))}
                </div>
            </div>
            <p>Selected top: {titleA}</p>
            <h2>Select a Bottom:</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {bottomsC && bottomsC.map((bottom) => (
                        <div className="section-column" onClick={() => setBottoms(bottom.photo)}>
                            <img src={bottom.photo} alt={bottom.title} onClick={() => setTitleB(bottom.title)} />
                        </div>
                    ))}
                </div>
            </div>
            <p>Selected bottom: {titleB}</p>
            <h2>Select a Shoe:</h2>
            <div className="scrollable-section" style={containerStyle}>
                <div style={rowStyle} className="row">
                    {shoesC && shoesC.map((shoe) => (
                        <div className="section-column" onClick={() => setShoes(shoe.photo)}>
                            <img src={shoe.photo} alt={shoe.title} onClick={() => setTitleC(shoe.title)} />
                        </div>
                    ))}
                </div>
            </div>
            <p>Selected shoe: {titleC}</p>
            <h2>Notes:</h2>
            <div>
                <input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder=""
                />
            </div>
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                Save
            </button>
        </div>
    );
};

export default CreateOutfit;