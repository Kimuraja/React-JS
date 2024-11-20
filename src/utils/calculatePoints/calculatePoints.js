const calculatePoints = (amount) => {
  if ( typeof amount !== 'number' || amount < 0 ) {
    throw new Error('Invalid input: amount must be a positive number')
  }

  let points = 0;

  if (amount <= 50) { return 0 };
  if (amount > 50 && amount <= 100) { points += (amount - 50); }
  if (amount > 100) { points += ((amount - 100) * 2) + 50;  }

  return points;
};

export default calculatePoints;
