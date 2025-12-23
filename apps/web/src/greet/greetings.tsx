import React from "react";
import "./greetings.scss";
import Img from "@Assets/home.png";

const Greet: React.FC = () => {
  return (
    <div className="greet">
      <h1>
        Hello2 <img src={Img} alt="Home" />
      </h1>
    </div>
  );
};

export default Greet;
