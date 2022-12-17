import React, { useState } from "react";
import { TodolistView } from "../TodolistView";
import { Card, Button, Form } from "react-bootstrap";
export function Todolist() {
  const [todo, setTodo] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [todoId, setTodoId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Please add todo");
    } else if (todoId === "") {
      setTodoData((oldArray) => [
        ...oldArray,
        { id: ids, title: todo, complete: false },
      ]);
      setTodo("");
      setTodoId("");
    } else {
      const findId = todoData?.find((item, index) => item.id === todoId);
      const findIds = todoData?.map((item, index) =>
        item.id === findId.id
          ? (item = { id: findId.id, title: todo, complete: false })
          : { ...item }
      );
      setTodoData(findIds);
      // const newTodoItems = [...todoData];
      // console.log("newTodoItems", newTodoItems);
      // let todoObj = { title: todo.title, id: findIds, complete: false };
      // console.log("todoObj", todoObj);
      // newTodoItems.splice(findIds, 1, todoObj);
      // setTodoData(newTodoItems);
      setTodo("");
      setTodoId("");
    }
  };
  const ids = Math.floor(Math.random(100) * 100);
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Todolist App</Card.Title>
          <Form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center gap-1"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={todo}
                placeholder="something text"
                onChange={(event) => setTodo(event.target.value)}
              />
              {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
            </Form.Group>
            {/* <div style={{ marginTop: "32px" }}> */}
            <Button variant="primary" type="submit" className="h-25">
              {todoId ? "Update" : "Add"}
            </Button>
            {/* </div> */}
          </Form>
          <Card.Text>
            <TodolistView
              todoData={todoData}
              setTodoData={setTodoData}
              setTodo={setTodo}
              setTodoId={setTodoId}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
