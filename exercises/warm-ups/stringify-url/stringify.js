// https://coursework.vschool.io/stringify-url/


const stringifyUrl = (url, query) => {
    let obj = {
        color: 'black',
        species: 'howler'
    }

    let stringQuery = url + '?' + `color=` + obj.color + `&species=` + obj.species

    return stringQuery;
}

const objectifyQuery = (url) => {

    const queryString = url.substring(url.indexOf("?") + 1);
    const splitQuery = queryString.split("&");
    const splitByEqual = splitQuery.map( str => str.split("=") )
    // return queryObject;
}

const url = 'www.google.com/monkey?color=black&species=howler'
const query = {
    color: 'black',
    species: 'howler'
}


objectifyQuery(url, query);

module.exports = { stringifyUrl, objectifyQuery };