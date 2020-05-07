import React from 'react';

export default class Loader extends React.Component {
    
    render() {
        return (
            <>
                { this.props.loading && <div className="loading-overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" 
                        style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto'}} 
                        width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" fill="none" stroke="#f3123c" strokeWidth="10" r="35" 
                            strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(233.314 50 50)">
                            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" 
                                dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                        </circle>
                    </svg>
                </div> }
            </>
        )
    }
}