import React from 'react';
import { formatCurrency } from '../common/formaters';

export default class VehiclesCard extends React.Component {
    
    render() {
        return (
            <div key={this.props.vehicle.ID} className="vehicle-card">
                <div className="vehicle-image">
                    <div className="image-containter">
                        <div className="image-wrap">
                            <img src={this.props.vehicle.Image} alt={this.props.vehicle.Model} />
                        </div>    
                    </div>
                </div>
                <div className="vehicle-info">
                    <div className="brand-model-version">
                        <h2>{this.props.vehicle.Make} {this.props.vehicle.Model}</h2>
                        <h3>{this.props.vehicle.Version}</h3>
                    </div>
                    <div className="price-year">
                        <strong className="price">
                            {formatCurrency(this.props.vehicle.Price)}
                        </strong>
                        <div className="year-km">
                            <div>
                                <span>{this.props.vehicle.YearFab}/{this.props.vehicle.YearModel}</span>
                            </div>
                            <div>
                                <span>{this.props.vehicle.KM} km</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}