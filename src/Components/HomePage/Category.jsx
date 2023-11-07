import { Link } from "react-router-dom";

const Category = ({ cat }) => {
  const { name, image } = cat;
  return (
    <div className="">
      <div className="card  w-96 mx-auto glass">
        <figure>
          <img src={image} className="w-full h-72" alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <Link><button className="btn bg-sky-400 text-white ">Learn more</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
