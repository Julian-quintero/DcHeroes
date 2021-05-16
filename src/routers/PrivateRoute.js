import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


const PrivateRoute = ({
    isAuthenticated,
    component:Component, //esto es para crear un componente en Mayuscula
    ...rest //recibo el resto de parametros
}) => {
    return (
        <Route {...rest} component={(props) => (
            (isAuthenticated) ? <Component {...props}/> : <Redirect to='/login' />
        )}/>
            

  

    )
}

PrivateRoute.prototype={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
