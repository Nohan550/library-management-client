import axios from "axios";
import toast from "react-hot-toast";

const BorrowBook = ({ books }) => {
  

  const { _id, curDate, returnDate,book_name, image, category } = books;

  const handleReturn = (_id) => {
    axios
      .delete(
        `https://library-management-server-six.vercel.app/borrowedBooks/${_id}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.deletedCount > 0) {
          toast.success("Returned,Please Refresh");
        }
      });
  };
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={book_name} className="h-80 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book_name}
          <div className="badge ml-2 badge-info text-white">{category}</div>
        </h2>
        <div className="text-lg font-medium">
          <h1>Borrowed on : {curDate}</h1>
          <h1>Return Date : {returnDate}</h1>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleReturn(_id)}
            className="btn btn-info text-white"
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowBook;
