import { useState } from 'react';
import ClothingFetch from "../apis/ClothingFetch";
import './UploadImage.css';
import { useNavigate } from "react-router-dom";

const AddClothingItem = () => {
    const mode = 'create'
    const editMode = mode === 'edit' ? true : false
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
        navigate(`/dashboard`);
        } catch (err) {
        console.log(err);
        }
    };

    const handleClose = (e) => {
        e.stopPropagation();
        navigate(`/dashboard`);
      };

    // const [data, setData] = useState({
    //     user_email: "natalie@test.com",
    //     photo: "",
    //     title: "",
    //     category: "category",
    //     color: ""
    // })

    // const postData = async () => {
    //     try{
    //         const response = await fetch('http://localhost:3001/clothing', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(data)
    //         })
    //         console.log(response)
    //     } catch(err) {
    //         console.error(err)
    //     }
    // }

    // const handleChange = (e) => {
    //     console.log('changing', e)
    //     const { name, value } = e.target

    //     setData(data => ({
    //         ...data,
    //         [name] : value
    //     }))
    // }

  return (
    <div className="overlay">
        <div className="modal">
            <div className="form-title-container">
                <h3>Let's {mode} a clothing item!</h3>
                
                    <button onClick={handleClose}>X</button>
            </div>

            <form>
                <div className="form-row">
                <div className="col">
                    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    />
                </div>
                <div className="col">
                    <input
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Upload Photo"
                    />
                </div>
                <div className="col">
                    <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Color"
                    />
                </div>
                <div className="col">
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="custom-select my-1 mr-sm-2"
                    >
                    <option disabled>Category</option>
                    <option value="1">Tops</option>
                    <option value="2">Bottoms</option>
                    <option value="3">Shoes</option>
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