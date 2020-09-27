import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    // when we restart we 
})

const withRedirect = (Component) => {
    const withRedirectInner = (props) => {
        // need to correct - id is exess
        if (!props.isAuth) return <Redirect to='/Login' />
        return <Component {...props} />
    }
    return connect(mapStateToProps)(withRedirectInner);
}



export default withRedirect;