import CalculatePoints from "./calculatePoints";
import getLastThreeMonts from "./getLastThreeMonths";

const calculateRewardPointsFromTransactions = (transactions) => {
  const monthlyRewardPoints = {};
  let totalPoints = 0;

  const lastThreeMonths = getLastThreeMonts(transactions);

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

export default calculateRewardPointsFromTransactions;
