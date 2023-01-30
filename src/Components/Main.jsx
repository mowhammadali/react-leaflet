import React from 'react';

// components
import Map from './Map';
import GeoJson from './GeoJson';

// styles
import { MainContainer } from '../Styles/Custom/Main';

const Main = () => {
    return (
        <MainContainer>
            <Map />
            <GeoJson />
        </MainContainer>
    );
};

export default Main;