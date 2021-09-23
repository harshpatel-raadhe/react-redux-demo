import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../Constants/UserConstant";

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: return {
            error: '',
            user:[],
            loading: true
        }

        case GET_USER_SUCCESS: return {
            loading: false,
            user: action.payload,
            error:''
        }

        case GET_USER_FAILURE: return {
            loading: false,
            user:[],
            error: action.payload
        }
        default: return state
    }
}

export default userReducer