import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  ModalFooter,
  Button
} from "reactstrap";

const AddBook = props => {
  const [form, setValues] = useState({
    title: "",
    summary: "",
    author: "",
    rating: ""
  });
  const [newBookModal, setNewBookModal] = useState(false);

  const toggleNewBookModal = () => {
    setNewBookModal(!newBookModal);
  };

  const onChange = e => {
    e.preventDefault();
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <Button
        className="my-3"
        color="primary"
        onClick={toggleNewBookModal}
        style={{ display: "flex" }}
      >
        Add Book
      </Button>
      <Modal isOpen={newBookModal} toggle={toggleNewBookModal}>
        <ModalHeader toggle={toggleNewBookModal}>Add a new book</ModalHeader>
        <ModalBody>
          <InputGroup className="my-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <Input
              name="title"
              type="text"
              id="title"
              value={form.title}
              onChange={onChange}
            />
          </InputGroup>

          <InputGroup className="my-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Summary</InputGroupText>
            </InputGroupAddon>
            <Input
              name="summary"
              type="textarea"
              id="summary"
              value={form.summary}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup className="my-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Author</InputGroupText>
            </InputGroupAddon>
            <Input
              name="author"
              type="text"
              id="author"
              value={form.author}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup className="my-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rating</InputGroupText>
            </InputGroupAddon>
            <Input
              name="rating"
              type="select"
              id="rating"
              value={form.rating}
              onChange={onChange}
            >
              <option value="1.0">1.0</option>
              <option value="1.5">1.5</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
            </Input>
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              props.addBook(form);
              setNewBookModal(false);
            }}
          >
            Add Book
          </Button>{" "}
          <Button color="secondary" onClick={toggleNewBookModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddBook;
