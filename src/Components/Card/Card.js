import React from "react";
import "./Card.css";

const Card = (props) => {
  const { strCategoryThumb, strCategory, strCategoryDescription } = props.data;

  return (
    <div className="bg-indigo-500 py-5 rounded-lg	">
      <img className="img" src={strCategoryThumb} alt="" />
      <h2 className="text-2xl text-white">Catagory:{strCategory}</h2>
      <p className="text-white ">
        Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating
        beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]
      </p>
      <a className="a" href="">
        Food
      </a>
      <a className="a1" href="">
        More Details
      </a>
    </div>
  );
};

export default Card;
