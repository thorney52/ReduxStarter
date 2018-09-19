// Create a new component. This component should produce
// some HTML

// Take this component's generated HTML and put it on the page. (In the DOM)
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDdRmRLUfEnUyZ7IzRrP-Gf8uIPFL6AtTI';

const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>);
};

ReactDOM.render(<App/>, document.querySelector('.container'));