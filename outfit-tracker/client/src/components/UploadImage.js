import React, { useState } from 'react';
import ClothingFetch from "../apis/ClothingFetch";
import './UploadImage.css';
import { useNavigate } from "react-router-dom";

const AddClothingItem = () => {
    let navigate = useNavigate();

    const [user_email, setEmail] = useState("natalie@test.com");
    const [photo, setPhoto] = useState("");
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("Category");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await ClothingFetch.post("/", {
            user_email,
            photo,
            title,
            color,
            category
        });
        console.log(response);
        navigate(`/viewitems`);
        } catch (err) {
        console.log(err);
        }
    };

    const handleClose = (e) => {
        e.stopPropagation();
        navigate(`/`);
      };

  return (
    <div className="overlay">
        <div className="modal">
            <div className="form-title-container">
                <h1>Let's create a clothing item!</h1>
                
                    <button onClick={handleClose}>X</button>
            </div>

            <form>
                <div className="form-row">
                <h2>Title:</h2>
                <div className="col">
                    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    />
                </div>
                <h2>Photo Link:</h2>
                <div className="col">
                    <input
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Photo"
                    />
                </div>
                <h2>Color:</h2>
                <div className="col">
                    <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Color"
                    />
                </div>
                <h2>Category:</h2>
                <div className="col">
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="custom-select my-1 mr-sm-2"
                    >
                    <option disabled>Category</option>
                    <option value="Tops">Tops</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Shoes">Shoes</option>
                    </select>
                </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddClothingItem;
