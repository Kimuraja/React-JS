import calculatePoints from "./calculatePoints";

const transactionsData = [
  {
    customerID: 1,
    name: "Jan",
    transactions: [
      { month: "2024-09", amount: 50 },
      { month: "2024-09", amount: 400 },
      { month: "2024-08", amount: 190 },
      { month: "2024-07", amount: 120 },
      { month: "2024-07", amount: 60 },
      { month: "2024-06", amount: 40 },
      { month: "2024-06", amount: 80 },
      { month: "2024-05", amount: 100 },
      { month: "2024-04", amount: 80 },
      { month: "2024-04", amount: 200 },
      { month: "2024-02", amount: 60 },
      { month: "2024-02", amount: 40 },
      { month: "2024-01", amount: 80 },
      { month: "2024-01", amount: 100 },
      { month: "2024-01", amount: 80 },
      { month: "2023-07", amount: 500 },
      { month: "2023-07", amount: 320 },
      { month: "2023-07", amount: 340 },
      { month: "2023-01", amount: 820 },
      { month: "2022-11", amount: 1220 },
    ],
  },
  {
    customerID: 2,
    name: "Piotr",
    transactions: [
      { month: "2024-08", amount: 70 },
      { month: "2023-08", amount: 90 },
      { month: "2021-08", amount: 20 },
    ],
  },
  {
    customerID: 3,
    name: "Adam",
    transactions: [
      { month: "2024-08", amount: 100 },
      { month: "2024-09", amount: 50 },
      { month: "2024-10", amount: 40 },
      { month: "2024-08", amount: 40 },
      { month: "2024-09", amount: 120 },
      { month: "2024-10", amount: 90 },
      { month: "2023-08", amount: 100 },
      { month: "2023-09", amount: 50 },
      { month: "2022-10", amount: 30 },
    ],
  },
  {
    customerID: 4,
    name: "Krzysztof",
    transactions: [
      { month: "2024-08", amount: 100 },
      { month: "2024-09", amount: 50 },
    ],
  },
  {
    customerID: 5,
    name: "Zbigniew",
    transactions: [
      { month: "2024-08", amount: 50 },
      { month: "2004-09", amount: 50 },
      { month: "2024-10", amount: 120 },
      { month: "2011-09", amount: 50 },
    ],
  },
  {
    customerID: 6,
    name: "Eustachy",
    transactions: [],
  },
  {
    customerID: 7,
    name: "Invalid Data",
    transactions: [
      { month: "2034-01", amount: -50 },
      { month: "2024-02", amount: undefined },
      { month: "2234-03", amount: null },
      { month: "1969-10-29", amount: "ARPANET" },
    ],
  },
];


describe("Reward Points Calculation:", () => {
  it(`should check if there are transactions and calculate reward points for ${transactionsData[0].name}`, () => {
    const userTransactions = transactionsData[0].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(20);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([
      0, 650, 230, 90, 10, 0, 30, 50, 30, 250, 10, 0, 30, 50, 30, 850, 490,
      530, 1490, 2290,
    ]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });


  it(`should check if there are transactions and calculate reward points for ${transactionsData[1].name}`, () => {
    const userTransactions = transactionsData[1].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount); }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount); }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount); }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount); }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(3);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([20, 40, 0]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });


  it(`should check if there are transactions and calculate reward points for ${transactionsData[2].name}`, () => {
    const userTransactions = transactionsData[2].transactions;


    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(9);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([50, 0, 0, 0, 90, 40, 50, 0, 0]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });


  it(`should check if there are transactions and calculate reward points for ${transactionsData[3].name}`, () => {
    const userTransactions = transactionsData[3].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(2);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([50, 0]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });

  
  it(`should check if there are transactions and calculate reward points for ${transactionsData[4].name}`, () => {
    const userTransactions = transactionsData[4].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(4);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([0, 0, 90, 0]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });


  it(`should check if there are transactions and calculate reward points for ${transactionsData[5].name}`, () => {
    const userTransactions = transactionsData[5].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });

    expect.assertions(4)
    expect(userTransactions).toHaveLength(0);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });


  it(`should check if there are transactions and calculate reward points for ${transactionsData[6].name}`, () => {
    const userTransactions = transactionsData[6].transactions;

    const rewardedTransactions = userTransactions.map((transaction) => {
      if (transaction.amount < 50) { return 0 };
      if (transaction.amount === 50) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 50 && transaction.amount < 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount === 100) { return calculatePoints(transaction.amount) }
      if (transaction.amount > 100) { return calculatePoints(transaction.amount) }
      return 0;
    });
    
    expect.assertions(4)
    expect(userTransactions).toHaveLength(4);
    expect(rewardedTransactions).toBeInstanceOf(Array);
    expect(rewardedTransactions).toEqual([0, 0, 0, 0]);
    expect(rewardedTransactions).toHaveLength(userTransactions.length);
  });
});
