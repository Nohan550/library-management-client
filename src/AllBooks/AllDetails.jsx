import Rating from "react-rating";

const AllDetails = ({ books }) => {
  const { name, image, author, rating, category } = books;
  return (
    <div className="card card-side w-96 mx-auto bg-sky-100 shadow-xl">
      <figure className="w-1/2">
        <img src={image} alt={category} className="rounded-xl  h-full" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">{author}
        <div className="badge ml-2 badge-info text-white">{category}</div></p>
        <div className="card-actions justify-end">
          <h1>Rating</h1>
          <Rating initialRating={rating} readonly></Rating>
          <button className="btn btn-info text-white">Update</button>
        </div>
      </div>
    </div>
  );
};

export default AllDetails;
