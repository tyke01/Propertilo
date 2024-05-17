import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const RoomComponent = ({ room }) => {
  const getStatusColor = () => {
    return room.status === "occupied"
      ? "bg-green-500 text-white px-3 rounded-md"
      : "bg-red-500 text-white px-2 rounded-md";
  };

  return (
    <div className="flex  justify-between items-center mt-2">
      <span>{room.occupant}</span>
      <span>{room.roomNumber}</span>
      <span className={getStatusColor()}>{room.status}</span>
    </div>
  );
};

RoomComponent.propTypes = {
  room: PropTypes.shape({
    occupant: PropTypes.string,
    roomNumber: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};

const RoomList = ({ rooms }) => (
  <div>
    <div className="flex items-center justify-between text-gray-500 mb-2">
      <span>Room: </span>
      <span>Room Number: </span>
      <span>Status: </span>
    </div>
    {rooms.map((room) => (
      <RoomComponent key={room.id} room={room}/>
    ))}
  </div>
);

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      occupant: PropTypes.string,
      roomNumber: PropTypes.number,
      status: PropTypes.string,
    })
  ).isRequired,
};

const RoomContainer = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const demoRooms = [
      {
        id: 1,
        occupant: "John Doe",
        roomNumber: 1,
        status: "occupied",
      },
      {
        id: 2,
        occupant: "John Bob",
        roomNumber: 3,
        status: "occupied",
      },
      {
        id: 3,
        occupant: "empty",
        roomNumber: 2,
        status: "empty",
      },
      {
        id: 4,
        occupant: "culid bone",
        roomNumber: 4,
        status: "occupied",
      },
      {
        id: 5,
        occupant: "one cat",
        roomNumber: 5,
        status: "occupied",
      },
      {
        id: 6,
        occupant: "empty",
        roomNumber: 6,
        status: "empty",
      },
      {
        id: 7,
        occupant: "two cow",
        roomNumber: 7,
        status: "occupied",
      },
      {
        id: 8,
        occupant: "open dog",
        roomNumber: 8,
        status: "occupied",
      },
      // * Add more rooms as needed
    ];
    setRooms(demoRooms);
  }, []);

  return <RoomList rooms={rooms} />;
};

export default RoomContainer;
