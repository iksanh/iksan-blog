import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { deletePost, getPost } from "../services/apiPosts";
import { useAuthContext } from "../contexts/AuthContext";
import { getText } from "../utils/text";

import Menu from "../components/menu/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

import "./single.style.scss";

const Single = (props) => {
  const { id } = useParams();
  const { user, authTokens } = useAuthContext();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const isOwner = user?.user_id === post.user;

  const handleDelete = () => {
    deletePost(id, authTokens);
    navigate(0);
  };
  useEffect(() => {
    getPost(id)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <div className="single">
      <div className="content">
        <img src={post.img} alt={post.title} />
        <div className="user">
          <img
            src={
              user?.img ||
              "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt="user image"
          />
          <div className="info">
            <span>{user?.username}</span>
            <p>Post 2 Days ago</p>
          </div>
          {isOwner && (
            <div className="edit">
              <Link to={`/write/${id}`}>
                <img src={Edit} alt=" edit image" />
              </Link>

              <img
                src={Delete}
                alt="delete img"
                onClick={handleDelete}
                className="delete"
              />
            </div>
          )}

          {/* <div className="delete"></div> */}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>
      </div>
      <Menu />
    </div>
  );
};

Single.propTypes = {};

export default Single;
