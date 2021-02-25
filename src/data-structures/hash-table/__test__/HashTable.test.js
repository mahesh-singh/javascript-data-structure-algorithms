import { resolvePlugin } from "@babel/core";
import HashTable from "../HashTable";

describe("HashTable's hash function", () => {
  it("should return the hash of a given key with default HashTable size", () => {
    const hashTable = new HashTable();
    const result = hashTable.hash("abc");

    expect(result).toBe(294 % 32);
  });

  it("should return same hash key for the same key multiple time with default HashTable size", () => {
    const hashTable = new HashTable();
    const result1 = hashTable.hash("abc");
    const result2 = hashTable.hash("abc");
    expect(result1).toBe(result2);
  });

  it("should return hash key of a given key with custom HashTable size", () => {
    const hashTable = new HashTable(35);
    const result = hashTable.hash("abc");
    expect(result).toBe(294 % 35);
  });
});
