import {connect} from 'react-redux'
import ScreenBell from '../Screens/Bell'
import { getTest } from "../Modules/login/reducer";
const mapStateToProps= state =>({
    ...state
})
const mapDispatchToProps = {
    getTest,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScreenBell)