import { GET_PRICING_DATA } from "./constants"

export const getPricingRequestAction = () => {
    return {
        type: `${GET_PRICING_DATA}_REQUEST`
    }
}

export const getPricingSuccessAction = payload => {
    return {
        type: `${GET_PRICING_DATA}_SUCCESS`,
        payload
    }
}

export const getPricingFailedAction = payload => {
    return {
        type: `${GET_PRICING_DATA}_FAILED`,
        payload
    }
}