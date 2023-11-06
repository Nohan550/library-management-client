import { Link, useNavigate } from "react-router-dom";
import registerImg from "/register.svg";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase/firabase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm();

  const { registration } = useContext(AuthContext);

  const handleRegister = (e) => {
    const name = e.name;
    const email = e.email;
    const pass = e.password;

    if (pass.length < 6) {
      toast.error("Password Must be minimum 6 characters");
      return;
    } else if (!/[A-Z]/.test(pass)) {
      toast.error("Password must contain one uppercase");
      return;
    } else if (!/[!#$%&? "<<]/.test(pass)) {
      toast.error("Add one special character");
      return;
    }

    //    console.log(email,pass);

    const toastLoad = toast.loading("Registering..");
    registration(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const authUser = auth.currentUser;
        navigate("/");
        toast.success("Registered", { id: toastLoad });
        return updateProfile(authUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img src={registerImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
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
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass?'text' : 'password'}
                {...register("password")}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[250px] right-12"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <h1 className="font-medium">
                  Have Registered?{" "}
                  <Link to="/login" className="text-sky-500">
                    Login
                  </Link>
                </h1>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
