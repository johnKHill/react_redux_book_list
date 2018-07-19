import React, { Component } from 'react';
import { connect } from 'react-redux';


// By making the BookDetail connection (the connect function) to state, 
// BookDetail turns from a Component into a "Container"
class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

// The "state" returns an object
// whatever object is returned will be available to the component/view in the "this.props..."
// this function is the glue between react and redux
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookDetail
    return {
        book: state.activeBook
    };
}

// Connect the function and the component which produces the "container"
// A "container" is a component that's aware of the state that's contained by redux
export default connect(mapStateToProps)(BookDetail);