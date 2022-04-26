import { useMemo } from "react";
import "./comp_css/map.css";

import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';

export default function Maps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_G_MAPS_API_KEY
    });

    if (!isLoaded) return <div>Loading...</div>
    
    return <Map />
}

function Map() {
    const center = useMemo(() => ({ lat: 20.1776, lng: 85.86075 }), []);

    const circleCenter = [
        {
            idx:1,
            lat: 20.1776,
            lng: 85.86075,
            radius: 12000
        },
        {
            idx:2,
            lat: 20.394844,
            lng: 85.797404,
            radius: 5000
        }
    ]
    
    const options = {
        strokeColor: '#FF0',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillOpacity: 0.4,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        zIndex: 1
    }

    return <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
    >
        <Marker position={center} />
        {circleCenter.map(
            marker => {
                return <Circle
                key={marker.idx}
                center={{ lat: marker.lat, lng: marker.lng }}
                radius={marker.radius}
                options={options}
            />
        })
        }
    </GoogleMap>
}