import React from "react";
import { Button } from "react-bootstrap";

export function TodolistView({ todoData, setTodoData, setTodo, setTodoId }) {
  const handleDelete = (id) => {
    const deleted = todoData.filter((items, index) => items.id !== id);
    setTodoData(deleted);
  };
  const handleUpdate = (id) => {
    const updateTodo = todoData.find((item, index) => item.id === id);
    setTodo(updateTodo.title);
    setTodoId(updateTodo.id);
  };
  const handleDone = (id, complete) => {
    const done = todoData.map((items, index) =>
      items.id === id ? { ...items, complete: !complete } : items
    );
    setTodoData(done);
  };
  console.log(todoData);
  return (
    <>
      {todoData?.map((item, index) => {
        // alert(JSON.stringify(item));
        return (
          <div key={index}>
            <h3
              style={
                item.complete
                  ? { textDecorationLine: "line-through" }
                  : { textDecorationLine: "" }
              }
            >
              {item.title}
            </h3>
            <Button
              variant="success"
              className="h-25 mx-2"
              onClick={() => handleDone(item.id, item.complete)}
            >
              {item.complete ? "Undone" : "Done"}
            </Button>
            <Button
              variant="info"
              className="h-25 mx-2"
              onClick={() => handleUpdate(item.id)}
            >
              Update
            </Button>
            <Button
              variant="warning"
              className="h-25"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
}
