import React from 'react';
import car from './../assets/images/car.svg';
import moto from './../assets/images/moto.svg';

export default class VehicleButton extends React.Component {

    render() {
        return (
            <div className={`vehicle-button ${this.props.selected ? 'active' : ''}`} 
                onClick={this.props.onClick}>
                <img src={this.props.icon === 'car' ? car : moto} alt="car" />
                <div>
                    <span>COMPRAR</span>
                    <h2>{this.props.label}</h2>
                </div>
            </div>
        );
    }

}