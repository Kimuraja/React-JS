import CalculatePoints from "./CalculatePoints";

const CalculateRewardPointsFromTransactions = (transactions) => {
  const monthlyRewardPoints = {};
  let totalPoints = 0;
  
  const getLastThreeMonths = (transactionRecords) => {
    const transactionMonths = new Set(transactionRecords.map(({ month }) => month));
    const sortedMonths = Array.from(transactionMonths).sort((a, b) => new Date(b) - new Date(a));
    return sortedMonths.slice(0, 3);
  };

  const lastThreeMonths = getLastThreeMonths(transactions);

  transactions.forEach(({ month, amount }) => {
    if (lastThreeMonths.includes(month)) {
      const points = CalculatePoints(amount);

      if (!monthlyRewardPoints[month]) {
        monthlyRewardPoints[month] = 0;
      }

      monthlyRewardPoints[month] += points;
      totalPoints += points;
    }
  });

  return { monthlyRewardPoints, totalPoints };
};

export default CalculateRewardPointsFromTransactions;
