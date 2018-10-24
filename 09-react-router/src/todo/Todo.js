import React from 'react';
import {getTask} from './todo.service'

export default class Todo extends React.Component {
    state = {
        task: null
    }

    /**
     * update the state with the new task
     */
    _getTask = () => {
        const {match} = this.props;
        const idParam = match.params.idAnthony;
        getTask(idParam).then((task) => {
            this.setState({
                task
            })
        })
    }

    componentDidMount() {
        // fetch from server the todo task based on the id in the params
        this._getTask();
    }

    /**
     * only update is the previous param of anthonyid is different then the next one
     */
    shouldComponentUpdate(nextProps) {
        return nextProps.match.params.idAnthony !== this.props.match.params.idAnthony;
    }

    componentDidUpdate() {
        this._getTask();
    }

    render() {
        const {match} = this.props;
        const idParam = match.params.idAnthony;
        return (<div>
            

            <h1>{ this.state.task ? this.state.task.title : null }</h1>
            <h3>{ this.state.task ? this.state.task.description : null }</h3>
            <h5>{idParam}</h5>

            <h5>
                {this.props.location.search.split('hello=')[1]}
            </h5>
        </div>)
    }
}