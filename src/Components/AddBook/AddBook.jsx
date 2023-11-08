import { useForm } from "react-hook-form";
import add from "/add.svg";
import axios from "axios";
import toast from "react-hot-toast";

const AddBook = () => {
  const { register, handleSubmit } = useForm();

  const handleAdd = (e) => {
    const name = e.Name;
    const image = e.URL;
    const quantity = e.Quantity;
    const author = e.Author;
    const category = e.Category;
    const rating = e.Rating;
    const description = e.Description;
    console.log(name, image, quantity, author,category, rating, description);
    const book = {name,image,quantity,author,category,rating,description}
    axios.post('http://localhost:5500/category/books',book).then(res=>{
      if(res.data.insertedId){
        toast.success('Added Successfully')
      }
    })
  };
  return (
    <div className="hero lg:h-[800px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img className="w-96 lg:w-full" src={add} alt="" />
        </div>
        <div className="card  w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleAdd)} className="card-body">
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
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("Name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label ">
                  <span className="label-text ">Quantity</span>
                </label>
                <input
                  {...register("Quantity")}
                  type="number"
                  placeholder="Quantity"
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
                  {...register("Rating")}
                  className="input input-bordered"
                  type=""
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  {...register("Description")}
                  cols="30"
                  rows="10"
                  className="input input-bordered "
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white font-medium">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
