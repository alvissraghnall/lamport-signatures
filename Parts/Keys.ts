import { createHash, randomBytes, randomFillSync } from "crypto";

class GenerateKeys {
    constructor(){
        const hash = (value: Uint8Array) => createHash('sha256').update(value).digest();
        const rand = () => randomFillSync(new Uint8Array(32));
        const skarray = new Array(256);
        for(let i = 0; i < skarray.length; i++){
            skarray[i] = [];
        }
        const row0 = skarray.map(() => rand());
        const row1 = skarray.map(() => rand());
        
        const secretKey: [Uint8Array[], Uint8Array[]] = [row0, row1];

        const publicKey = new Array(2);
        publicKey[0] = secretKey[0].map(value => hash(value));
        publicKey[1] = secretKey[1].map(value => hash(value));

        console.log(publicKey[0][37], hash(secretKey[0][37]));
        
    }
}

const sk = new GenerateKeys();




export default GenerateKeys;