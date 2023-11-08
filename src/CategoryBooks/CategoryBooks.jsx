import { useLoaderData } from "react-router-dom";
import Books from "./Books";


const CategoryBooks = () => {
    
    const books =useLoaderData()
    console.log(books)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-6 bg-sky-300">
              {books.map(catBooks=><Books key={catBooks._id} catBooks={catBooks}></Books>)}
        </div>
    );
};

export default CategoryBooks;