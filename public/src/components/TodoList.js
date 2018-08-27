import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, index) => (
        <TodoItem key={`${index}.${item}`} name={item} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
TodoList.defaultProps = {
  todos: []
};

export default TodoList;
