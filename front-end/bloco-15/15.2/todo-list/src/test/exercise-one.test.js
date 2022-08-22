import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const buttonTask = screen.getByRole('button');

    expect(buttonTask).toBeInTheDocument();
    expect(buttonTask).toHaveTextContent('Adicionar');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    render(<App />);
    const TASK_USER = 'Work today';
    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonTask = screen.getByRole('button');

    userEvent.type(inputTask, TASK_USER);
    userEvent.click(buttonTask);

    expect(screen.getByText(TASK_USER)).toBeInTheDocument();
  });
});
