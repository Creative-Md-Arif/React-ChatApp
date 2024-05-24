import { djvImg } from "../../../assets/image"
import { IoMdMore } from "react-icons/io";

const FriendItems = () => {
  return (
    <div className="flex gap-4 my-4 p-4">
      <div>
        <img className="w-10 h-10 rounded-full" src={djvImg} alt="" />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col ">
          <h2 className=" text-white font-secondary font-semibold text-[14px]">
            Savannah Nguyen
          </h2>
          <p className=" text-white font-secondary font-normal text-[12px]">
            Hate You.....
          </p>
        </div>
        <p className="text-white text-xs"><IoMdMore/></p>
      </div>
    </div>
  )
}

export default FriendItems
