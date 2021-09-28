import Sign from './Sign';
import { createHash, sign } from 'crypto';

interface VerifyConstructor {
    bool: boolean;
    ret(): boolean;
}

export class Verify implements VerifyConstructor {
    bool: boolean;
    constructor(publicKey: Buffer[][], message: string, signature: Sign){
        const hash = (value: string | Uint8Array) => createHash('sha256').update(value).digest();
        const hashedMsg = createHash("sha256").update(message).digest().reduce((acc,byte) => acc += byte.toString(2).padStart(8, "0"), "");
        const boolArray: boolean[] = [];
        for(let i = 0; i < hashedMsg.length; ++i){
            let hashedSig = hash(signature[i]);
            if(hashedMsg[i] === "0"){
                boolArray.push(hashedSig.compare(publicKey[0][i]) === 0);
            } else if(hashedMsg[i] === "1"){
                boolArray.push(hashedSig.compare(publicKey[1][i]) === 0);
            }
        }
        this.bool = boolArray.every(member => member === true);
    }
    ret(){
        return this.bool;
    }
}


// export default VerifyKey;
