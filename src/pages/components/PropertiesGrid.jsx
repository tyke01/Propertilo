import { GrLocation } from "react-icons/gr";
import "../../App.css";

const PropertiesGrid = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3">
      {/* card */}
      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-1.jpg" alt="property 1" />
        </div>
        <div>
          <p>5 bedroom mansionette</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">mars, pseuchamore</p>
          </div>
          <p>
            $4000<span className="text-xs">/month</span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-2.jpg" alt="property 1" />
        </div>
        <div>
          <p>4 bedroom sun</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">mars, crater</p>
          </div>
          <p>
            $500,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-3.jpg" alt="property 1" />
        </div>
        <div>
          <p>prestige reality blue </p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">Jupiter red dot</p>
          </div>
          <p>
            $800,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-4.jpg" alt="property 1" />
        </div>
        <div>
          <p>2 bedroom economy</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">sartun, ring</p>
          </div>
          <p>
            $1250<span className="text-xs">/month</span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-5.jpg" alt="property 1" />
        </div>
        <div>
          <p>4 bedroom ensuite</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">sartun, ring</p>
          </div>
          <p>
            $750,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-6.jpg" alt="property 1" />
        </div>
        <div>
          <p>3 bedroom vintage</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">pluto, far</p>
          </div>
          <p>
            $400,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-8.jpg" alt="property 1" />
        </div>
        <div>
          <p>highlight twin</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">andromeda, galaxy</p>
          </div>
          <p>
            $1,000,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-9.jpg" alt="property 1" />
        </div>
        <div>
          <p>2 bedroom apartment</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">venus, sulphur</p>
          </div>
          <p>
            $900<span className="text-xs">/month</span>
          </p>
        </div>
      </div>

      <div className=" bg-white p-3 rounded-md card">
        <div className="w-[10rem]">
          <img src="house-10.jpg" alt="property 1" />
        </div>
        <div>
          <p>6 bedroom palace</p>
          <div className="flex items-center text-sm gap-2">
            <span>
              <GrLocation />
            </span>
            <p className="text-gray-400">Bermuda, triangle</p>
          </div>
          <p>
            $3,500,000<span className="text-xs"></span>
          </p>
        </div>
      </div>

      {/* card */}
    </div>
  );
};

export default PropertiesGrid;
