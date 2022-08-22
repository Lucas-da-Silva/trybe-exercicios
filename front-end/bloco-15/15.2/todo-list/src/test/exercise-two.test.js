import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonTask = screen.getByRole('button');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(buttonTask);
    });

    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const string = 'Clear the garden';
    render(<Item content={ string } />);

    expect(screen.getByText(string)).toBeInTheDocument();
  });
});
