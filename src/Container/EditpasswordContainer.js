import {connect} from 'react-redux'
import ScreenEditpassword from '../Screens/Editpassword'
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
)(ScreenEditpassword)