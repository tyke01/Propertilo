import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PaymentItem = ({ payment }) => {
  const getStatusColor = () => {
    return payment.status === "Paid"
      ? "bg-green-500 text-white px-3 rounded-md"
      : "bg-red-500 text-white px-2 rounded-md";
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mt-2">
        <span>{payment.tenant}</span>
        <span>{payment.date}</span>
        <span>${payment.amount}</span>
        <span className={getStatusColor()}>{payment.status}</span>
      </div>
    </div>
  );
};

PaymentItem.propTypes = {
  payment: PropTypes.shape({
    date: PropTypes.string.isRequired,
    tenant: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const PaymentsList = ({ payments }) => (
  <div>
    <h2>payed</h2>
    <div className="flex items-center justify-between text-gray-500 text-center">
      <span className="">Tenant:</span>

      <span className="">Date:</span>

      <span className="">Amount:</span>

      <span className="">Status:</span>
    </div>
    {payments.map((payment) => (
      <PaymentItem key={payment.id} payment={payment} />
    ))}
  </div>
);

PaymentsList.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      tenant: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const PaymentsContainer = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // For demonstration purposes, hardcoding payment data
    const demoPayments = [
      {
        id: 1,
        tenant: "John Doe",
        amount: 1200,
        date: "2023-09-20",
        status: "Paid",
      },
      {
        id: 2,
        tenant: "Jane Smith",
        amount: 1500,
        date: "2023-09-19",
        status: "Pending",
      },
      {
        id: 3,
        tenant: "king mil",
        amount: 4000,
        date: "2023-09-14",
        status: "Paid",
      },
      {
        id: 4,
        tenant: "java script",
        amount: 2500,
        date: "2023-09-22",
        status: "Paid",
      },
      // *Add more payments as needed
    ];
    setPayments(demoPayments);
  }, []);

  return <PaymentsList payments={payments} />;
};

export default PaymentsContainer;
