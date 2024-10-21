import useGetTransactions from "../../hooks/useGetTransactions";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import CustomerOverview from "../CustomerOverview/CustomerOverview";
import { useState } from "react";

const Dashboard = () => {
  const { customers, loading, error } = useGetTransactions();
  const [selectedCustomerID, setSelectedCustomerID] = useState('');

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  
  const filteredCustomer = customers.find(customer => customer.customerID === parseInt(selectedCustomerID));

  const changeSelectedCustomer = (event) => {
    setSelectedCustomerID(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__textarea">
        <h1 className='header'>User Rewards Dashboard</h1>
        <select onChange={changeSelectedCustomer} value={selectedCustomerID}>
          <option>Select a customer</option>
          {customers.map(data => (
            <option key={data.customerID} value={data.customerID}>
              {data.name}
            </option>
          ))}
        </select>
        {filteredCustomer && <CustomerOverview customers={[filteredCustomer]} />}
      </div>
    </div>
  );
};

export default Dashboard;
