import { useLoaderData } from "react-router-dom";
import BorrowBook from "./BorrowBook";


const Borrow = () => {
    const borrow =useLoaderData()
    console.log(borrow)
    return (
        <div>
            {borrow?.map(book=><BorrowBook key={book._id} book={book}></BorrowBook>)}
        </div>
    );
};

export default Borrow;