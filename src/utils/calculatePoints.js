const calculatePoints = (amount) => {
  let points = 0;

  if (amount <= 50) { return 0 };
  if (amount > 50 && amount <= 100) { points += (amount - 50); }
  if (amount > 100) { points += ((amount - 100) * 2) + 50;  }

  return points;
};

export default calculatePoints;
