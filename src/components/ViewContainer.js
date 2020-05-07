import React from 'react';
import Loader from './Loader';

export default class ViewContainer extends React.Component {
    
    render() {
        return (
            <div className="home">
                <div className="body">
                    <div className="container">
                        { this.props.children }
                    </div>
                </div>
                <Loader loading={this.props.loading} />
            </div>
        )
    }
}