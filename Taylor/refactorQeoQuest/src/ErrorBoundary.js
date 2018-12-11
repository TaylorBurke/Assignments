import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
       this.state({
           hasError: true,
           errorInfo: info
       })
    }

    render() {
        if (this.state.hasError) {
            return <h3>You borked it.</h3>;
        }
        return this.props.children;
    }
}


export default ErrorBoundary;