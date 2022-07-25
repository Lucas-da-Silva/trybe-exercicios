import React, { Component } from 'react'

class Email extends Component {
    render() {
        const { email, handleChange, handleError } = this.props; 

        let error = undefined;
        if(email.length > 20) {
            console.log('oi')
            error = '';
        }

        return (
            <label htmlFor="input-email">
                Email: 
                <input type="email" 
                 name="email" 
                 value={ email } 
                 id="input-email" 
                 onChange={ handleChange }
                />
                {error !== undefined ? handleError : error}
            </label>
        )
    }
}

export default Email;
