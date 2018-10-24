import React, { Component } from 'react';
import './App.css';
import {serverRequest} from './redux/actions';
import {connect} from 'react-redux';
import Loading from './components/Loading';
import TodoList from './components/TodoList';

class App extends Component {

  componentDidMount() {
    // call a redux action serverRequest
    this.props.request();
  }

  render() {
    return (
      <div className="App">
        <Loading />
        <TodoList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    request: () => dispatch(serverRequest())
  }
}

export default connect(null, mapDispatchToProps)(App);


// create redux state: {isLoding: , todos: }
// new component creates new todo task
// add the todo task to the array of todos
// 