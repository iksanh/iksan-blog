import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Post from "../components/post/Post";
import "./home.style.scss";
import axios from "axios";
import { getPosts } from "../services/apiPosts";
// const posts = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
