import { djvImg } from "../../../assets/image"


const FriendRequestItems = () => {
  return (
    <div className="flex items-center gap-4 my-4 p-4">
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
       <div className=" flex flex-col gap-4">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded">Confirm</button>
        <button className="bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 hover:from-green-500 hover:via-teal-500 hover:to-blue-400 text-white font-bold py-2 px-4 rounded">Cancel</button>
       </div>
      </div>
    </div>
  )
}

export default FriendRequestItems
