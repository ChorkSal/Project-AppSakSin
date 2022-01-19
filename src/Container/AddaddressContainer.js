import {connect} from 'react-redux'
import ScreenAddaddress from '../Screens/Addaddress';
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
)(ScreenAddaddress)