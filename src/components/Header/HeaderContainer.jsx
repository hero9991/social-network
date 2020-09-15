import React, {useEffect} from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUser } from '../../Redux/auth-reducer';


// class HeaderContainer extends React.Component {
//     componentDidMount() {
//         this.props.getAuthUser();
//     }

//     render() {
//         return <Header {...this.props} />;
//     }
// }



const HeaderContainer = (props) => {
    useEffect (() => {
        props.getAuthUser();
    }, [])
    return <Header {...props} />;
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { getAuthUser})(HeaderContainer);