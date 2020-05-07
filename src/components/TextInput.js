import React from 'react';

export default class TextInput extends React.Component {
    
    render() {
        return (
            <div className={`input-container-${this.props.cols}`}>
                <input {...this.props} className={`text-input ${this.props.className}`}/>
            </div>
        )
    }
}