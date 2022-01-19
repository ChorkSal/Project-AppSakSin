import {connect} from 'react-redux'
import ScreenLogin from '../Screens/Login'
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
)(ScreenLogin)