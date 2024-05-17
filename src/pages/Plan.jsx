

import { useState } from 'react';

const Plan = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Basic Plan', features: ['Property Listings', 'Tenant Management'], price: '$99/month' },
    { id: 2, name: 'Pro Plan', features: ['Advanced Reporting', 'Maintenance Requests'], price: '$199/month' },
    // Add more plans as needed
  ]);

  const [newPlan, setNewPlan] = useState({ name: '', features: [], price: '' });

  const handleAddPlan = () => {
    // Assuming you have some logic for generating a unique ID
    const addedPlan = { ...newPlan, id: plans.length + 1 };

    // Add the new plan to the list
    setPlans([...plans, addedPlan]);

    // Clear the form
    setNewPlan({ name: '', features: [], price: '' });
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <header className="text-3xl font-bold mb-4">Property Management Plans</header>

      <section>
        <h2 className="text-2xl mb-2">Current Plans</h2>
        <ul className="list-disc pl-5">
          {plans.map((plan) => (
            <li key={plan.id} className="mb-2">
              <strong>{plan.name}</strong>
              <ul className="list-disc pl-5">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className="text-gray-600">{plan.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl mb-2">Add New Plan</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddPlan(); }}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Plan Name:</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={newPlan.name}
              onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Features:</label>
            <textarea
              className="mt-1 p-2 border rounded-md w-full"
              value={newPlan.features.join('\n')}
              onChange={(e) => setNewPlan({ ...newPlan, features: e.target.value.split('\n') })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Price:</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={newPlan.price}
              onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Plan
          </button>
        </form>
      </section>
    </div>
  );
};

export default Plan;
