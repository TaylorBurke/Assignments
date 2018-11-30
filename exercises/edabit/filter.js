// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


const oils = [
    'peanut',
    'coconut',
    'olive',
    'flaxseed',
    'palm',
    'sesame seed',
    'palm kernel',
    'corn'
];

oils.push('vegetable', 'MCT', 'definitelynotpalmoil');

// this function filters through the array of oils and removes any containing the phrase 'palm'

const rainforestSafe = oils.filter((oil) => !(oil.match(/palm/)) )


console.log(rainforestSafe);