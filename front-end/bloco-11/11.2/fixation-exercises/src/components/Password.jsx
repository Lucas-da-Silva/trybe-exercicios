import React, { Component } from 'react';

class Password extends Component {
    render() {
        const { password, handleChange } = this.props;

        let error = undefined;
        if(password.length > 0 && password.length < 5) {
            error = 'Minimum characters is 5';
        }
        if(password.length > 10) {
            error = 'Maximum characters is 10'
        }

        return (
            <label htmlFor="input-password">
                Password: 
                <input 
                 type="password" 
                 name="password"
                 value={ password } 
                 id="input-password" 
                 onChange={ handleChange }
                />
                <span>{error !== undefined ? error : ''}</span>
            </label>
        )
    }
}

export default Password;
