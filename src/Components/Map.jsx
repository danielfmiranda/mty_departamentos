import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Css/Map.css'

class Map extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={'mapContainer'}>
                <h6 style={{textAlign:'center',paddingTop:'0px !important',marginTop:'0px !important'}}> This will be the map component</h6>

            </div>
        );
    }
}

Map.propTypes = {};

export default Map;
