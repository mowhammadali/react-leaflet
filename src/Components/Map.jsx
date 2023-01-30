import React, { useContext  , useEffect} from 'react';

// leaflet
import { MapContainer , TileLayer , Marker , Popup } from 'react-leaflet';
import { defaultIcons } from '../assets/icons/defaultIcons';
import L from 'leaflet';

// styles
import { Container } from '../Styles/Custom/Map';

// components
import InterActiveMap from './InterActiveMap';

// import contexts
import { GeoJsonContext } from '../Context/GeoJsonContextProvider';

const Map = () => {

    const center = [51.483414, -0.115172];

    // data
    const { geoJson } = useContext(GeoJsonContext);

    // enable marker icon
    useEffect(() => {
        const L = require("leaflet");
        
        delete L.Icon.Default.prototype._getIconUrl;
        
        L.Icon.Default.mergeOptions({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });
    }, []);

    return (
        <Container>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    geoJson.features.map(feature => {
                        const { coordinates , type} = feature.geometry;
                        const { category } = feature.properties;
                        return(
                            <Marker key={feature.id} icon={defaultIcons} position={center}>
                                <Popup>
                                    <p>
                                        <strong>Type: </strong>{type}<br />
                                        <strong>Category: </strong>{category}<br />
                                        <strong>Coordinates: </strong>{coordinates}
                                    </p>
                                </Popup>
                            </Marker>
                        )
                    })
                }
                <InterActiveMap />
            </MapContainer>,
        </Container>
    );
};

export default Map;