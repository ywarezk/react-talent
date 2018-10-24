
// React Components

// made from several react elements
// molecule of react app
// block of ui we are turning them to components
// reusable block, solve usually a single problem (concern)
// component can be function - stateless component
// component can be class that extends React.Component

function HelloWorld(props) {
    return (
        <h1>
            <span>
                Hello world from function
            </span>
        </h1>
    )
}

const helloworld = <HelloWorld message="hello" stamNumber={10 + Math.random()} />

// state - creates a state machine for the component
// when state change react will call render and display changes in DOM
// when props change react will also rerender but props can only be changed from outside not from the component
// props are read only

class HelloWorldClass extends React.Component {
    state = {
        isHamburgerOpen: false
    }

    constructor(props) {
        super(props);



        // this is ok only in constructor and class definition
        // this.state = {

        // }    

        // this.toggleHamburger = this.toggleHamburger.bind(this);
    }

    // this event will run once
    // after the first render method
    // we will place here stuff like query the server for the first time
    // we can call this.setState
    componentDidMount() {
        
    }

    // will be called in lifecycle hook before render
    // returns true or false
    // by default will always return true
    // if returned true will call render and repaint the component
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    /**
     * when user press the button
     */

    toggleHamburger = () => {
        // this is wrong
        // we dont directly touch the state
        // this.state = {

        // }

        // 1 - directly send a new object
        // this.setState({
        //     isHamburgerOpen: true
        // });

        // this is wrong
        // this.setState({
        //     isHamburgerOpen: !this.state.isHamburgerOpen
        // });

        // this.state.isHamburgerOpen;

        // 2 - pass a callback function that will be called with previous state
        this.setState(function(prevState) {
            return {
                isHamburgerOpen: !prevState.isHamburgerOpen
            }
        }, function() {
            // this will be called after react changed the state
        });
    }

    // this lifecycle hook will be called multiple times
    // this.setState here is wrong
    render() {
        const {message} = this.props;

        // call and apply will run the function
        // this.toggleHamburger.call({hello: 'world'}, 'hello', 'world', []);
        // this.toggleHamburger.apply({hello: 'world'}, ['hello', 'world', []]);


        console.log('this will run when the state change');
        return (
            <div>
                <h1>
                    <span>
                        Hello world from class - {message}
                    </span>
                </h1>
                {/* <button onClick={this.toggleHamburger.bind(this)}> */}
                {/* <button onClick={() => this.toggleHamburger.call(this)}> */}
                <button onClick={this.toggleHamburger}>
                    Toggle Hamburger
                </button>
                { this.state.isHamburgerOpen ? <h1>Hamburger Open</h1> : null}
            </div>
        )
    }
}

// class methods this
// this is not fixed
// 1 - constructor use bind
// 2 - when calling the function use: bind/call/apply
// 3 - define the class method as lambda function


// lifecycle hooks
// connect custom function to certain event that react defines when placing our component, and running it's logic


class Counter extends React.Component {
    state = {
        counter: 0,
        name: 'hello',
        age: 33
    }

    componentDidMount() {
        setInterval(() => {
            // this.setState({});

            this.setState(function(prevState) {
                return {
                    counter: prevState.counter + 1
                }
            });

        }, 1000);
    }


    shouldComponentUpdate(nextProps, nextState) {
        // if (nextState.counter % 2 !== 0) {
        //     return false;
        // } else {
        //     return true;
        // }

        return nextState.counter % 2 === 0;
    }

    render() {
        return <h1>{this.state.counter} - {this.state.name}</h1>
    }

}


// PureComponent
// pure component is like a component
// provides a default implementation for shouldComponentUpdate
// compares previous state to next state and if equal will not call the render method
// shallow compare
class MyPureCounter extends React.PureComponent {
    state = {
        counter: 0,
        obj: {
            otherCounter: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            // this.setState({});

            // this.setState({counter: 1});

            this.setState((prevState) => {
                // prevState.obj.otherCounter++;
                return {
                    //obj: prevState.obj
                    obj: {
                        otherCounter: prevState.obj.otherCounter + 1
                    }
                }
            });

        }, 1000);
    }

    render() {
        console.log('calling this every second');
        return <h1>{this.state.counter} - {this.state.obj.otherCounter}</h1>
    }
}

// when should i use pure component
// 1 - i dont want to render every set state
// if state the same then component stays the same
// 2 - if state is complicated  don't use pure component
// 3 - if setState is called then children will also be redraw

ReactDOM.render(<MyPureCounter />, document.getElementById('content'));


// EX:

// take the bootstrap of react
// create react component
// state = {todos: []}
// componentDidMount -> fetch
// this.setState
// present the title of each todo in a ul li
