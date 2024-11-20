import analyzeTransactionCount from "./analyzeTransactionCount";
import getTransactionCountsByMonth from "./getTransactionCountsByMonth";

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


describe("getTransactionCountInfo() | analyzeTransactionCount()", () => {
  it(`should identify months with multiple transactions for ${transactionsData[0].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[0].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({
      "2024-09": "Has more than 1 transaction in this month",
      "2024-08": "Has 1 transaction in this month",
      "2024-07": "Has more than 1 transaction in this month",
      "2024-06": "Has more than 1 transaction in this month",
      "2024-05": "Has 1 transaction in this month",
      "2024-04": "Has more than 1 transaction in this month",
      "2024-02": "Has more than 1 transaction in this month",
      "2024-01": "Has more than 1 transaction in this month",
      "2023-07": "Has more than 1 transaction in this month",
      "2023-01": "Has 1 transaction in this month",
      "2022-11": "Has 1 transaction in this month"
    });
  });


  it(`should identify months with multiple transactions for ${transactionsData[1].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[1].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({
      "2021-08": "Has 1 transaction in this month",
      "2023-08": "Has 1 transaction in this month",
      "2024-08": "Has 1 transaction in this month",
    });
  });


  it(`should identify months with multiple transactions for ${transactionsData[2].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[2].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({
      "2022-10": "Has 1 transaction in this month",
      "2023-08": "Has 1 transaction in this month",
      "2023-09": "Has 1 transaction in this month",
      "2024-08": "Has more than 1 transaction in this month",
      "2024-09": "Has more than 1 transaction in this month",
      "2024-10": "Has more than 1 transaction in this month",
    });
  });
  
  
  it(`should identify months with multiple transactions for ${transactionsData[3].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[3].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({
      "2024-08": "Has 1 transaction in this month",
      "2024-09": "Has 1 transaction in this month",
    });
  });
  
  
  it(`should identify months with multiple transactions for ${transactionsData[4].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[4].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({
      "2004-09": "Has 1 transaction in this month",
      "2011-09": "Has 1 transaction in this month",
      "2024-08": "Has 1 transaction in this month",
      "2024-10": "Has 1 transaction in this month",
    });
  });
  
  
  it(`should return an empty object for a customer with no transactions: ${transactionsData[5].name}`, () => {
    const transactionCount = getTransactionCountsByMonth(transactionsData[5].transactions);
    const monthlyTransactionDescriptions = analyzeTransactionCount(transactionCount);
    
    expect(monthlyTransactionDescriptions).toEqual({});
  });


  it('should throw an error when invalid data is provided', () => {
    const invalidData = 'pomidor';
    expect(() => getTransactionCountsByMonth(invalidData[0].transactions)).toThrow(/Invalid input: transactions must be an array/);
  });
});