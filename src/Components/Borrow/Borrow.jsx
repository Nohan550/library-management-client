import { useLoaderData } from "react-router-dom";
import BorrowBook from "./BorrowBook";


const Borrow = () => {
    const borrow =useLoaderData()
   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 gap-6 bg-sky-50">
            {borrow?.map(books=><BorrowBook key={books._id} books={books}></BorrowBook>)}
        </div>
    );
};

export default Borrow;