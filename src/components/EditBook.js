import React from "react";
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

const EditBook = props => {
  const onChange = e => {
    e.preventDefault();
    props.setEditBookData({
      ...props.editBookData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <Modal isOpen={props.editBookModal} toggle={props.toggleEditBookModal}>
        <ModalHeader toggle={props.toggleEditBookModal}>Edit Book</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>
            <Input
              name="title"
              type="text"
              id="title"
              value={props.editBookData.title}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Summary</InputGroupText>
            </InputGroupAddon>
            <Input
              name="summary"
              type="textarea"
              id="summary"
              value={props.editBookData.summary}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Author</InputGroupText>
            </InputGroupAddon>
            <Input
              name="author"
              type="text"
              id="author"
              value={props.editBookData.author}
              onChange={onChange}
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Rating</InputGroupText>
            </InputGroupAddon>
            <Input
              name="rating"
              type="text"
              id="rating"
              value={props.editBookData.rating}
              onChange={onChange}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={e => {
              e.preventDefault();
              props.updateBook(props.editBookData.id, props.editBookData);
            }}
          >
            Update Book
          </Button>
          <Button color="secondary" onClick={props.toggleEditBookModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditBook;
