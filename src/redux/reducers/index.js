import { combineReducers } from "redux";
import partnersReducer from "./partners";
import pricingReducer from "./pricing";
import socialReducer from './social';
import langsReducer from './languages';

const rootReducer = {
    pricing: pricingReducer,
    partners: partnersReducer,
    social: socialReducer,
    langs: langsReducer
}

export default combineReducers(rootReducer);