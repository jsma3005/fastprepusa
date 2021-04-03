import { LANGUAGE } from "./constants"

export const ruLangAction = data => {
    return {
        type: `${LANGUAGE}_RU`,
        payload: data
    }
}

export const enLangAction = data => {
    return {
        type: `${LANGUAGE}_EN`,
        payload: data
    }
}