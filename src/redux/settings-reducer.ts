export const SET_START_VALUE = 'SET_START_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'
export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_NEW_OPTIONS = 'SET_NEW_OPTIONS'
export const SET_ERROR = 'SET_ERROR'
export const SET_DEFAULT_START_VALUE = 'SET_DEFAULT_START_VALUE'
export const SET_DEFAULT_MAX_VALUE = 'SET_MIN_VALUE'

const initialState = {
    defaultStartValue: 0,
    defaultMaxValue: 5,
    startCounterValue: 0,
    maxCounterValue: 5,
    minCounterValue: 0,
    savedNewOptions: true,
    incorrectValue: false
}

type initialStateType = typeof initialState

export const settingsReducer = (state: initialStateType = initialState, action: settingsType): initialStateType => {
    switch (action.type) {
        case SET_START_VALUE: {
            return {
                ...state,
                startCounterValue: action.payload
            }
        }

        case SET_MAX_VALUE: {
            return {
                ...state,
                maxCounterValue: action.payload
            }
        }

        case SET_MIN_VALUE: {
            return {
                ...state,
                minCounterValue: action.payload
            }
        }

        case SET_DEFAULT_MAX_VALUE: {
            return {
                ...state,
                defaultMaxValue: action.payload
            }
        }

        case SET_DEFAULT_START_VALUE: {
            return {
                ...state,
                defaultStartValue: action.payload
            }
        }

        case SET_ERROR: {
            return {
                ...state,
                incorrectValue: action.payload
            }
        }

        case SET_NEW_OPTIONS: {
            return {
                ...state,
                savedNewOptions: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export const setStartValueAC = (value: number) => {
    return {
        type: SET_START_VALUE,
        payload: value
    } as const
}

export const setMaxValueAC = (value: number) => {
    return {
        type: SET_MAX_VALUE,
        payload: value
    } as const
}

export const setMinValueAC = (value: number) => {
    return {
        type: SET_MIN_VALUE,
        payload: value
    } as const
}

export const setNewOptionsAC = (selected: boolean) => {
    return {
        type: SET_NEW_OPTIONS,
        payload: selected
    } as const
}

export const setErrorIncorrectValueAC = (selected: boolean) => {
    return {
        type: SET_ERROR,
        payload: selected
    } as const
}

export const setDefaultStartValueAC = (value: number) => {
    return {
        type: SET_DEFAULT_START_VALUE,
        payload: value
    } as const
}

export const setDefaultMaxValueAC = (value: number) => {
    return {
        type: SET_DEFAULT_MAX_VALUE,
        payload: value
    } as const
}

type settingsType =
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setNewOptionsAC>
    | ReturnType<typeof setErrorIncorrectValueAC>
    | ReturnType<typeof setDefaultStartValueAC>
    | ReturnType<typeof setDefaultMaxValueAC>