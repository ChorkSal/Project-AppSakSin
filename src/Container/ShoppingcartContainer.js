import {connect} from 'react-redux'
import ScreenShoppingcart from '../Screens/Shoppingcart'
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
)(ScreenShoppingcart)