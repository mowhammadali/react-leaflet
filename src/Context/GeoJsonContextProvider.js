import React from 'react';
import { geoJson } from '../Map/geoJson';

export const GeoJsonContext = React.createContext(); 

const GeoJsonContextProvider = ({children}) => {
    return (
        <GeoJsonContext.Provider value={{geoJson}}>
            {children}
        </GeoJsonContext.Provider>
    );
};

export default GeoJsonContextProvider;