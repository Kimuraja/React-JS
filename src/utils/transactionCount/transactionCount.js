const transactionCount = (transactions) => {
  if (!Array.isArray(transactions)) {
    throw new Error("Invalid input: transactions should be an array")
  }

  if (transactions.length >= 3) {
    return 'Has 3 or more transactions'
  } else if (transactions.length < 3 && transactions.length > 0) {
    return 'Less than 3 transactions' 
  } else if (transactions.length === 0) {
    return 'No transaction has been made'
  }
}

export default transactionCount