import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./post.style.scss";
import { getText } from "../../utils/text";

const Post = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <div className="img">
        <img src={post.img} />
      </div>
      <div className="contents">
        <Link to={`/post/${post.id}`} className="link">
          <h1>{post.title}</h1>
        </Link>
        <p>{getText(post.desc)}</p>
        <button>Read more</button>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
