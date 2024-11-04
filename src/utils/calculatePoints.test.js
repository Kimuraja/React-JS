import calculatePoints from "./calculatePoints";

describe('calculatePoints', () => {
  it('should return 0 for amounts less than or equal to 50', () => {
    expect(calculatePoints(0)).toBe(0);
    expect(calculatePoints(50)).toBe(0);
  });

  it('should return correct points for amounts between 50 and 100', () => {
    expect(calculatePoints(51)).toBe(1);
    expect(calculatePoints(90)).toBe(40);
    expect(calculatePoints(100)).toBe(50);
  });

  it('should return correct points for amounts greater than 100', () => {
    expect(calculatePoints(120)).toBe(90);
    expect(calculatePoints(200)).toBe(250);
  });

  it("should handle case when there are no transactions", () => {
    const result = calculatePoints([]);
    expect(result).toEqual(0);
  });
});
