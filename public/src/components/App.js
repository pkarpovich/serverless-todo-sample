import React, { Component, PropTypes } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Loading from "./Loading";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      isLoading: true
    };

    this.onAddHandler = this.onAddHandler.bind(this);
  }

  getTodosFromResp(resp) {
    return Object.entries(resp.data.todos).map(i => i[1].name);
  }

  componentWillMount() {
    axios.get("/api/todos").then(res => {
      const result = this.getTodosFromResp(res);

      this.setState({
        todos: result,
        isLoading: false
      });
    });
  }

  onAddHandler(item) {
    const { todos } = this.state;

    axios
      .post("/api/todos", { name: item })
      .then(res => console.log("res: ", res));

    const newTodos = [...todos, item];

    this.setState({
      todos: newTodos
    });
  }

  render() {
    const { todos, isLoading } = this.state;

    return (
      <div>
        <AddTodo onClick={this.onAddHandler} />
        {isLoading ? <Loading /> : <TodoList todos={todos} />}
      </div>
    );
  }
}

export default App;
