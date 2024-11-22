import calculateRewardPointsFromTransactions from './calculateRewardPointsFromTransactions'


const transactionsData = [
  {
    customerID: 1,
    name: "Jan",
    transactions: [
      { month: "2024-09", amount: 90 },
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


describe("calculateRewardPointsFromTransactions()", () => {
  it(`should return the correct list and sum: ${transactionsData[0].name}`, () => {
    const userTransactions = transactionsData[0].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-09": 690,
        "2024-08": 230,
        "2024-07": 100,
        "2022-11": 2290,
        "2023-01": 1490,
        "2023-07": 1870,
        "2024-01": 110,
        "2024-02": 10,
        "2024-04": 280,
        "2024-05": 50,
        "2024-06": 30,
      },
      "totalPoints": 7150},
    );
  });

  
  it(`should return the correct list and sum when one of the months is empty: ${transactionsData[1].name}`, () => {
    const userTransactions = transactionsData[1].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2021-08": "No reward for this transaction month",
        "2023-08": 40,
        "2024-08": 20,
      },
      "totalPoints": 60},
    );
  });


  it(`should return the correct list and sum when two of the months are empty: ${transactionsData[2].name}`, () => {
    const userTransactions = transactionsData[2].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2022-10": "No reward for this transaction month",
        "2023-08": 50,
        "2023-09": "No reward for this transaction month",
        "2024-10": 40,
        "2024-09": 90,
        "2024-08": 50,
      },
      "totalPoints": 230},
    );
  });


  it(`should return the correct list and sum when one of the months is empty: ${transactionsData[3].name}`, () => {
    const userTransactions = transactionsData[3].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-09": "No reward for this transaction month",
        "2024-08": 50,
      },
      "totalPoints": 50,
    },
    );
  });


  it(`should return the correct list and sum when three of the months are empty: ${transactionsData[4].name}`, () => {
    const userTransactions = transactionsData[4].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {
        "2024-10": 90,
        "2024-08": "No reward for this transaction month",
        "2011-09": "No reward for this transaction month",
        "2004-09": "No reward for this transaction month",
      }, 
      "totalPoints": 90,
    },
    );
  });


  it(`should return empty list if user has no transactions${transactionsData[5].name}`, () => {
    const userTransactions = transactionsData[5].transactions;

    const result = calculateRewardPointsFromTransactions(userTransactions);

    expect(result).toEqual({
      "monthlyRewardPoints": {}, 
      "totalPoints": 0},
    );
  });


  it("should throw an error when invalid transactions was provided", () => {
    const invalidTransactions = [
      { month: "2024-09", amount: -50 },
      { month: "2024-08", amount: "not a number" },
      { month: "2024-07", amount: null },
    ];
    
    expect(()=> calculateRewardPointsFromTransactions(invalidTransactions)).toThrow(/Invalid Input/);
  });
  

  it('should throw an error when wrong data was provided', ()=> {
    const invalidData = 'abc'
    expect(()=> calculateRewardPointsFromTransactions(invalidData)).toThrow()
  })

})