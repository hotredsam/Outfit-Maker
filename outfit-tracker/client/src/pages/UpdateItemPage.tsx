import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClothingContext } from "../context/ClothingItemsContext";
import ClothingFetch from "../apis/ClothingFetch";
import '../components/UploadImage.css';

const UpdateClothingItem = (props) => {
   const { id } = useParams();
   let navigate = useNavigate();
  const { clothing } = useContext(ClothingContext);
  const [user_email, setEmail] = useState("natalie@test.com");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await ClothingFetch.get(`/${id}`);
      console.log(response.data.data);
      setTitle(response.data.data.clothing.title);
      setPhoto(response.data.data.clothing.photo);
      setColor(response.data.data.clothing.color);
      setCategory(response.data.data.clothing.category);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedClothingItem = await ClothingFetch.put(`/${id}`, {
      user_email,
      title,
      photo,
      color,
      category
    });
    navigate('/viewitems');
  };

  const handleClose = (e) => {
    e.stopPropagation();
    navigate(`/`);
  };

  return (
    <div className="overlay">
        <div className="modal">
            <div className="form-title-container">
                <h1>Let's update a clothing item!</h1>
                
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
                    type="text"
                    className="form-control"
                    placeholder="Upload Photo"
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

export default UpdateClothingItem;