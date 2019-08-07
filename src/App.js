import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
    // Initialize state
    state = { projects: [] };

    // On load
    componentDidMount() {
        this.getProjects();
    }

    // Set state with our projects
    getProjects = () => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({projects}));
    }

    render() {
        const { projects } = this.state;

        return (
            <div className="App">

                <h1>Hi, my name is PABLO</h1>
                <h3>Estoy un developer</h3>

                <h4>Aqui es mi projects</h4>

                {
                    projects.length ? (
                        projects.map((project, index) => (
                            <div className="tile" key={project.name}>
                                <p>
                                  <Button 
                                    variant="contained"
                                    href={project.html_url}
                                    target="_blank">
                                    {project.name}
                                  </Button></p>
                                <p>{project.description}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            I don't have any projects
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;