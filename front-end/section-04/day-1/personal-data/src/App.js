import React, { Component } from 'react';
import PersonData from './components/PersonData';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      person: undefined,
    }

  }

  async fetchPerson() {
    this.setState(
      {loading: true}, 
      async () => {
      const url = 'https://api.randomuser.me/';
      const requestUrl = await fetch(url);
      const requestJson = await requestUrl.json();
      const personData = requestJson.results[0];
      
      this.setState({ 
        loading: false, 
        person: personData,
      });
    })
  }

  componentDidMount() {
    this.fetchPerson();
  }

  render() { 
    const { loading, person } = this.state;
    return (
      <div>
        {
          loading ? <div>Carregando...</div> : <PersonData person={person} />
        }
      </div>
    );
  } 
}

export default App;
