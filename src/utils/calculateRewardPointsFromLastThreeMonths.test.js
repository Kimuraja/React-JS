import calculateRewardPointsFromTransactions from './calculateRewardPointsFromTransactions'
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
];

describe("calculateRewardPointsFromTransactions function:", () => {
  it(`should return correct points for user with transactions in multiple months for ${transactionsData[0].name}`, () => {
    const userTransactions = transactionsData[0].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-09": 650,
        "2024-08": 230,
        "2024-07": 100,
        "2022-11": 0,
        "2023-01": 0,
        "2023-07": 0,
        "2024-01": 0,
        "2024-02": 0,
        "2024-04": 0,
        "2024-05": 0,
        "2024-06": 0,
      }, 
      "totalPoints": 980},
    );
  });


  it(`should return correct points for user with transactions in multiple months for ${transactionsData[1].name}`, () => {
    const userTransactions = transactionsData[1].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2021-08": 0,
        "2023-08": 40,
        "2024-08": 20,
      }, 
      "totalPoints": 60},
    );
  });

  it(`should return correct points for user with transactions in multiple months for ${transactionsData[2].name}`, () => {
    const userTransactions = transactionsData[2].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2022-10": 0,
        "2023-08": 0,
        "2023-09": 0,
        "2024-10": 40,
        "2024-09": 90,
        "2024-08": 50,
      }, 
      "totalPoints": 180},
    );
  });


  it(`should return correct points for user with transactions in multiple months for ${transactionsData[3].name}`, () => {
    const userTransactions = transactionsData[3].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-09": 0,
        "2024-08": 50,
      }, 
      "totalPoints": 50},
    );
  });


  it(`should return correct points for user with transactions in multiple months for ${transactionsData[4].name}`, () => {
    const userTransactions = transactionsData[4].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-10": 90,
        "2024-08": 0,
        "2011-09": 0,
        "2004-09": 0,
      }, 
      "totalPoints": 90},
    );
  });


  it(`should return correct points for user with transactions in multiple months for ${transactionsData[5].name}`, () => {
    const userTransactions = transactionsData[5].transactions;
    const result = calculateRewardPointsFromTransactions(userTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {}, 
      "totalPoints": 0},
    );
  });


  it("should handle invalid transactions gracefully", () => {
    const invalidTransactions = [
      { month: "2024-09", amount: -50 },
      { month: "2024-08", amount: "not a number" },
      { month: "2024-07", amount: null },
    ];
  
    const result = calculateRewardPointsFromTransactions(invalidTransactions);
    expect(result).toEqual({
      "monthlyRewardPoints": {},
      "totalPoints": 0,
    });
  });
})