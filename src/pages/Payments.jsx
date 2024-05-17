// PaymentsPage.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PaymentItem = ({ payment }) => {
  const statusColor = () => {
    return payment.status === "Paid"
      ? "bg-green-500 text-white px-3 rounded-md"
      : "bg-red-500 text-white px-2 rounded-md";
  };
  return (
    <div className="flex justify-between border-b py-2 ">
      <span>{payment.date}</span>
      <span>{payment.tenant}</span>
      <span>${payment.amount}</span>
      <span className={statusColor()}>{payment.status}</span>
    </div>
  );
};

PaymentItem.propTypes = {
  payment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tenant: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const PaymentsList = ({ payments }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Payments</h2>
    <div className="flex justify-between items-center border-b font-bold py-2">
      <span>Date</span>
      <span>Tenant</span>
      <span>Amount</span>
      <span>Status</span>
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
      tenant: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Payments = () => {
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
        tenant: "Alice Johnson",
        amount: 800,
        date: "2023-09-18",
        status: "Paid",
      },
      {
        id: 4,
        tenant: "Bob Williams",
        amount: 2000,
        date: "2023-09-17",
        status: "Pending",
      },
      {
        id: 5,
        tenant: "Eva Davis",
        amount: 1300,
        date: "2023-09-16",
        status: "Paid",
      },
      {
        id: 6,
        tenant: "Mike Brown",
        amount: 900,
        date: "2023-09-15",
        status: "Pending",
      },
      // Add more payments as needed
    ];
    setPayments(demoPayments);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md ">
      <PaymentsList payments={payments} />
    </div>
  );
};

export default Payments;
