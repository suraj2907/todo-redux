import logo from "./logo.svg";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//components
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <Container>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
