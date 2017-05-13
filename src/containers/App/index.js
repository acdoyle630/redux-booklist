/*jshint esversion: 6*/

import React, { Component } from 'react';
import BookList  from '../../components/BookList';
import { getBooksFromFakeXHR } from '../../lib/books.db';

import logo from './logo.svg';
import './styles.css';

class App extends Component {
  constructor(props){
    super(props);

    this.title = "Book List App"

    this.state ={
      books: [],
      filter: ""
    };
  }
  componentWillMount() {
    getBooksFromFakeXHR()
    .then(books =>{
      this.setState({ books });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
