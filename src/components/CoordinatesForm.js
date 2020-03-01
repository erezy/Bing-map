import React, {useEffect, useState} from 'react'
import { Button, Form, FormGroup, Radio, FormControl} from 'react-bootstrap'
import {mapManager} from "./BingMap";

const CoordinatesForm = ({onSubmit}) => {
    const [searchType, setSearchType] = useState('coords');
    const [lan, setLan] = useState('');
    const [lon, setLon] = useState('');

    useEffect(() => {
        mapManager && searchType === 'place' && mapManager.setAutoSuggest((loc) => {
            setLan(loc.location.latitude.toString());
            setLon(loc.location.longitude.toString());
        });
    },[searchType]);

    return (
        <Form
            onSubmit={e => {
                e.preventDefault();
                if (!lan.trim() || !lon.trim()) {
                    return;
                }
                onSubmit(Number(lan), Number(lon));
                setLan('');
                setLon('');
            }}
        >
            <h1>Coordinates Form</h1>
            <FormGroup>
                <Radio name="searchType" checked={searchType === 'coords'}
                       onChange={() => setSearchType('coords')}>Add by coords</Radio>
                <Radio name="searchType" checked={searchType === 'place'}
                       onChange={() => setSearchType('place')}>Add by place</Radio>
            </FormGroup>
            {searchType === 'coords' ? (
                <FormGroup>
                    <FormControl type="text" placeholder="Latitude" value={lan} onChange={(e) => setLan(e.target.value)}/>
                    <FormControl type="text" placeholder="Longitude" value={lon} onChange={(e) => setLon(e.target.value)}/>
                </FormGroup>
            ) : (
                <div id='searchBoxContainer'><FormControl type= 'text' id= 'searchBox'/></div>
            )
            }
            <Button type="submit" className="add-button" bsStyle="primary">Submit Coords</Button>
        </Form>
    )
}

export default CoordinatesForm;