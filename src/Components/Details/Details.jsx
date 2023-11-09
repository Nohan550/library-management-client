import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment/moment";
import toast from "react-hot-toast";

const Details = () => {
  const book = useLoaderData();
  const { image, author, rating, category, description, quantity } = book;
  const { user } = useContext(AuthContext);
  const [borrowed, setBorrowed] = useState();
  const navigate=useNavigate()
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    axios
      .get(
        `https://library-management-server-six.vercel.app/borrowedBooks/${book.name}`
      )
      .then((res) => {
        if (res.data) {
          setBorrowed(res.data.book_name);
          return;
        } else {
          setBorrowed("book");
        }
      });
  }, [book.name]);

  const handleBorrow = (e) => {
    const curDate = moment().format("YYYY-M-D");
    const name = e.Name;
    const email = e.Email;
    const returnDate = e.Date;
    // console.log(name, email, curDate, returnDate);
    const borrowBook = {
      name,
      email,
      curDate,
      returnDate,
      book_name: book.name,
      image,
      author,
      rating,
      category,
      description,
      quantity
    };

    if (book.name == borrowed) {
      toast.error("Already Borrowed", {
        style: {
          border: "2px solid #87CEEB",
          padding: "18px",
          color: "#29B6F6",
        },
        iconTheme: {
          primary: "#87CEEB",
          secondary: "#FFFAEE",
        },
      });

      return;
    } else {
      axios
        .post(
          `https://library-management-server-six.vercel.app/borrowedBooks`,
          borrowBook
        )
        .then((res) => {
          console.log(res);
          if (res.data.insertedId) {
            toast.success("Borrowed");
            axios
              .patch(`https://library-management-server-six.vercel.app/category/book/${book.name}`, {
                quantity: quantity - 1,
              })
              .then((res) =>{ console.log(res)
              navigate(`/category/${category}`)});
          }
        });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${book.image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-y-16">
          <h1 className="mb-5 text-5xl font-bold">{book.name}</h1>
          <p className="mb-5">{book.description}</p>
          <div className=" space-x-2">
            {/* <button className="btn btn-info text-white">Borrow</button> */}
            {book.quantity > 0 ? (
              <label htmlFor="my_modal_7" className="btn btn-info text-white ">
                Borrow
              </label>
            ) : (
              <button className="btn btn-error text-white disabled">
                Borrow
              </button>
            )}

            <Link to="https://books.google.com.bd/books?uid=110416124159172258773&hl=en">
              <button className="btn text-white btn-info">Read</button>
            </Link>
          </div>
        </div>

        {/* modal form */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />

        <div className="card modal text-black  w-full mx-auto  h-[550px] lg:h-[700px] shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(handleBorrow)}
            className="card-body modal-box"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("Name")}
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("Email")}
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Return Date</span>
              </label>
              <input
                type="date"
                {...register("Date")}
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info text-white text-xl">
                Submit
              </button>
            </div>
          </form>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default Details;
