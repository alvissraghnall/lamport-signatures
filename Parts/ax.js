const crypto = require("crypto");

console.log(crypto.createHash('sha256').update('elijah'));
const buf = Buffer.alloc(4);

const getSizes = hash => {
    const buf = hash(Buffer.alloc(0))
    return {
      bytes: buf.length,
      bits: buf.length * 8
    }
}
const sha256 = msg => crypto.createHash('sha256').update(msg).digest()
const st = getSizes(sha256);

console.log(st);



const privateKey = [0, 1].map(() =>
    crypto.randomBytes(st.bits * st.bytes)
);
console.log(privateKey[0].byteLength);