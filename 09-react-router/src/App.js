import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Todo from './todo/Todo';
import Settings from './settings/Settings';

function Home(props) {
  return (
    <div>
      <h1>Hello im the homepage</h1>

      {/* we want a button that will navigate to the about page */}
      <button onClick={() => props.history.push('/about')} >goto about page</button>
    </div>
  )
}

function MobileHomepage(props) {
  return <h1>hello im in my phone</h1>
}

class About extends React.Component {
  componentWillUnmount() {
    console.log('this is called when the component is destroyed');
  }

  render() {
    return <h1>Hello im the aboutpage</h1>
  }
}

function Error404(props) {
  return <h1>page not found - our 404</h1>
}



class App extends Component {
  
  /**
   * check the dimension of the screen to determine if im on my mobile phone
   * @returns {boolean}
   */
  isMobile = () => {
    // ...
    return false;
  }

  popFromHistory = () => {
    // we dont have the history in the props
    // const history = this.props.history
    this.history.goBack();
  }

  directToTodoTask = (event) => {
    const taskId = this.taskIdInput.value;
    this.history.push(`/todo/${taskId}`);
    event.preventDefault();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <nav>
            <button onClick={this.popFromHistory}>go back</button>
            <ul>
              <li>
                <NavLink to="/" >homepage</NavLink>
              </li>
              <li>
                <NavLink to="/about" >about</NavLink>
              </li>
              <li>
                <NavLink to="/settings" >settings</NavLink>
              </li>
            </ul>
          </nav>

          {/* text box when enter text i will redirect to the number that the user passed */}
          <form onSubmit={this.directToTodoTask}>
            <div>
              <label>Type digit of todo task</label>
              <input type="number" name="task-id" ref={(inputDomElement) => this.taskIdInput = inputDomElement} /> 
            </div>
          </form>

          <Switch>

            {/* if my route is / render the homepage */}
            {/* Route - if our path equals to something render some component */}
            { this.isMobile() ?  <Route path="/" component={MobileHomepage} exact /> : <Route path="/" component={Home} exact />}

            {/* if the path is about then render the about page */}
            <Route path="/about" component={About} />

            {/* if the route is equal to /todo/20 then render the todo component */}
            <Route path="/todo/:idAnthony" component={Todo} />

            {/* when settings render the parent - but a problem cause we want to limit the access to the parent and direct to one of the childs */}
            <Route path="/settings" component={Settings} />

            {/* if path did not match any of the above render 404 */}
            <Route component={Error404} /> 

          </Switch>

          {/* is there an added value to placing a component in a catch all route */}
          {/* properties relating to routing will be passed */}
          {/* component will rerender on route change */}
          {/* <Route component={Home} />
          <Home /> */}

          <Route component={({history}) => {this.history = history; return null;}} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
