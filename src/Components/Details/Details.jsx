import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment/moment";
import toast from "react-hot-toast";

const Details = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();


  const handleBorrow = (e) => {
    const curDate = moment().format("YYYY-M-D");   
    const name = e.Name;
    const email = e.Email;
    const returnDate = e.Date;
    console.log(name, email,curDate, returnDate);
    const borrowBook = { name, email,curDate, returnDate,book };

    axios.post(`http://localhost:5500/borrowedBooks`,borrowBook)
    .then(res=>{console.log(res)
         if(res.data.insertedId){
           toast.success("Borrowed")
         }    
    })
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
            <label htmlFor="my_modal_7" className="btn btn-info text-white">
              Borrow
            </label>

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
