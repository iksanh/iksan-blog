import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./write.style.scss";

const Write = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" name="" id="" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            thame="snow"
            value={value}
            onChange={setValue}
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
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file" className="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="art" />
            <label htmlFor="art">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="art" />
            <label htmlFor="art">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="art" />
            <label htmlFor="art">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="desaign" id="art" />
            <label htmlFor="art">Desaign</label>
          </div>
        </div>
      </div>
    </div>
  );
};

Write.propTypes = {};

export default Write;
