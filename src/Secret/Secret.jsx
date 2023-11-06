import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loader from "/oading.svg";

const Secret = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return (
      <div className="flex flex-col items-center justify-center py-5">
        <img src={loader}></img>
        <h1 className="text-4xl font-medium text-sky-400">Loading...........</h1>
      </div>
    );
  }
  if(user){
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Secret;
