import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

describe('Tests for component ValidEmail', () => {
    it('Caso o email seja válido.', () => {
        const EMAIL_USER = 'email@email.com';
        render(<ValidEmail email={ EMAIL_USER } />);
        const isValid = screen.getByText('Email Válido');
        expect(isValid).toBeInTheDocument();
    });  
    it('Caso o email seja inválido.', () => {
        const EMAIL_USER = 'emailerrado';
        render(<ValidEmail email={ EMAIL_USER } />);
        const isValid = screen.getByText('Email Inválido');
        expect(isValid).toBeInTheDocument();
    });
    it('Mensagem de email não aparece antes do email ser enviado', () => {
        render(<ValidEmail email='' />);    
        expect(screen.queryByText('Email Válido')).not.toBeInTheDocument();
        expect(screen.queryByText('Email Inválido')).not.toBeInTheDocument();
    })
})


