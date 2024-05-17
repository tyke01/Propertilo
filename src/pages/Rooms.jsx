import RoomContainer from "./components/RoomComponent"

const Rooms = () => {
  return (
    <div  className="p-5 mx-10 my-20 rounded-lg overflow-x-hidden flex flex-col items-center justify-center ">
      
      <div className="relative  p-3 rounded-md bg-white overflow-hidden">
        <span className="bg-button-bg w-[6px] h-full absolute left-0 top-0"></span>
        <p className="text-2xl font-semibold">
          Wecome to your rooms
        </p>
        <p>
          The data is for the apartments you own. click <a className="text-link-text" href="">here</a> to add new rooms.
        </p>
      </div>

      <div className="w-full">
        <RoomContainer />
      </div>

    </div>
  )
}

export default Rooms