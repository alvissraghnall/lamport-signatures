import { createHash } from 'crypto';
// import { log } from 'node:console';

class Sign extends Array<Uint8Array> {
    
    constructor(privateKey: Uint8Array[][], msg: string){
        super();
        const hashedMsg = createHash("sha256").update(msg).digest();
        const hashedMsgBytes = hashedMsg.reduce((acc,byte) => acc += byte.toString(2).padStart(8, "0"), "");

        let count = 0;
        let signature: Uint8Array[] = [];
        for(let i = 0; i < hashedMsgBytes.length; i++){
            if(hashedMsgBytes[i] === "0"){
                signature.push(privateKey[0][i]);
                count++;
            }
            else if(hashedMsgBytes[i] === "1"){
                signature.push(privateKey[1][i]);
                count++;
            }
            // else {
            //     log("neither")
            // }
        }
        // log(count);
        // log(signature.reduce((acc, curr) => acc += curr.byteLength, 0));

        return signature;
    }
}

export default Sign;
