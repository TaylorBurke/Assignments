// https://coursework.vschool.io/stringify-url/


const stringifyUrl = (url, query) => {
    // if (Object.keys(query).length === 0) return url;
    let queryString = "?";
    for (key in query) {
        queryString += `${key}=${query[key]}&`
    }
    queryString = queryString.slice(-1);
    return url + queryString;

}

const objectifyQuery = (url) => {

    const queryString = url.substring(url.indexOf("?") + 1);
    const splitQuery = queryString.split("&");
    const splitByEqual = splitQuery.map(str => str.split("="))
    const queryOject = splitByEqual.reduce((query, subArr) => {
        query[subArr[0]] = subArr[1];
        return query;
    }, {})
    return queryOject;
}

const url = 'www.google.com/'
const query = {
    color: 'black',
    diet: 'fruit'

}


console.log(stringifyUrl(url, query));

module.exports = { stringifyUrl, objectifyQuery };