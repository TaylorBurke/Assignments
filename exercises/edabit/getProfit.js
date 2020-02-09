const profit = (data) => {
    let { sellPrice, costPrice, inventory } = data;
    return (sellPrice - costPrice) * inventory;
}