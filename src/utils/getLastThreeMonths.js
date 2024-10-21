const getLastThreeMonths = (transactionRecords) => {
  const transactionMonths = transactionRecords
    .map(({ month }) => month)
    .filter((value, index, self) => self.indexOf(value) === index); 

  const sortedMonths = transactionMonths.sort((a, b) => new Date(b) - new Date(a));
  return sortedMonths.slice(0, 3);
};

export default getLastThreeMonths;
