import React, { Component } from 'react';

class Content extends Component {
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];

          const jsxConteudos = conteudos.map(({ conteudo, bloco, status }) => <div className='card'>
            <p>O conteúdo é: {conteudo} <br></br>
          Status: {status} <br></br>
          Bloco: {bloco}</p>
          </div>) 

          return jsxConteudos;
    }
}

export default Content
