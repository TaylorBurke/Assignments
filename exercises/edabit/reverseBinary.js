function arrayFromMask(nMask) {
    // nMask must be between -2147483648 and 2147483647
    if (nMask > 0x7fffffff || nMask < -0x80000000) {
        throw new TypeError('arrayFromMask - out of range');
    }
    let  aFromMask = [];
    for (let nShifted = nMask; nShifted;
         aFromMask.push(Boolean(nShifted & 1)), nShifted >>>= 1);
    return aFromMask;
}
const bin = n => {
    let arrayN = arrayFromMask(n);
    let binaryReversed = "";
    for (let i = 0; i < arrayN.length; i++){
        let bit = 0;
        if (arrayN[i]) bit = 1;
        binaryReversed = binaryReversed.concat('', bit);
    }
    return parseInt(binaryReversed, 2);
}