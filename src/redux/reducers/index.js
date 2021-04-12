import { combineReducers } from "redux";
import partnersReducer from "./partners";
import pricingReducer from "./pricing";
import socialReducer from './social';
import servicesReducer from './services';
import langsReducer from './languages';

const rootReducer = {
    pricing: pricingReducer,
    partners: partnersReducer,
    social: socialReducer,
    langs: langsReducer,
    services: servicesReducer
}

export default combineReducers(rootReducer);