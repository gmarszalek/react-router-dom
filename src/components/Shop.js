import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=10"
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      {items.map((item) => (
        <h2 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
