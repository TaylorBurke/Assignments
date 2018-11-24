import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './App';
import * as serviceWorker from './serviceWorker';


const authors = [
    {name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpg",
    imageSource: 'wikimedia commons',
    books: 'the adventures of huckleberry finn'
    }
];

const state = {
    turnData: {
    author: authors[0],
    books: authors[0].books
    }
};

function render(){
ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
}

render();

serviceWorker.unregister();
