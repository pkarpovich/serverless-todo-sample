import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ name }) => {
  return <li>{name}</li>;
};

TodoItem.propTypes = {
  name: PropTypes.string.isRequired
};
TodoItem.defaultProps = {
  name: "undefined"
};

export default TodoItem;
