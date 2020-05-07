import React from 'react';

export default class Checkbox extends React.Component {
    
    render() {
        return (
            <div className={`input-container-${this.props.cols}`}>
                <label className="checkbox-container">{this.props.label}
                    <input type="checkbox" name={this.props.name} value={this.props.value} 
                        checked={this.props.value} onChange={this.props.onChange}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        )
    }
}