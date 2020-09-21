import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, []);
  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
    );
    const item = await data.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.url} alt="" />
    </div>
  );
}

export default Item;
