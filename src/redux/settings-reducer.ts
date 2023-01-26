export const SET_START_VALUE = 'SET_START_VALUE'
export const SET_MAX_VALUE = 'SET_MAX_VALUE'
export const SET_MIN_VALUE = 'SET_MIN_VALUE'
export const SET_NEW_OPTIONS = 'SET_NEW_OPTIONS'
export const SET_ERROR = 'SET_ERROR'
export const SET_DEFAULT_START_VALUE = 'SET_DEFAULT_START_VALUE'
export const SET_DEFAULT_MAX_VALUE = 'SET_MIN_VALUE'


type initialStateType = {
    defaultStartValue: number
    defaultMaxValue: number
    startCounterValue: number
    maxCounterValue: number
    minCounterValue: number
    savedNewOptions: boolean
    incorrectValue: boolean
}

const initialState: initialStateType = {
    defaultStartValue: 0,
    defaultMaxValue: 5,
    startCounterValue: 0,
    maxCounterValue: 5,
    minCounterValue: 0,
    savedNewOptions: true,
    incorrectValue: false
}

export const settingsReducer = () => {

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

export const setNewOptionsAC = (flag: boolean) => {
    return {
        type: SET_NEW_OPTIONS,
        payload: flag
    } as const
}

export const setErrorIncorrectValueAC = (flag: boolean) => {
    return {
        type: SET_ERROR,
        payload: flag
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

type settingsType = ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setNewOptionsAC>
    | ReturnType<typeof setErrorIncorrectValueAC>
    | ReturnType<typeof setDefaultStartValueAC>
    | ReturnType<typeof setDefaultMaxValueAC>