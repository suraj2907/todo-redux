import React, { useState } from "react";

import {
  Container,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Button,
} from "reactstrap";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";
import { v4 } from "uuid";
import todo from "../reducer/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Add some todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle("");
  };

  return (
    <Form onChange={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your next Todo"
          />
          <Button color="primary" onClick={handleSubmit}>
            Add
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
