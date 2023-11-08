import Rating from "react-rating";
import { Link } from "react-router-dom";

const Books = ({ catBooks }) => {
  const { name, image, author, rating, category } = catBooks;

  return (
    <div className="card w-96 mx-auto bg-sky-200  shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt={name} className="rounded-xl h-52" />
      </figure>

      <div className="card-body items-center text-center">
        <h1 className="card-title">{name}</h1>
        <h2 className="text-lg font-medium">
          {author}
          <div className="badge ml-2 badge-info text-white">{category}</div>
        </h2>
        <h1 className="">Rating</h1>
        <Rating initialRating={rating} readonly></Rating>
        <div className="card-actions">
          <Link to={`/category/${category}/${name}`}>
            {" "}
            <button className="btn btn-info text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
