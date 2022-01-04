import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        // call action creator function
        this.props.fetchPosts();
    }
    render() {
        return <div> Post List</div>
    }
}
// FirstComponent: null for mapStateToProps, because we don't have any state we need to pass
// into this component. It is responsible for retrieving data from external source

// Second argument:  action creator
export default connect(null,{ fetchPosts: fetchPosts} )(PostList);