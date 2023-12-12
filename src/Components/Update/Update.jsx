import { useForm } from "react-hook-form";
import update from "/update.svg";
import { useLoaderData } from "react-router-dom";

import toast from "react-hot-toast";
import useAxios from "../../HOOKS/useAxios";

const Update = () => {
  const axios = useAxios();
  const { register, handleSubmit } = useForm();
  const updateB = useLoaderData();

  const handleUpdate = (e) => {
    const name = e.Name;
    const image = e.URL;

    const author = e.Author;
    const category = e.Category;
    const rating = e.Rating;
    const upBook = { name, image, author, category, rating };
    axios
      .patch(
        `https://library-management-server-six.vercel.app/category/books/${updateB.name}`,
        upBook
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success(`${name} Updated`, {
            style: {
              border: "1px solid #87CEEB",
              padding: "16px",
              color: "#87CEEB0",
            },
            iconTheme: {
              primary: "#87CEEB",
              secondary: "#FFFAEE",
            },
          });
        }
      });
  };
  return (
    <div className="hero lg:h-[800px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img className="w-96 lg:w-full" src={update} alt="" />
        </div>
        <div className="card w-full lg:w-1/2  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleUpdate)} className="card-body">
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">ImageURL</span>
                </label>
                <input
                  {...register("URL")}
                  type="url"
                  placeholder="URL"
                  className="input input-bordered"
                  defaultValue={updateB.image}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("Name")}
                  defaultValue={updateB.name}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label ">
                  <span className="label-text ">Author</span>
                </label>
                <input
                  {...register("Author")}
                  defaultValue={updateB.author}
                  type="text"
                  placeholder="Author"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>

                <select
                  className="input input-bordered"
                  {...register("Category")}
                  defaultValue={updateB.category}
                  placeholder="Category"
                >
                  <option>Novel</option>
                  <option> Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  placeholder="Rating(1-5)"
                  defaultValue={updateB.rating}
                  {...register("Rating")}
                  className="input input-bordered"
                  type=""
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
