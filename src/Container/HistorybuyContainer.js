import {connect} from 'react-redux'
import ScreenHistorybuy from '../Screens/Historybuy'
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
)(ScreenHistorybuy)