const analyzeTransactionCount = (transactionCount) => {
  const result = {};
  for (const month in transactionCount) {
    const count = transactionCount[month];
    if (count > 1) {
      result[month] = "Has more than 1 transaction in this month";
    } else if (count === 1) {
      result[month] = "Has 1 transaction in this month";
    } else {
      result[month] = "Has no transactions in this month";
    }
  }

  return result;
};

export default analyzeTransactionCount