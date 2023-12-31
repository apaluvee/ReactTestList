import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href="http://localhost:3000/profiles" className="navbar-brand">Profiles</a></div>
                    <div> <a href="http://localhost:3000/records" className="navbar-brand">Records</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
