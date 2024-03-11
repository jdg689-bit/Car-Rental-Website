const MAPS_API_KEY = 'AIzaSyB0mGHNwNBDZFu-Bgns5ZBEwyyDQJf5K30';
const MAP_ID = 'bbf2a1f831f5cd93';

import phoneIcon from '../../assets/contact-icons/phone-icon.png';
import emailIcon from '../../assets/contact-icons/mail-icon.png';

import './Locations.css';
import React, { useState, Fragment } from 'react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
} from '@vis.gl/react-google-maps';

export default function App() {
    const coordinates = [{
        name: 'Fast Car Brisbane Airport',
        lat: -27.3874,
        lng: 153.1176,
        phone: '(123)-4567-8923',
        email: 'fastcar@bne.com.au',
    }, {
        name: 'Fast Car Sydney Airport',
        lat: -33.9400,
        lng: 151.1754,
        phone: '(123)-4567-8923',
        email: 'fastcar@syd.com.au',
    }, {
        name: 'Fast Car Melbourne Airport',
        lat: -37.6708,
        lng: 144.8430,
        phone: '(123)-4567-8923',
        email: 'fastcar@mel.com.au',
    }, {
        name: 'Fast Car Gold Coast Airport',
        lat: -28.1646,
        lng: 153.5069,
        phone: '(123)-4567-8923',
        email: 'fastcar@ool.com.au',
    }, {
        name: 'Fast Car Cairns Airport',
        lat: -16.8778,
        lng: 145.7499,
        phone: '(123)-4567-8923',
        email: 'fastcar@cns.com.au',
    }, {
        name: 'Fast Car Perth Airport',
        lat: -31.9385,
        lng: 115.9672,
        phone: '(123)-4567-8923',
        email: 'fastcar@per.com.au',
    }, {
        name: 'Fast Car Adelaide Airport',
        lat: -34.9462,
        lng: 138.5312,
        phone: '(123)-4567-8923',
        email: 'fastcar@adl.com.au',
    }, {
        name: 'Fast Car Darwin Airport',
        lat: -12.4132,
        lng: 130.8813,
        phone: '(123)-4567-8923',
        email: 'fastcar@dar.com.au',
    }, {
        name: 'Fast Car Hobart Airport',
        lat: -42.8375,
        lng: 147.5117,
        phone: '(123)-4567-8923',
        email: 'fastcar@hob.com.au',
    }];

    const [openWindow, setOpenWindow] = useState(null);

    return (
        <APIProvider apiKey={MAPS_API_KEY}>
            <div id='map-container'>
                <Map 
                    defaultZoom={5} 
                    defaultCenter={{lat: -26.284304, lng: 133.689989}} // BNE Airport
                    mapId={MAP_ID}
                    
                >
                    {coordinates.map((location) => {
                        return (
                                <AdvancedMarker
                                    key={location.name}
                                    position={{lat: location.lat, lng: location.lng}} 
                                    onClick={() => setOpenWindow(location)}>
                                </AdvancedMarker>
                        )}
                    )}

                    {openWindow && (
                        <InfoWindow 
                            position={{lat: openWindow.lat, lng: openWindow.lng}} 
                            onCloseClick={() => setOpenWindow(null)}>
                            <h4>{openWindow.name}</h4>
                            <ul style={{listStyle: 'none', paddingLeft:'20px'}}>
                                <li>
                                    <img className='contact-icon' src={phoneIcon} alt='phone-icon'></img> 
                                    <p>{openWindow.phone}</p>
                                </li>
                                <li>
                                    <img className='contact-icon' src={emailIcon} alt='email-icon'></img> 
                                    <p>{openWindow.email}</p>
                                </li>
                            </ul>
                        </InfoWindow>
                    )}

                </Map>

            </div>
        </APIProvider>
    )
}