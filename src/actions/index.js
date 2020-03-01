
import {mapManager} from "../components/BingMap";

export const addLoc = (lat, lon) => {
  return {
    type: 'ADD_LOC',
    location: mapManager.addLocation(lat, lon)
  }
};

export const deleteLoc= (location) => {
    return {
        type: 'DELETE_LOC',
        location
    }
};

