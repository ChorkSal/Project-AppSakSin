import {connect} from 'react-redux'
import ScreenEnteraddress from '../Screens/Enteraddress'
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
)(ScreenEnteraddress)