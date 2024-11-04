import CalculatePoints from "./calculatePoints";
import getLastThreeMonths from "./getLastThreeMonths";

const calculateRewardPointsFromTransactions = (transactions) => {
  const monthlyRewardPoints = {};
  let totalPoints = 0;
  
  const lastThreeMonths = getLastThreeMonths(transactions);

  transactions.forEach(({ month, amount }) => {
    if (lastThreeMonths.includes(month)) {
      if (typeof amount !== 'number' || amount < 0) {
        return;
      }
      const points = CalculatePoints(amount);

      if (!monthlyRewardPoints[month]) {
        monthlyRewardPoints[month] = 0;
      }

      monthlyRewardPoints[month] += points;
      totalPoints += points;
    }

    if (!(month in monthlyRewardPoints)) {
      monthlyRewardPoints[month] = 0
    } 
  });

  return { monthlyRewardPoints, totalPoints };
};

export default calculateRewardPointsFromTransactions;
