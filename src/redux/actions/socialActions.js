import { GET_SOCIAL_DATA } from "./constants"

export const getSocialRequestAction = () => {
    return {
        type: `${GET_SOCIAL_DATA}_REQUEST`
    }
}

export const getSocialSuccessAction = payload => {
    return {
        type: `${GET_SOCIAL_DATA}_SUCCESS`,
        payload
    }
}

export const getSocialFailedAction = payload => {
    return {
        type: `${GET_SOCIAL_DATA}_FAILED`,
        payload
    }
}