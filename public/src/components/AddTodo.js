import React from "react";
import PropTypes from "prop-types";

const AddTodo = ({ onClick }) => {
  let inputRef = null;

  const onClickHandler = () => {
    onClick(inputRef.value);

    inputRef.value = "";
  };

  return (
    <div>
      <input type="text" ref={el => (inputRef = el)} />
      <button onClick={onClickHandler}>Add</button>
    </div>
  );
};

AddTodo.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddTodo;
