import { pricingData } from "../../../API"
import { GET_PRICING_DATA } from "../../actions/constants"
import { getPricingFailedAction, getPricingRequestAction, getPricingSuccessAction } from "../../actions/pricingActions"

const initState = {
    pricingData: null,
    pricingError: '',
    pricingLoading: false,
    pricingSuccess: null
}

const pricingReducer = (state = initState, { type, payload }) => {
    switch(type){
        case `${GET_PRICING_DATA}_REQUEST`: {
            return {
                ...state,
                pricingLoading: true
            }
        }
        case `${GET_PRICING_DATA}_SUCCESS`: {
            return {
                ...state,
                pricingData: payload?.data,
                pricingError: '',
                pricingLoading: false,
                pricingSuccess: true
            }
        }
        case `${GET_PRICING_DATA}_FAILED`: {
            return {
                ...state,
                pricingData: null,
                pricingError: payload,
                pricingLoading: false,
                pricingSuccess: false
            }
        }
        default: {
            return state
        }
    }
}

export const pricingRequest = () => dispatch => {
    dispatch(getPricingRequestAction());

    pricingData()
    .then(res => {
        dispatch(getPricingSuccessAction(res))
    })
    .catch(err => {
        dispatch(getPricingFailedAction(err))
    })
} 

export default pricingReducer