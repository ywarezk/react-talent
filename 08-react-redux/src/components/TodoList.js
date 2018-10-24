import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render() {
        const {todoList} = this.props;
        return (
            <ul>
                {todoList.map((todoItem) => <li key={todoItem.id}>{todoItem.title}</li>)}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todos
    }
}

export default connect(mapStateToProps)(TodoList)