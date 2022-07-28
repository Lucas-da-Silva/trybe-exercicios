import React, { Component } from 'react';

class PersonData extends Component {
  
  shouldComponentUpdate({ person }) {
    console.log('Should Component Update')
    const { dob: { age } } = person;
    if (age > 50) {
      return false;
    }
    return true;
  }

  render() {
  const { person } = this.props; 
  const { name: { first, last}, email, dob: { age }, picture: { medium } } = person;
  return(
      <div>
        <img src={medium} alt={`${first} ${last}`} />
        <p>Name: {`${first} ${last}`}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
    )
  }
}

export default PersonData;
