import  { Verify } from "./Parts/Verify";
import GenerateKeys from "./Parts/Keys";
import Sign from "./Parts/Sign";

const { secretKey, publicKey } = new GenerateKeys();
const sig = new Sign(secretKey, "abc")

const verify = new Verify(publicKey, "abc", sig);
// const ver = VerifyKey(publicKey, "abc", sig);
console.log(verify.ret());

