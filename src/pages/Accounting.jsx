// AccountingPage.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TransactionItem = ({ transaction }) => {
  const StatusColor = () => {
    return transaction.type === "Income"
      ? "bg-green-500 text-white px-3 rounded-md"
      : "bg-red-500 text-white px-2 rounded-md";
  };
  return (
    <div className="flex justify-between border-b py-2">
      <span>{transaction.date}</span>
      <span>{transaction.description}</span>
      <span>${transaction.amount}</span>
      <span className={StatusColor()}>{transaction.type}</span>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

const TransactionsList = ({ transactions }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Transactions</h2>
    <div className="flex justify-between items-center border-b font-bold py-2">
      <span>Date</span>
      <span>Description</span>
      <span>Amount</span>
      <span>Type</span>
    </div>
    {transactions.map((transaction) => (
      <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
  </div>
);

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Accounting = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // For demonstration purposes, hardcoding transaction data
    const demoTransactions = [
      {
        id: 1,
        date: "2023-09-10",
        description: "Rent Payment",
        amount: 1200,
        type: "Income",
      },
      {
        id: 2,
        date: "2023-09-15",
        description: "Maintenance Cost",
        amount: 150,
        type: "Expense",
      },
      {
        id: 3,
        date: "2023-09-20",
        description: "Utility Bill",
        amount: 100,
        type: "Expense",
      },
      // Add more transactions as needed
    ];
    setTransactions(demoTransactions);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <TransactionsList transactions={transactions} />
    </div>
  );
};

export default Accounting;
