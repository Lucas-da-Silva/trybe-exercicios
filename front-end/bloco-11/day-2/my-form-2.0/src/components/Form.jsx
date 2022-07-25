import React, { Component } from 'react';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import ButtonData from './ButtonData';

class Form extends Component {
    constructor() {
        super()

        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validationCity = this.validationCity.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);

        this.state = {
            name: '',
            email: '',
            cpf: '',
            address: '',
            city: '',
            state: 'Acre',
            local: '',
            areaResumo: '',
            areaCargo: '',
            areaDescription: '',
            mouseEnter: false,
        }
    }

    submitForm(event) {
      event.preventDefault();
      // event.target.innerHTML = '<div><p>Lucas</p></div>'
    }

    handleChange({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    validationCity({ target }) {
      if(parseFloat(target.value)) {
        this.setState({
          city: ''
        });
      }
    }

    mouseEnter() {
      const { mouseEnter } = this.state; 
      if(mouseEnter === false) {
        alert('Preencha com cuidado esta informação.');
      }

      this.setState({
        mouseEnter: true,
      });   
    }

    render() {
        return(
            <form action="GET" onSubmit={this.submitForm}>
                <div></div>
                <PersonalData 
                 validationCity={this.validationCity} 
                 handleChange={this.handleChange} 
                 values={this.state} 
                />
                <LastJob 
                 handleChange={this.handleChange}
                 mouseEnter={this.mouseEnter}
                />
                <ButtonData 
                 values={this.state}
                />
            </form>
        )
    }
}

export default Form;
