const getTransactionCountsByMonth = (transactions) => {
  
  if (!Array.isArray(transactions)) {
    throw new Error("Invalid input: transactions must be an array");
  }
  const transactionCount = {};
  transactions.forEach(({ month, amount }) => {
    if (typeof month !== 'string' || typeof amount !== 'number') {
      throw new Error("Invalid transaction format");
    }
    transactionCount[month] = (transactionCount[month] || 0) + 1;
  });
  return transactionCount;
};

export default getTransactionCountsByMonth