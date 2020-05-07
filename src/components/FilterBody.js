import React from 'react';

export default class FilterBody extends React.Component {
    
    render() {
        return (
            <div className="filter-body">
                { this.props.children }
            </div>
        )
    }
}