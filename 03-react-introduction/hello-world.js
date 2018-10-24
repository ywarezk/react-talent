

// without react
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World';

// const theDivToAddTo = document.getElementById('content');
// theDivToAddTo.appendChild(h1);

// with react
/*
<h1>
    <span>Hello world</span>
</h1>
*/
// const h1 = React.createElement('h1', null, 'Hello World from react');  // react elements
// const h1 = React.createElement('h1', null, React.createElement('span', null, 'hello world from span'));
const h1 = <h1><span>Hello World from jsx</span></h1>;
ReactDOM.render(h1, document.getElementById('content'));

// jsx
// javascript + xml 
// html like syntax in js
// html syntax translated to React.createElement
