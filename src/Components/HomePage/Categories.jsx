import { useEffect, useState } from "react";
import Category from "./Category";
import useAxios from "../../HOOKS/useAxios";

const Categories = () => {
  const axios = useAxios();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://library-management-server-six.vercel.app/category")
      .then((data) => setCategory(data.data));
  }, []);
  return (
    <div className="bg-sky-300 grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
      {category?.map((cat) => (
        <Category key={cat._id} cat={cat}></Category>
      ))}
    </div>
  );
};

export default Categories;
