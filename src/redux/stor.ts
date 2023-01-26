import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;