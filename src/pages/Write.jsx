import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.style.scss";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../components/category/Category";
import { getCategory } from "../services/apiCategory";
import { createPosts, getPost, updatePost } from "../services/apiPosts";

const Write = (props) => {
  const { id } = useParams();
  const { isToken, user, authTokens } = useAuthContext();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryID] = useState(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      img,
      user: user.user_id,
      desc: value,
      category: categoryId,
      authTokens: authTokens.access,
    };
    if (id) {
      updatePost(postData, id);
    } else {
      createPosts(postData);
    }
  };

  const updateCategory = (idCategory) => {
    setCategoryID(idCategory);
  };
  useEffect(() => {
    if (!isToken) navigate("/login");

    if (id) {
      getPost(id).then(({ title, desc, category: categoryIdApi }) => {
        setTitle(title);
        setValue(desc);
        setCategoryID(categoryIdApi);
        // console.log(title, desc, category);
      });
    } else {
      setTitle("");
      setValue("");
      setCategoryID(null);
    }
  }, [isToken, id]);

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          name="title"
          id=""
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            thame="snow"
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status : </b> Draft
          </span>
          <span>
            <b>Visibility : </b> Public
          </span>
          <input
            type="file"
            name="img"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label htmlFor="file" className="file">
            Upload image
          </label>
          <div className="buttons">
            <button onClick={handleSubmit}>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <Category handleChange={updateCategory} categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};

Write.propTypes = {};

export default Write;
