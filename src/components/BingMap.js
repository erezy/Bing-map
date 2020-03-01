import React, {useEffect, useRef} from "react";
import {loadBingApi, Microsoft, store} from "../index";
import MapManager from "../services/MapManager";

const BingMap  = () => {
    const mapRef = useRef();

    useEffect(() => {
        loadBingApi().then(() => {
            mapManager = new MapManager(initMap());
            mapManager.setLocsOnMap(store.getState().locs);
        });
    }, []);


    const initMap = () => {
        return  new Microsoft.Maps.Map(mapRef.current);
    };

    return (
        <div ref={mapRef} className="map" />
    )
};

export let mapManager;
export default BingMap;