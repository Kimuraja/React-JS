import './CustomerTransactions.css'

const CustomerTransactions = ({ transactions }) => {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return <p>No transactions available.</p>;
  }

  const sortedTransactionsByDate = transactions.sort((a, b) => new Date(b.month) - new Date(a.month));
  return (
    <div className='transaction'>
      <h1>User Transactions</h1>
      <ol>
        {sortedTransactionsByDate.map((transaction, index) => (
          <li key={index}>
            {transaction.month}: {transaction.amount}$
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CustomerTransactions;
