import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Menu from "../components/menu/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

import "./single.style.scss";

const Single = (props) => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="single image"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user image"
          />
          <div className="info">
            <span>John</span>
            <p>Post 2 Days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt=" edit image" />
            </Link>
            <Link>
              <img src={Delete} alt="delete img" />
            </Link>
          </div>
          {/* <div className="delete"></div> */}
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          qui, laborum dolor ipsum tempora rem repellendus ad magni fuga modi,
          sapiente possimus nobis quos consequuntur soluta numquam est sit?
          <br />
          <br />
          Beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          labore, reprehenderit ad numquam unde aperiam dolores provident ullam
          ratione repellat quae architecto molestias corrupti nobis quas
          consequatur, consectetur voluptas rerum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis eum veniam nemo repudiandae
          delectus impedit expedita vitae, laboriosam hic fuga facere
          exercitationem explicabo quia molestias sunt iure necessitatibus
          adipisci illum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit
          placeat quod fugit? Fugit nemo, eum esse perspiciatis excepturi
          distinctio, ullam repudiandae aperiam sed non magni repellat vitae
          maxime cumque.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio,
          ratione qui fugiat at repudiandae inventore soluta. Veniam cum, vel
          rem dicta maxime neque voluptatem nemo, error, est soluta tenetur.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque nulla
          incidunt architecto nobis voluptatibus? Vero ea error, quas
          repudiandae eveniet nobis ratione ipsa doloribus eos, necessitatibus
          odio recusandae impedit delectus!
        </p>
      </div>
      <Menu />
    </div>
  );
};

Single.propTypes = {};

export default Single;
