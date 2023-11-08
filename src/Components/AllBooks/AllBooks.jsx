import { useLoaderData } from "react-router-dom";
import AllDetails from "./AllDetails";


const AllBooks = () => {

    const all = useLoaderData()
  
    return (
      <div>
        <div className="text-right bg-sky-100 pt-5 px-16">
        <button className="btn btn-info text-white text-lg font-bold btn-wide ">Filter</button>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 bg-sky-100 py-8">
            {all.map(books=><AllDetails key={books._id} books={books}></AllDetails>)}
        </div>
      </div>
    );
};

export default AllBooks;