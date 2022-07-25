import React, { Component } from "react";
import SelectStates from "./SelectStates";

class PersonalData extends Component {
  render() {
    
    const { handleChange, values, validationCity } = this.props;
    const { name, address, email, city, cpf } = values;

    if(name.lenght > 40) {
      alert('Limite de 40 caracteres.');
    }

    if(email.lenght > 50) {
      alert('Limite de 50 caracteres.');
    }

    if(cpf.lenght > 11) {
      alert('Limite de 11 caracteres.');
    }

    if(address.lenght > 200) {
      alert('Limite de 200 caracteres.');
    }

    if(city.lenght > 28) {
      alert('Limite de 28 caracteres.');
    }

    return (
      <fieldset className="personal-data">
        <legend>Dados pessoais</legend>
        <div className="input-name">
          <label htmlFor="input-name">Nome: </label>
          <input type="text" name="name" id="input-name" onChange={handleChange} 
            value={name.toUpperCase()} required />
        </div>

        <div className="input-email">
          <label htmlFor="input-email">Email: </label>
          <input type="text" name="email" id="input-email" onChange={handleChange} required />
        </div>

        <div className="input-cpf">
          <label htmlFor="input-cpf">Cpf: </label>
          <input type="number" name="cpf" id="input-cpf" onChange={handleChange} required />
        </div>

        <div className="input-address">
          <label htmlFor="input-address">Endereço: </label>
          <input 
           type="text" 
           name="address" 
           id="input-address" 
           value={address.normalize("NFD").replace(/[^a-zA-Z0-9\s]/g, "")}
           onChange={handleChange} 
           required />
        </div>

        <div className="input-city">
          <label htmlFor="input-city">Cidade: </label>
          <input 
           type="text" 
           name="city" 
           id="input-city"
           value={city} 
           onBlur={validationCity} 
           onChange={handleChange} required />
        </div>

        <div className="select-state">
          <label htmlFor="select-state">Estado: </label>
          <select name="state" id="select-state" onChange={handleChange} required >
            <SelectStates />
          </select>
        </div>

        <div>
          <label htmlFor="input-house">Casa: </label>
          <input type="radio" value="Casa" name="local" id="input-house" onChange={handleChange} />
          <label htmlFor="input-apartment">Apartamento: </label>
          <input
            type="radio"
            value="Apartamento"
            name="local"
            id="input-apartment"
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
    );
  }
}

export default PersonalData;
