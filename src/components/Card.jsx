import React from "react";
import "./Card.css";
import { MdOutlineVerified } from "react-icons/md";
import { GrEbay } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Card = ({name,userName, image,followers}) => {
  return (
    <div className="card">

    <div className="tag"><p>Entertainment</p> </div>
      <img
        src={image} alt="creator image"
      />

      <div className="nameSection">
        <h4>
         {name}
          <MdOutlineVerified
            size={"20px"}
            style={{ color: "green", margin: "2px" }}
          />
        </h4>
        <h4>{followers}</h4>
      </div>

      <div className="subName">
        <p>{userName}</p>
        <p> Followers</p>
      </div>

      <hr style={{ color: "gray" }} />

      <div className="lastSection">
        <div className="cardIcons">
          <div className="iconContainer">
          <AiFillInstagram size={"15px"}  className="icon"/>
          </div>
          <div className="iconContainer">
          <FaYoutube size={"15px"}  className="icon" />
          </div>
          <div className="iconContainer">
          <FaFacebook  size={"15px"}  className="icon"/>
          </div>
        </div>
        <button>Compare</button>
      </div>
    </div>
  );
};

export default Card;
