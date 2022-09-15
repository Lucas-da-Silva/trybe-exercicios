import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      isDisabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo() {
    this.setState({ isDisabled: false });
  }

  removeTodo(todo) {
    this.setState(({ listTodo }) => ({
      listTodo: listTodo.filter((task) => task !== todo),
    }));
  }

  render() {
    const { listTodo, isDisabled } = this.state;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } />
              <button
                onClick={ () => this.selectTodo() }
                type="button"
              >
                Selecionar
              </button>
              <button
                type="button"
                disabled={ isDisabled }
                onClick={ () => this.removeTodo(todo) }
              >
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}
export default App;
