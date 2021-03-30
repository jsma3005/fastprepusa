import { partnersData } from "../../../API"
import { GET_PARTNERS_DATA } from "../../actions/constants"
import { getPartnersRequestAction, getPartnersSuccessAction, getPartnersFailedAction } from "../../actions/partnersActions"

const initState = {
    partnersData: null,
    partnersError: '',
    partnersLoading: false,
    partnersSuccess: null
}

const partnersReducer = (state = initState, { type, payload }) => {
    switch(type){
        case `${GET_PARTNERS_DATA}_REQUEST`: {
            return {
                ...state,
                partnersLoading: true
            }
        }
        case `${GET_PARTNERS_DATA}_SUCCESS`: {
            return {
                ...state,
                partnersData: payload?.data,
                partnersError: '',
                partnersLoading: false,
                partnersSuccess: true
            }
        }
        case `${GET_PARTNERS_DATA}_FAILED`: {
            return {
                ...state,
                partnersData: null,
                partnersError: payload,
                partnersLoading: false,
                partnersSuccess: false
            }
        }
        default: {
            return state
        }
    }
}

export const partnersRequest = () => dispatch => {
    dispatch(getPartnersRequestAction());

    partnersData()
    .then(res => {
        dispatch(getPartnersSuccessAction(res))
    })
    .catch(err => {
        dispatch(getPartnersFailedAction(err))
    })
} 

export default partnersReducer