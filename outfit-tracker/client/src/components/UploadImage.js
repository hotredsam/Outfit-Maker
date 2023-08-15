import { Link } from 'react-router-dom';
import { useState } from 'react';
import './UploadImage.css';


const AddClothingItem = () => {
    const mode = 'create'
    const editMode = mode === 'edit' ? true : false

    const [data, setData] = useState({
        user_email: null,
        photo: null,
        title: null,
        category: null,
        color: null
    })

    const postData = async () => {
        try{
            const response = await fetch('http://localhost:3000/clothing', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        console.log('changing', e)
        const { name, value } = e.target

        setData(data => ({
            ...data,
            [name] : value
        }))
    }

  return (
    <div className="overlay">
        <div className="modal">
            <div className="form-title-container">
                <h3>Let's {mode} a clothing item!</h3>
                <Link to="/dashboard">
                    <button>X</button>
                </Link>
            </div>

            <form>
                <div className="form-row">
                <div className="col">
                    <input
                    value={data.title}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    />
                </div>
                <div className="col">
                    <input
                    value={data.color}
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    placeholder="Color"
                    />
                </div>
                <div className="col">
                    <select
                    value={data.category}
                    onChange={handleChange}
                    className="custom-select my-1 mr-sm-2"
                    >
                    <option disabled>Category</option>
                    <option value="1">Tops</option>
                    <option value="2">Bottoms</option>
                    <option value="3">Shoes</option>
                    </select>
                </div>
                <button
                    onClick={editMode ? '' : postData}
                    type="submit"
                    className="btn btn-primary"
                >
                    Save
                </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddClothingItem;