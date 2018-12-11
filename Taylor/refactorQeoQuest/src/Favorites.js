import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: '',
        }

    }
    render() {





        return (
            <ErrorBoundary>
                <div className="favorites">
                    <ErrorBoundary>
                        {null.props}
                    </ErrorBoundary>
                </div>
            </ErrorBoundary>
        )
    }

}

export default Favorites;