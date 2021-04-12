import { GET_SERVICES_DATA } from "./constants"

export const getServicesRequestAction = () => {
    return {
        type: `${GET_SERVICES_DATA}_REQUEST`
    }
}

export const getServicesSuccessAction = payload => {
    return {
        type: `${GET_SERVICES_DATA}_SUCCESS`,
        payload
    }
}

export const getServicesFailedAction = payload => {
    return {
        type: `${GET_SERVICES_DATA}_FAILED`,
        payload
    }
}