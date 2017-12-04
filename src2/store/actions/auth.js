import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url =
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCAAep-dvwbSAz6K1GRkobOGnPz46RV-Ec'
        if (!isSignup) {
            url =
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCAAep-dvwbSAz6K1GRkobOGnPz46RV-Ec'
        }
        axios
            .post(url, authData)
            .then(response => {
                console.log('------------------------------------')
                console.log(response)
                console.log('------------------------------------')
                dispatch(
                    authSuccess(response.data.idToken, response.data.localId)
                )
            })
            .catch(err => {
                console.log('------------------------------------')
                console.log(err)
                console.log('------------------------------------')
                dispatch(authFail(err))
            })
    }
}
