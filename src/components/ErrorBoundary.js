import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    componentDidCatch() {

    }

    render() {
        return this.props.children;
    }
}

