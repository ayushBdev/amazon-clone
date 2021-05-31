import React, {useState} from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createProducts } from "./#Redux/Actions/Products_Action";

const UploadProduct = () => {

    const initialState = {
        title: "",
        selectedFile: "",
        ratings: "",
        price: "",
        description: ""
    };

    const [postData, setPostData] = useState(initialState);
    const dispatch = useDispatch();

    const clear = () => {
        setPostData(initialState);
    };

    const handelPost = async(event) => {
        event.preventDefault();
        dispatch(createProducts(postData));
        clear();
    };


    return (
        <div className="uploadpost">
            <form  className="" onSubmit={handelPost}>
                <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={(event) => setPostData({...postData, title: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="ratings"
                    name="ratings"
                    onChange={(event) => setPostData({...postData, ratings: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="price"
                    name="price"
                    onChange={(event) => setPostData({...postData, price: event.target.value})}
                />
                <input 
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={(event) => setPostData({...postData, description: event.target.value})}
                />
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile:base64})}
                />
                <button type="submit"> Upload </button>
            </form>
        </div>
    );
};

export default UploadProduct;