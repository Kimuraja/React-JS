import CustomerReward from './CustomerReward';
import './CustomerOverview.css'
import CustomerTransactions from './CustomerTransactions';

const CustomerOverview = ({ customers }) => {
    return (
        <div className='customers'>
            {customers.map((customer) => (
                <div key={customer.customerID} className='customers-textarea'>
                    <CustomerReward customer={customer} />
                    <CustomerTransactions transactions={customer.transactions} />
                </div>
            ))}
        </div>
    );
};

export default CustomerOverview;
