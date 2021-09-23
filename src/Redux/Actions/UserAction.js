import axios from "axios"
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "../Constants/UserConstant"

const userRequest = () => {
    return {
        type: GET_USER_REQUEST
    }
}

const userSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    }
}

const userFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        payload: error
    }
}

const fetchUser = () => {
    return (dispatch) => {
        dispatch(userRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((user) => {
                const users = user.data
                dispatch(userSuccess(users))
            })
            .catch((error) => {
                const errorMsg = error.message
                dispatch(userFailure(errorMsg))
            })
    }
}

export { userRequest, userSuccess, userFailure , fetchUser }
