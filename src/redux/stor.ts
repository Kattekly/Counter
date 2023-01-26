import {combineReducers, legacy_createStore} from "redux";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>