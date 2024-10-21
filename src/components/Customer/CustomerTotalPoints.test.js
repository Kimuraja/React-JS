import CalculateRewardPointsFromTransactions from '../utils/calculateRewardPointsFromTransactions';
import { describe, expect, it } from 'vitest';
import { getTransactions } from "../services/API";

describe('CalculateRewardPointsFromTransactions', () => {
  it('returns correct total points for a set of transactions', async () => {
    const transactionsData = await getTransactions();
    const transactions = transactionsData[0].transactions;
    const result = CalculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(1070);
  });

  it('returns correct total points for a set of transactions', async () => {
    const transactionsData = await getTransactions();
    const transactions = transactionsData[1].transactions;
    const result = CalculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(60);
  });

  it('returns correct total points for a set of transactions', async () => {
    const transactionsData = await getTransactions();
    const transactions = transactionsData[2].transactions;
    const result = CalculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(180);
  });

  it('returns correct total points for a set of transactions', async () => {
    const transactionsData = await getTransactions();
    const transactions = transactionsData[3].transactions;
    const result = CalculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(50);
  });

  it('returns correct total points for a set of transactions', async () => {
    const transactionsData = await getTransactions();
    const transactions = transactionsData[4].transactions;
    const result = CalculateRewardPointsFromTransactions(transactions);
    expect(result.totalPoints).toBe(90);
  });
});
