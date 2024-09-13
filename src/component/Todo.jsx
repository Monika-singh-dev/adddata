import { Flex, IconButton, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTodos([task, ...todos]);
    }

    setTask("");
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <Flex>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            backgroundColor: "lightgray",
            border: "none",
            margin: "5px",
            // display: "flex",
            justifyContent: "space-between",
            padding: "2px",
            alignItems: "center",
          }}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Done"
          fontSize="20px"
          icon={<FaCheckCircle />}
          onClick={addTodo}
        />
      </Flex>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "lightgray",
              border: "1px solid gray",
              margin: "5px",
              display: "flex",
              justifyContent: "space-between",
              padding: "2px",
              alignItems: "center",
            }}
          >
            {index + 1} {"-"} {todo}{" "}
            <IconButton
              variant="solid"
              colorScheme="red"
              aria-label="Done"
              fontSize="20px"
              icon={<MdDelete />}
              onClick={() => removeTodo(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
