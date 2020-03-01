import  {Microsoft} from "../index";

class MapManager {
    constructor(map) {
        this.map = map;
        this.first = true;
    }

    addLocation(lan, lon) {
        return new Microsoft.Maps.Location(lan, lon);
    }

    clear() {
        this.map.entities.clear();
    }

    setAutoSuggest(callback) {
        Microsoft.Maps.loadModule('Microsoft.Maps.AutoSuggest', {
            callback: onLoad,
            errorCallback: onError
        });
        function onLoad () {
            const options = { maxResults: 5 };
            const manager = new Microsoft.Maps.AutosuggestManager(options);
            manager.attachAutosuggest('#searchBox', '#searchBoxContainer', callback);
        }
        function onError (message) {
            console.log("Error: ", message);
        }
    }

    setLocsOnMap(locs) {
        this.clear();
        locs.forEach((loc) => {
            this.map.entities.push(new Microsoft.Maps.Pushpin(loc,null))
        });
        if (locs.length > 2) {
            this.map.entities.push(new Microsoft.Maps.Polygon(locs,null))
        }
        const bounds = Microsoft.Maps.LocationRect.fromLocations(locs);
        this.map.setView({ bounds: bounds });
    }
}

export default MapManager;
