import React from 'react'
import AddLocation from '../containers/AddLocation'
import LocationsList from '../containers/LocationsList'
import BingMap from "./BingMap";

const App = () => (
    <div className="wrapper">
        <div className="panel">
            <AddLocation />
            <LocationsList />
        </div>
        <div className="map-wrap">
            <BingMap />
        </div>
    </div>
);
export default App