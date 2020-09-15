import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const withRedirect = (Component) => {
    const withRedirectInner = (props) => {
        if (!props.isAuth) return <Redirect to='/Login' />
        return <Component {...props} />
    }
    return connect(mapStateToProps)(withRedirectInner)
}



export default withRedirect