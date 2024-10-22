import calculateRewardPointsFromTransactions from "./calculateRewardPointsFromTransactions";
import calculatePoints from "./calculatePoints";
import { describe, expect, it } from "vitest";

const transactionsData = [
  {
    customerID: 1,
    name: "Jan",
    transactions: [
      { month: "2024-09", amount: 120 },
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
];

describe("Expected total points for the user from the last 3 months:", () => {
  it("1st user expect to be: 1070", async () => {
    const transactions = transactionsData[0].transactions;
    const result = calculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(1070);
  });

  it("2nd user expect to be: 60", async () => {
    const transactions = transactionsData[1].transactions;
    const result = calculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(60);
  });

  it("3rd user expect to be: 180", async () => {
    const transactions = transactionsData[2].transactions;
    const result = calculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(180);
  });

  it("4th user expect to be: 50", async () => {
    const transactions = transactionsData[3].transactions;
    const result = calculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(50);
  });

  it("5th user expect to be: 90", async () => {
    const transactions = transactionsData[4].transactions;
    const result = calculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(90);
  });
});

describe("Expected number of points for transaction between $50 and $100:", () => {
  it("All 1st user points expect to be: [10, 30, 50, 30, 10, 30, 50, 30]", async () => {
    const userTransactions = transactionsData[0].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 50 && transaction.amount <= 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([10, 30, 50, 30, 10, 30, 50, 30]);
  });

  it("All 2nd user points expect to be: [20, 40]", async () => {
    const userTransactions = transactionsData[1].transactions;

    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 50 && transaction.amount <= 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([20, 40]);
  });

  it("All 3rd user points expect to be: [50, 40, 50]", async () => {
    const userTransactions = transactionsData[2].transactions;

    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 50 && transaction.amount <= 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([50, 40, 50]);
  });

  it("All 4th user points expect to be: [50]", async () => {
    const userTransactions = transactionsData[3].transactions;

    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 50 && transaction.amount <= 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([50]);
  });

  it("All 5th user points expect to be: []", async () => {
    const userTransactions = transactionsData[4].transactions;

    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 50 && transaction.amount <= 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([]);
  });
});


describe("Expected number of points for transaction over $100:", () => {
  it("All 1st user points expect to be: [90, 650, 230, 90, 250, 850, 490, 530, 1490, 2290]", async () => {
    const userTransactions = transactionsData[0].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([90, 650, 230, 90, 250, 850, 490, 530, 1490, 2290]);
  });

  it("All 2nd user points expect to be: []", async () => {
    const userTransactions = transactionsData[1].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([]);
  });

  it("All 3rd user points expect to be: [90]", async () => {
    const userTransactions = transactionsData[2].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([90]);
  });

  it("All 4th user points expect to be: []", async () => {
    const userTransactions = transactionsData[3].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([]);
  });

  it("All 5th user points expect to be: [90]", async () => {
    const userTransactions = transactionsData[4].transactions;
    const rewardedTransactions = userTransactions
      .map((transaction) => {
        if (transaction.amount > 100) {
          return calculatePoints(transaction.amount);
        }
        return null;
      })
      .filter((points) => points !== null);
    expect(rewardedTransactions).toStrictEqual([90]);
  });
});
