import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = useSelector((state) => state.userSlice.user);
  return (
    <nav className="bg-gray-800 flex flex-col justify-between h-screen w-[220px]">
      <div className="max-w-xs mx-auto px-4 py-6">
        {/* Your logo or brand */}
        <span className="text-white font-bold flex justify-center">
          ChatApp
        </span>
        {/* Navigation links */}
        <div className="mt-6 cursor-pointer">
          <Link to="/">
            <li className="text-gray-300 px-3 py-2 rounded-md text-sm text-center font-medium mb-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white list-none">
              Home
            </li>
          </Link>
         <Link to="/chat">
         <li className="text-gray-300 px-3 py-2 rounded-md text-sm text-center font-medium mb-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white list-none">
            Chat
          </li>
         </Link>
          <Link to="#">
          <li className="text-gray-300 px-3 py-2 rounded-md text-sm text-center font-medium mb-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white list-none">
            Group
          </li>
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
      <div>
        <Link className=" cursor-pointer" to="/profile">
          <div className="flex gap-4 my-4 p-4">
            <img className="w-10 h-10 rounded-full" src="" alt="" />
            <div className="flex flex-col items-start  w-full">
              <h3 className=" text-white font-secondary font-semibold text-[14px]">
               arif
              </h3>
              <h4 className="text-white font-secondary font-semibold text-[14px]">
                Edit Profile
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
