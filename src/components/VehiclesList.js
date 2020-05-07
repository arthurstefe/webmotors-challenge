import React from 'react';
import VehiclesCard from './VehiclesCard';

export default class VehiclesList extends React.Component {
    
    render() {
        return (
            <div className="vehicles-list">
                { this.props.vehicles.map(vehicle => 
                    <VehiclesCard key={vehicle.ID} vehicle={vehicle}/>
                )}
            </div>
        )
    }
}