import useGetTransactions from "../hooks/useGetTransactions";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import CustomerOverview from "../Customer/CustomerOverview";
import { useState } from "react";

const Dashboard = () => {
  const { customers, loading, error } = useGetTransactions();
  const [selectedCustomer, setSelectedCustomer] = useState('');

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const filteredCustomer = customers.find(customer => customer.name === selectedCustomer);

  const changeSelectedCustomer = (event) => {
    setSelectedCustomer(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="dashboard__textarea">
        <h1 className='header'>User Rewards Dashboard</h1>
        <select onChange={changeSelectedCustomer} value={selectedCustomer}>
          <option>Select a customer</option>
          {customers.map(data => (
            <option key={data.name} value={data.name}>
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
