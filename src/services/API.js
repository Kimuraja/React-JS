export const getTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
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
      resolve(data);
    });
  }, 2000)
}