import React from 'react'
import { connect } from 'react-redux'
import { addLoc } from '../actions'
import CoordinatesForm from "../components/CoordinatesForm";

const AddLocation = ({ dispatch }) => {

  return (
  <div className="row-review">
    <div className="col-review">
      <CoordinatesForm onSubmit={(lat, lon) => {dispatch(addLoc(lat, lon))}} />
    </div>
  </div>
  )
}
export default connect()(AddLocation)