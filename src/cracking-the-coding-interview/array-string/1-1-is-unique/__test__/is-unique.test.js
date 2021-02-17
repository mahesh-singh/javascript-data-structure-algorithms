import checkUnique from "../is-unique";

describe("test is unique function", () => {
  it("should return true if string contains unique characters", () => {
    const result = checkUnique("stry234");
    expect(result).toBe(true);
  });
});
