import React from 'react';

export default class SelectInput extends React.Component {
    
    render() {
        return (
            <div className={`input-container-${this.props.cols}`}>
                <select {...this.props} className={`select-input ${this.props.className}`}>
                    <option value="" disabled>{this.props.default}</option>
                    { this.props.options.map(option => <option key={option[this.props.valuefield || 'value']} 
                        value={option[this.props.valuefield || 'value']}>{option[this.props.labelfield || 'label']}</option>) }
                </select>
            </div>
        )
    }
}