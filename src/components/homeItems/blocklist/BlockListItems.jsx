import { djvImg } from "../../../assets/image"


const BlockListItems = () => {
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
        <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500 hover:from-pink-500 hover:via-red-500 hover:to-yellow-400 text-white font-bold py-2 px-4 rounded">Unblock</button>
      </div>
    </div>
  )
}

export default BlockListItems
