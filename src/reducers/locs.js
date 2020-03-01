const locs = (state = [], action) => {
  switch (action.type){
    case 'ADD_LOC' : return [...state, action.location];
    case 'DELETE_LOC': return state.filter((loc) => loc !== action.location);
    default: return state;
  }
}

export default locs;