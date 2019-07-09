import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import AddBook from "./AddBook";
import EditBook from "./EditBook";
import DisplayBooks from "./DisplayBooks";

import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [editBookData, setEditBookData] = useState({
    id: "",
    title: "",
    summary: "",
    author: "",
    rating: ""
  });
  const [editBookModal, setEditBookModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios(`http://localhost:3001/books`);
      const books = res.data;
      setBooks(books);
    } catch (e) {
      console.log(e);
    }
  };

  const addBook = async form => {
    try {
      const res = await axios.post(`http://localhost:3001/books`, form);
      const book = res.data;
      setBooks([...books, book]);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleEditBookModal = () => {
    setEditBookModal(!editBookModal);
  };

  const editBook = book => {
    setEditBookData({
      id: book.id,
      title: book.title,
      summary: book.summary,
      author: book.author,
      rating: book.rating
    });
    setEditBookModal(!editBookModal);
  };

  const updateBook = async () => {
    try {
      await axios.put(
        `http://localhost:3000/books/` + editBookData.id,
        editBookData
      );
      fetchData();
      setEditBookModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteBook = async id => {
    try {
      await axios.delete(`http://localhost:3001/books/` + id);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App container">
      <Navbar color="light" light expand="md">
        <NavbarBrand>Book Dash</NavbarBrand>
      </Navbar>

      <AddBook addBook={addBook} />
      <EditBook
        editBookModal={editBookModal}
        toggleEditBookModal={toggleEditBookModal}
        editBookData={editBookData}
        setEditBookData={setEditBookData}
        updateBook={updateBook}
      />
      <DisplayBooks books={books} editBook={editBook} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
