import { IoMdMore } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import FriendItems from "./FriendItems";

const Friends = () => {
  return (
    <div className="w-1/3 h-[505px] bg-gray-800 rounded-lg shadow-lg">
      <div className="">
        <div className="flex justify-between items-center bg-gray-700 p-4 rounded-t-lg rounded-r-lg">
          <h1 className=" text-xl font-primary font-semibold text-white">
          Friends
          </h1>
          <IoMdMore className="text-white text-xl" />
        </div>
        <div className=" bg-gray-700  w-full  flex items-center border-b-[1px] p-4">
          <FaSearch className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 w-full outline-none pl-4 text-white placeholder:text-white"
          />
        </div>
      </div>
      <div className="">
       <FriendItems/>
       <FriendItems/>

      </div>
    </div>
  )
}

export default Friends
