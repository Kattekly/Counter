import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {settingsReducer} from "./settings-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//localStorage
export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings
    })
})

// @ts-ignore
window.store = store;