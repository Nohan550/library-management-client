import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
         fetch('http://localhost:5500/category')
         .then(res=>res.json())
         .then(data=>setCategory(data))
  }, []);
  return <div className="bg-sky-300 grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">{category.map(cat=><Category key={cat._id} cat={cat}></Category>)}</div>;
};

export default Categories;
