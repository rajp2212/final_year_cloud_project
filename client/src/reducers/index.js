import { combineReducers } from "redux";
import userInfo from './userInfo'
import ProviderReducer from "./ProviderReducers";

export default combineReducers({
    userInfo,ProviderReducer
});