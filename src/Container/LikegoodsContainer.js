import {connect} from 'react-redux'
import ScreenLikegoods from '../Screens/Likegoods'
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
)(ScreenLikegoods)