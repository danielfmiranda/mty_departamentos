import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GMap} from 'primereact/gmap';
import '../Css/Map.css'

class Map extends Component {
    constructor() {
        super();
    }

    //
    // componentWillMount() {
    //     loadGoogleMaps(() => {
    //         // Work to do after the library loads.
    //         this.setState({googleMapsIsReady: true});
    //     });
    // }

    render() {
        const options = {
            center: {lat: 25.663457, lng: -100.322995},
            zoom: 12.5,
              streetViewControl: false,
            mapTypeControl: false,
            styles: [
                {
                    featureType: 'road',
                    elementType: 'labels.icon',
                    stylers: [{visibility: 'off'}]
                }

            ]


        };

        return (
            <div className={'container'}>
                <GMap className={'googleMapComponent'} options={options}/>
            </div>
        )
    }
}

Map.propTypes = {};

export default Map;
//
// const loadGoogleMaps = (callback) => {
//     const existingScript = document.getElementById('googleMaps');
//
//     if (!existingScript) {
//         const script = document.createElement('script');
//         script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAXwDfdGmeraVw0pw0PuMG1NgZycRtDBc&libraries=places';
//         script.id = 'googleMaps';
//         document.body.appendChild(script);
//
//         script.onload = () => {
//             if (callback) callback();
//         };
//     }
//
//     if (existingScript && callback) callback();
// };