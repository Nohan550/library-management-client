import errorSvg from "/undraw_page_not_found.svg";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex gap-10 text-center items-center justify-center h-[800px] flex-col">
      <img src={errorSvg}  alt="" />


      <p className="text-6xl text-sky-400 font-semibold">
        <i>{error.statusText}</i>
      </p>
     <Link><button className="bg-sky-500 btn btn-wide text-white">HOME</button></Link>
    </div>
  );
};

export default ErrorPage;
