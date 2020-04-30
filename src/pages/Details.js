import React, { useEffect, useState } from "react";

const Details = (props) => {
  const { location, history } = props;

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);

  console.log(location);
  const { title, summary, poster, year, genres } = location.state;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Details;
