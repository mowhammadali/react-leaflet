import React, { useContext } from 'react';

// styles
import { GeoJsonContainer } from '../Styles/Custom/GeoJson';

// import contexts
import { GeoJsonContext } from '../Context/GeoJsonContextProvider';

const GeoJson = () => {
    const { geoJson } = useContext(GeoJsonContext);
    return (
        <GeoJsonContainer>
            <code>
                {JSON.stringify(geoJson)}
            </code>
        </GeoJsonContainer>
    );
};

export default GeoJson;