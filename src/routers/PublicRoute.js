import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


const PublicRoute = ({
    isAuthenticated,
    component:Component, //esto es para crear un componente en Mayuscula
    ...rest //recibo el resto de parametros
}) => {
    return (
        <Route {...rest} component={(props) => (
            (!isAuthenticated) ? <Component {...props}/> : <Redirect to='/' />
        )}/>
            

  

    )
}

PublicRoute.prototype={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute
