import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = authData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios
            .post(
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCAAep-dvwbSAz6K1GRkobOGnPz46RV-Ec',
                authData
            )
            .then(response => {
                console.log('------------------------------------')
                console.log(response)
                console.log('------------------------------------')
                dispatch(authSuccess(response.data))
            })
            .catch(err => {
                console.log('------------------------------------')
                console.log(err)
                console.log('------------------------------------')
                dispatch(authFail(err))
            })
    }
}
