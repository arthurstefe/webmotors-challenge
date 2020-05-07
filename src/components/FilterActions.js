import React from 'react';

export default class FilterActions extends React.Component {
    
    render() {
        return (
            <div className="filter-actions">
                { this.props.children }
            </div>
        )
    }
}