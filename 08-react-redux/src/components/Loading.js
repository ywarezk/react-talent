import React from 'react';
import {connect} from 'react-redux';

class Loading extends React.Component {

    render() {
        const {isLoadingFromServer} = this.props

        // TODO grab this from state
        if (isLoadingFromServer) {
            return <h1>Loading</h1>
        }
        return null;
    }
}

function mapStateToProps(state) {
    return {
        isLoadingFromServer: state.isLoading
    }
}

export default connect(mapStateToProps)(Loading);