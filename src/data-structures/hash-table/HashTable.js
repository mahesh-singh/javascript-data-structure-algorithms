
const defaultHashTableSize  = 32;
export class HashTable{
    constructor(hashTableSize=defaultHashTableSize){
        this.bucket = new Array(hashTableSize);
    }

    hash(key){
        return Array.from(key).reduce((accum, charKey)=>{
            accum = accum + charKey.charCodeAt(0);
        }
    }
}