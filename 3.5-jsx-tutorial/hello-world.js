

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
//ReactDOM.render(h1, document.getElementById('content'));

// jsx
// javascript + xml 
// html like syntax in js
// html syntax translated to React.createElement


// create react elements with function

// function HelloWorld() {
//     return (
//         <h1>
//             <span>
//                 Hello world from function
//             </span>
//         </h1>
//     )
// }

class HelloWorldClass extends React.Component {
    render() {
        return (
            <h1>
                <span>
                    Hello world from class
                </span>
            </h1>
        )
    }
}

// ReactDOM.render(<HelloWorld />, document.getElementById('content'));

// jsx creates tree of react element
// 1 - directly create
// 2- function that returns jsx
// 3 - class extends React.Component implements render

// props
// transfer information to component
// transfer text with double quotes
// transfer other types with curly braces
// transfer children through open and close tag

function dealWithSubmit(e) {
    alert('hello from submit');
    e.preventDefault();
    e.stopPropagation();
}

function dealWithClick(e, msg) {
    alert(msg);
}

function HelloWorld(props) {
    // const name = props.name;
    // const myObj = props.myObj;

    const {name, myObj, children} = props;
    console.log(name);
    console.log(myObj.foo);
    return (
        <React.Fragment>
            <div>
                <h1 id="stam-id" className="my-class">
                    <span>
                        Hello world from function - {name} - {1 + 10} - {Math.random()}
                    </span>
                </h1>
                <form onSubmit={dealWithSubmit}>
                    <label forhtml="email">email</label>
                    <input type="email" name="email" id="email" />
                    <button type="submit">Submit</button>
                    {/* <button onClick={(e) => dealWithClick(e, 'another param')}>click me</button> */}
                    <button onClick={function(e) { dealWithClick(e, 'another param'); }}>click me</button>
                </form>
            </div>
        </React.Fragment>
    )
}

// ReactDOM.render(<HelloWorld name="hello from props" myObj={ {foo: 'bar'} }><HelloWorldClass /></HelloWorld>, document.getElementById('content'));

// attribute
// same as html attribute
// except reserved words like class and for

// JSX has to have single parent
// either wrap in a div / React.Fragment

// events
// similar to html only camel cased
// gets a function 

// conditions

/**
 * this component should print hello or goodbye based on property isHello
 * @param {*} props 
 */
function ConditionHello(props) {
    const {isHello} = props;
    // if (isHello) {
    //     return <h1>Hello</h1>
    // } else {
    //     return <h1>Goodbye</h1>
    // }

    return (
        <div>
            { isHello ? <h1>Hello</h1> : <h1>Goodbye</h1> }
        </div>
    );
}

//ReactDOM.render(<ConditionHello isHello={false}  />, document.getElementById('content'));

// looping in jsx

function MyTodoList() {

    // Array<string> => Array<ReactElement[]>
    const todos = [
        'Walk with piglet',
        'Play piglet',
        'feed piglet'
    ];

    // map
    const todosAsReactElements = todos.map(function(strTodo) { 
        return <li>{strTodo}</li>
    });

    return (
        <ul>
            {todosAsReactElements}

            {todos.map((strTodo) => <li>{strTodo}</li>)}
        </ul>
    )
}

ReactDOM.render(<MyTodoListMultipleLine />, document.getElementById('content'));

// multiple line condition or loop

function MyTodoListMultipleLine() {
    // Array<string> => Array<ReactElement[]>
    const todos = [
        'Walk with piglet',
        'Play piglet',
        'feed piglet'
    ];

    return (
        <ul>
            {
                (function() {
                    const todosLis = [];
                    let index = 0;
                    for(let item of todos) {
                        todosLis.push(<li key={index}>{item}</li>);
                        index++
                    }
                    return todosLis;
                })()
            }
        </ul>
    )
}

