import { useLoaderData } from "react-router-dom";
import AllDetails from "./AllDetails";


const AllBooks = () => {

    const all = useLoaderData()
    console.log(all)
    return (
      <div>
        <div className="text-right px-16">
        <button className="btn btn-info text-white text-lg font-bold btn-wide ">Filter</button>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-8">
            {all.map(books=><AllDetails key={books._id} books={books}></AllDetails>)}
        </div>
      </div>
    );
};

export default AllBooks;