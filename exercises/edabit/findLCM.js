function findLCM (n1, n2){
    let cm = n1*n2;
    for (let i = 1; i <= cm; i++){
        if (i % n1 == 0 && i % n2 == 0) return i;
    }
    return cm;
}