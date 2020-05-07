import React from 'react';

export default class FilterButton extends React.Component {

    render() {
        return (
            <button {...this.props}>{this.props.label}</button>
        );
    }

}