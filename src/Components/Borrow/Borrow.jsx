import BorrowBook from "./BorrowBook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import toast from "react-hot-toast";
import useAxios from "../../HOOKS/useAxios";

const Borrow = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5500/borrowedBooks?email=${user?.email}`)
      .then((res) => setBorrowed(res.data));
  }, [user?.email]);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 py-8 gap-6 bg-sky-50">
      {borrowed?.map((books) => (
        <div key={books._id}>
          <BorrowBook books={books}></BorrowBook>
          <div
            className="relative -top-20 
            left-72 md:left-64 lg:left-80
            w-fit bg-base-100 "
          >
            <button
              onClick={() => {
                {
                  axios
                    .delete(`http://localhost:5500/borrowedBooks/${books._id}`)
                    .then((res) => {
                      if (res.data.deletedCount > 0) {
                        toast.success("Returned");

                        axios
                          .patch(
                            `http://localhost:5500/category/book/${books.book_name}`,
                            {
                              quantity: books.quantity + 1,
                            }
                          )
                          .then((res) => {
                            const remaining = borrowed.filter(
                              (borrow) => borrow._id !== books._id
                            );
                            setBorrowed(remaining);
                          });
                      }
                    });
                }
              }}
              className="btn btn-info text-white"
            >
              Return
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Borrow;
