import { combineReducers } from "redux";
import partnersReducer from "./partners";
import pricingReducer from "./pricing";
import socialReducer from './social';

const rootReducer = {
    pricing: pricingReducer,
    partners: partnersReducer,
    social: socialReducer
}

export default combineReducers(rootReducer);