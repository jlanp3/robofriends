import React from "react";

const Card = ({ name, email, id }) => {
  // if (true) {
  //   throw new Error("Nooooo!");
  // }
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      {/* <div className="pv2 ph3">
        <h1 className="f6 ttu tracked tc">Daily News Co.</h1>
      </div> */}
      <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
      <div className="pa3">
        <h2 className="tc">{name}</h2>
        <p className="gray db pv2 tc">{email}</p>
      </div>
    </div>
  );
};

export default Card;
