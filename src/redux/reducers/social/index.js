import { socialData } from "../../../API"
import { GET_SOCIAL_DATA } from "../../actions/constants"
import { getSocialFailedAction, getSocialRequestAction, getSocialSuccessAction } from "../../actions/socialActions"

const initState = {
    socialData: null,
    socialError: '',
    socialLoading: false,
    socialSuccess: null
}

const socialReducer = (state = initState, { type, payload }) => {
    switch(type){
        case `${GET_SOCIAL_DATA}_REQUEST`: {
            return {
                ...state,
                socialLoading: true
            }
        }
        case `${GET_SOCIAL_DATA}_SUCCESS`: {
            return {
                ...state,
                socialData: payload?.data,
                socialError: '',
                socialLoading: false,
                socialSuccess: true
            }
        }
        case `${GET_SOCIAL_DATA}_FAILED`: {
            return {
                ...state,
                socialData: null,
                socialError: payload,
                socialLoading: false,
                socialSuccess: false
            }
        }
        default: {
            return state
        }
    }
}

export const socialRequest = () => dispatch => {
    dispatch(getSocialRequestAction());

    socialData()
    .then(res => {
        dispatch(getSocialSuccessAction(res))
    })
    .catch(err => {
        dispatch(getSocialFailedAction(err))
    })
} 

export default socialReducer