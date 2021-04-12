import { servicesData } from "../../../API"
import { GET_SERVICES_DATA } from "../../actions/constants"
import { getServicesFailedAction, getServicesRequestAction, getServicesSuccessAction } from "../../actions/servicesActions"

const initState = {
    servicesData: null,
    servicesError: '',
    servicesLoading: false,
    servicesSuccess: null
}

const servicesReducer = (state = initState, { type, payload }) => {
    switch(type){
        case `${GET_SERVICES_DATA}_REQUEST`: {
            return {
                ...state,
                servicesLoading: true
            }
        }
        case `${GET_SERVICES_DATA}_SUCCESS`: {
            return {
                ...state,
                servicesData: payload?.data,
                servicesError: '',
                servicesLoading: false,
                servicesSuccess: true
            }
        }
        case `${GET_SERVICES_DATA}_FAILED`: {
            return {
                ...state,
                servicesData: null,
                servicesError: payload,
                servicesLoading: false,
                servicesSuccess: false
            }
        }
        default: {
            return state
        }
    }
}

export const servicesRequest = () => dispatch => {
    dispatch(getServicesRequestAction());

    servicesData()
    .then(res => {
        dispatch(getServicesSuccessAction(res))
    })
    .catch(err => {
        dispatch(getServicesFailedAction(err))
    })
} 

export default servicesReducer