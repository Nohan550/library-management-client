import { useLoaderData } from "react-router-dom";
import BorrowBook from "./BorrowBook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Borrow = () => {
   
    const [borrow,setBorrow]=useState([])
    const {user}=useContext(AuthContext)
  
useEffect(()=>{
    axios.get(`https://library-management-server-six.vercel.app/borrowedBooks?email=${user?.email}`).then(res=>setBorrow(res.data))
},[user?.email])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 gap-6 bg-sky-50">
            {borrow?.map(books=><BorrowBook key={books._id} books={books}></BorrowBook>)}
        </div>
    );
};

export default Borrow;