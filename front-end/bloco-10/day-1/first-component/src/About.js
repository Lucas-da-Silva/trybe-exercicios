import React, { Component } from 'react';

class About extends Component {
    render() {
        const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Unix'];
        const jsxSkills = skills.map((skill) => <li>{skill}</li>);

        return <div>
            <h1>Lucas</h1>
            <p>Gosto de estudar, e react parece MARAVILHOSO.</p>
            <h2>Minhas Habilidades</h2>
            <ul>{jsxSkills}</ul>
        </div>
    }
}

export default About
