import { GET_PARTNERS_DATA } from "./constants"

export const getPartnersRequestAction = () => {
    return {
        type: `${GET_PARTNERS_DATA}_REQUEST`
    }
}

export const getPartnersSuccessAction = payload => {
    return {
        type: `${GET_PARTNERS_DATA}_SUCCESS`,
        payload
    }
}

export const getPartnersFailedAction = payload => {
    return {
        type: `${GET_PARTNERS_DATA}_FAILED`,
        payload
    }
}