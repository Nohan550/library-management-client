

const BorrowBook = ({ books }) => {

 
  const { _id, curDate, returnDate,book_name, image, category,quantity } = books;

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
     
      </div>
    </div>
  );
};

export default BorrowBook;
