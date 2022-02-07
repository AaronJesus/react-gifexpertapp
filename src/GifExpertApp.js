import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["Naruto", "BNHA", "Chowder"];
  const [categories, setCategories] = useState(["Naruto"]);
  /*const extras = ["Barbie", "Barbie_2", "Star Wars"];
  const handleAdd = () => {
    setCategories([...categories, extras[0]]);
  };*/
  return (
    <div>
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        {/*<button onClick={handleAdd}>Agregar</button>*/}
        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </>
    </div>
  );
};
