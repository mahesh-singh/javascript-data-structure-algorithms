const defaultHashTableSize = 32;
export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.bucket = new Array(hashTableSize);
  }

  /**
   *
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    // For a given key, hash will be calculated by summing the ASCII code of each character.
    // To fit this number into our hash table, it will apply modulo on thr sum with hash table size
    const hash = Array.from(key).reduce((accumulator, charKey) => {
      return accumulator + charKey.charCodeAt(0);
    }, 0);
    return hash % this.bucket.length;
  }

  // TODO  - add methods for set, delete, , has
  // TODO - Collision handling - While set as a value it should use linked list if not exist, add a linked list and append the value to it
}
