import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {mapManager} from "./BingMap"

const CoordinatesList = ({ locs, onDelete }) => {

    useEffect(() => {
        mapManager && mapManager.setLocsOnMap(locs);
    },[locs]);

    return (<div className="locs">
            <h1>Coordinates list</h1>
            {locs.map((loc,index) => (
                <div key={index} className="loc">
                    <div className="locations">{loc.latitude}, {loc.longitude}</div>
                    <Button bsStyle="default" onClick={() => {
                        onDelete(loc)
                    }}><FontAwesomeIcon icon={faTrashAlt}/></Button>
                </div>
            ))
            }
            </div>
          )
};

export default CoordinatesList;