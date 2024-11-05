import CalculatePoints from "./calculatePoints";

const calculateRewardPointsFromTransactions = (transactions) => {
  const monthlyRewardPoints = {};
  let totalPoints = 0;
  

  transactions.forEach(({ month, amount }) => {
      if (typeof amount !== 'number' || amount < 0) {
        return;
      }

      let points = CalculatePoints(amount);

      if (!monthlyRewardPoints[month]) {
        monthlyRewardPoints[month] = 0;
      }

      monthlyRewardPoints[month] += points;
      totalPoints += points;
  });

  transactions.forEach(({month}) => {
    if (monthlyRewardPoints[month] === 0 || monthlyRewardPoints[month] === undefined) {
      monthlyRewardPoints[month] = "No reward for this transaction month";
    }
  });

  return { monthlyRewardPoints, totalPoints};
};

export default calculateRewardPointsFromTransactions;
