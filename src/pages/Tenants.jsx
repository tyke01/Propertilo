// TenantsPage.jsx

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TenantItem = ({ tenant }) => {

  const statusColor = () => {
    return tenant.status === "Active" ? "bg-green-500 text-white px-3 rounded-md" : "bg-red-500 text-white px-2 rounded-md";
  }
 return ( 
 <div className="flex justify-between border-b py-2">
    <span>{tenant.name}</span>
    <span>{tenant.unit}</span>
    <span>{tenant.moveInDate}</span>
    <span className={statusColor()}>{tenant.status}</span>
  </div>)
};

TenantItem.propTypes = {
  tenant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
    moveInDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const TenantsList = ({ tenants }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Tenants</h2>
    <div className="flex justify-between items-center border-b font-bold py-2">
      <span>Name</span>
      <span>Unit</span>
      <span>Move-In Date</span>
      <span>Status</span>
    </div>
    {tenants.map((tenant) => (
      <TenantItem key={tenant.id} tenant={tenant} />
    ))}
  </div>
);

TenantsList.propTypes = {
  tenants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      moveInDate: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Tenants = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // For demonstration purposes, hardcoding tenant data
    const demoTenants = [
      { id: 1, name: 'John Doe', unit: 'A101', moveInDate: '2023-05-10', status: 'Active' },
      { id: 2, name: 'Jane Smith', unit: 'B202', moveInDate: '2023-06-15', status: 'Inactive' },
      { id: 3, name: 'Alice Johnson', unit: 'C303', moveInDate: '2023-07-20', status: 'Active' },
      { id: 4, name: 'Bob Williams', unit: 'D404', moveInDate: '2023-08-25', status: 'Inactive' },
      { id: 5, name: 'Eva Davis', unit: 'E505', moveInDate: '2023-09-01', status: 'Active' },
      { id: 6, name: 'Mike Brown', unit: 'F606', moveInDate: '2023-10-05', status: 'Inactive' },
      // Add more tenants as needed
    ];
    setTenants(demoTenants);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <TenantsList tenants={tenants} />
    </div>
  );
};

export default Tenants;

