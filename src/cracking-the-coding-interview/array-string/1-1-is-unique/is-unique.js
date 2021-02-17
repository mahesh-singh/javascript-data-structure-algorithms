/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you could not use additional data structure.
 * Approach:
 * #1 Strings are array of characters, we can iterate each character in the string and add these characters in hash table as a key. if character already exists in hash table, string is not unique.
 * #2 This problem can also be done with array if we know that characters are ony ASCII which means we just need an array of 128 length, for extended ASCII we just need 256 length array. We need to find corresponding ASCII value and check if that place in array is already marked as one, if not marked it with one. If it is already marked, string doesn't have unique character.
 * #3 If we don't need to use additional data structure, We need to use nested loop on the string. For each element in outer loop, we need to iterate through same string to check if that character already exist or not.
 *
 * Sudo code for approach #2
 * Assumption - String contains only ascii characters
 * function checkUnique(str){
 *  let uniqueCheckArray = new Array();
 *  for(let i=0; i< str.length -1; i++){
 *      int asciiValue = str.charCodeAt(i);
 *      if(uniqueCheckArray[asciiValue]){
 *          return false
 *      }
 *      uniqueCheckArray[asciiValue] = 1;
 *  }
 * }
 *
 */

export default function checkUnique(str) {
  let uniqueCheckArray = new Array();
  for (let i = 0; i < str.length - 1; i++) {
    let asciiValue = str.charCodeAt(i);
    if (uniqueCheckArray[asciiValue]) {
      return false;
    }
    uniqueCheckArray[asciiValue] = 1;
  }
  return true;
}
