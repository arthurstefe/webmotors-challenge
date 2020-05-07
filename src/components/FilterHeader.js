import React from 'react';

export default class FilterHeader extends React.Component {
    
    render() {
        return (
            <div className="filter-header">
                { this.props.children }
            </div>
        )
    }
}