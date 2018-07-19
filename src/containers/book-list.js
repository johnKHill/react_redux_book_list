import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// By making the BookList connection (the connect function) to state, 
// BookList turns from a Component into a "Container"
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4"> 
              {this.renderList()}  
            </ul>
        )
    }
}
// The "state" returns an object
// whatever object is returned will be available to the component/view in the "this.props..."
// this function is the glue between react and redux
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books 
    };
}


// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // bindActionCreators - Whenever selectBook is called, the result 
    // should be passed to all of the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Connect the function and the component which produces the "container"
// A "container" is a component that's aware of the state that's contained by redux
// PROMOTE BOOKLIST from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);