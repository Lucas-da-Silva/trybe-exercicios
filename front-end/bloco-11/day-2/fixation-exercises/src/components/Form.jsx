import React, { Component } from 'react';
import Email from './Email';
import Password from './Password';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            select: 'Brazil',
            textarea: '',
            checkbox: false,
            file: '',
            formWithErros: false,
        }
    }

    handleChange = ({ target }) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form action="" className="form">
                <fieldset>
                        <Email email={this.state.email} handleChange={this.handleChange} handleError={ this.handleError }/>
                        <Password password={this.state.password} handleChange={this.handleChange} />
                </fieldset>

                <div>
                    <label htmlFor="select">Country: </label>
                    <select name="select" id="select" onChange={ this.handleChange }>
                        <option value="Brazil">Brazil</option>
                        <option value="Russia">Russia</option>
                        <option value="EUA">EUA</option>
                        <option value="England">England</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="file">File: </label>
                    <input type="file" name="file" id="file" onChange={ this.handleChange } />
                </div>

                <div>
                    <label htmlFor="textarea">Opinion about the site: </label> <br />
                    <textarea 
                     name="textarea" 
                     id="textarea" 
                     cols="30" rows="10"
                     onChange={ this.handleChange }></textarea>
                </div>

                <div>
                    <label htmlFor="checkbox">Would recommend: </label>
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={ this.handleChange } />
                </div>

            </form>
        )
    }
}

export default Form