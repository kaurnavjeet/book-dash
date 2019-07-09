import React, { useState, useEffect } from "react";
import { Button, Table, Form, FormGroup, Label, Input } from "reactstrap";
import PopupItem from "./PopupItem";
import axios from "axios";

const DisplayBooks = props => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(props.books);

  const onChange = e => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`http"//localhost:3001/books?q=${query}`);
        const filteredData = res.data;
        setFilteredData(filteredData);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [query]);

  const displayBooks = props.books.map(book => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <PopupItem book={book} />
        </td>
        <td>{book.author}</td>
        <td>{book.rating}</td>
        <td>
          <Button
            color="success"
            size="sm"
            className="mr-3"
            onClick={() => {
              props.editBook(book);
            }}
          >
            Edit
          </Button>
          <Button
            color="danger"
            size="sm"
            onClick={() => props.deleteBook(book.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  const filteredBooks = filteredData.map(book => {
    return (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>
          <PopupItem book={book} />
        </td>
        <td>{book.author}</td>
        <td>{book.rating}</td>
        <td>
          <Button
            color="success"
            size="sm"
            className="mr-3"
            onClick={() => {
              props.editBook(book);
            }}
          >
            Edit
          </Button>
          <Button
            color="danger"
            size="sm"
            onClick={() => props.deleteBook(book.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <Form inline className="my-3" style={{ display: "flex" }}>
        <FormGroup>
          <Label for="search" hidden>
            Search
          </Label>
          <Input
            onChange={onChange}
            value={query}
            type="text"
            name="search"
            id="search"
            placeholder="Search by title, author, rating"
          />
        </FormGroup>
      </Form>
      <Table className="table table-hover" responsive>
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        {query.length === 0 ? (
          <tbody>{displayBooks}</tbody>
        ) : (
          <tbody>{filteredBooks}</tbody>
        )}
      </Table>
    </div>
  );
};

export default DisplayBooks;
