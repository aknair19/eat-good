import { useRouteError,Link } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center text-red-600 flex-col text-3xl justify-center min-h-screen">
      <h1 className=''>Oops! Something went wrong </h1>
      <p>
        {error.status}: {error.statusText}
      </p>

      <Link to="/">
        <button className="text-white font-semibold bg-red-600 p-2 px-2 mt-2">
         Main Menu
        </button>
      </Link>
    </div>
  );
};
export default NotFoundPage;
