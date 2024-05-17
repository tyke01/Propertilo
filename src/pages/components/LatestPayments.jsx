import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PaymentsContainer from "./PaymentItem";

const LatestPayments = () => {
  const items = Array.from({ length: 10 }, (_, index) => index + 1);



  return (
    <div className="w-full md:w-[450px] flex flex-col items-center ">
      <div className="flex justify-between p-3  border-b w-full">
        <p>Latest payments</p>
        <div className="flex gap-3">
          <AiOutlineMinus />
          <AiOutlinePlus />
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex justify-between items-center w-full py-2 px-2">
        <div className="flex gap-2">
          <p>show</p>
          <p className="border border-gray-400 rounded-md">
            <select name="selectItems" id="selectItems" className="outline-none">
              {items.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </p>
            <p>entries</p>
        </div>

        <div className="flex items-center gap-2">
          <p>search</p>
          <input type="text" className="bg-main-bg border border-gray-400 rounded-md"/>
        </div>

      </div>

      {/* body */}
      <div className="w-full py-2 px-3">
        {/* <PaymentItem payments={payments}/> */}
        <PaymentsContainer />
      </div>

    </div>
  );
};

export default LatestPayments;
