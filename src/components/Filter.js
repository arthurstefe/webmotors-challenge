import React from 'react';

export default class Filter extends React.Component {
    
    render() {
        return (
            <div className="filter">
                { this.props.children }
            </div>
        )
    }
}