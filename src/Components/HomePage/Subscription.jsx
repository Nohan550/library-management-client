import toast from "react-hot-toast";
import { PiBookOpenDuotone } from "react-icons/pi";

const Subscription = () => {
    
    const handleSubscribe = (e) => {
        e.preventDefault()
        if(e.target.email.value){
            toast.success("SuccessFully Subscribed")
        }
       
    }
  return (
    <div className="bg-sky-300 text-white h-96 flex flex-col gap-8 items-center justify-center">
      <div className=" text-center space-y-2">
        <h1 className=" text-3xl font-semibold">Subscribe </h1>
        <p className="text-xl font-medium">
         To Get Advantages
        </p>
      </div>
      <div className="join">
       <form onSubmit={handleSubscribe}>
       <input className="input text-black input-bordered join-item" name="email" placeholder="Email" />
        <button  className="btn join-item bg-sky-400 text-white rounded-r-full">
          Subscribe
        </button>
       </form>
      
      </div>
      <div className="btn btn-ghost  flex  items-center font-semibold">
          <h1 className=" text-5xl text-sky-500">
            <PiBookOpenDuotone></PiBookOpenDuotone>
          </h1>
          <h1 className="text-4xl">
            <span className="text-sky-500">LI</span>BRA
          </h1>
        </div>
    </div>
  );
};

export default Subscription;
