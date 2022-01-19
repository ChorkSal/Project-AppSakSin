import {connect} from 'react-redux'
import ScreenHowtobuy from '../Screens/Howtobuy'
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
)(ScreenHowtobuy)