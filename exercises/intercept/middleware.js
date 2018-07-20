const logger = (req, res, next) => {
    req.newMethod = "test";
    console.log(req.method + "" + new Date().toLocaleString());
    next();
}

module.exports = logger;