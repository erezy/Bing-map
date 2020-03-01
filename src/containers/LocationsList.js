import { connect } from 'react-redux'
import { deleteLoc } from '../actions'
import CoordinatesList from '../components/CoordinatesList'

const mapStateToProps = state => ({
  locs: state.locs
})
const mapDispatchToProps = dispatch => ({
  onDelete: loc => dispatch(deleteLoc(loc))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoordinatesList)