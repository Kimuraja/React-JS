import { useState, useEffect } from "react";
import { getTransactions } from "../services/API";
import CalculateRewardPointsFromTransactions from "../utils/calculateRewardPointsFromTransactions";

const useGetTransactions = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTransactions()
      .then(data => {
        const customersWithPoints = data.map(customer => {
          const { monthlyRewardPoints, totalPoints } = CalculateRewardPointsFromTransactions(customer.transactions);
          return { ...customer, monthlyRewardPoints, totalPoints };
        });
        setCustomers(customersWithPoints);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch transactions: ${error}`);
        setLoading(false);
      });
  }, []);

  return { customers, loading, error };
};

export default useGetTransactions;
