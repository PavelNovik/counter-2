import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducer/reducer";

export const rootReduser = combineReducers({
    state: counterReducer
})

export type AppStoreType = ReturnType<typeof rootReduser>

export const store = legacy_createStore(rootReduser)