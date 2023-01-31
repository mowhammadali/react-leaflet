import React, { useEffect } from 'react';

// leaflet
import { TileLayer , useMap } from 'react-leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

const InterActiveMap = () => {

    const map = useMap();

    useEffect(() => {
        map.pm.addControls({
            drawCircleMarker: true,
            drawPolyline: true,
            drawRectangle: true,
            drawPolygon: true,
            drawCircle: true,
            drawMarker: true,
            customControls: true,
            rotateMode: true,
            cutPolygon: true,
            editMode: true,
            dragMode: true,
          });
    } , [])

    return (
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    );
};

export default InterActiveMap;