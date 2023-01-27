export const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE'

const initialState = {
    counterValue: 0
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: counterType): initialStateType => {
    switch (action.type) {
        case "SET_COUNTER_VALUE":{
            return {
                ...state,
                counterValue: action.payload
            }
        }
        default: {
            return state
        }
    }
}


export const setCounterValueAC = (value: number) => {
    return {
        type: SET_COUNTER_VALUE,
        payload: value
    } as const
}

type counterType = ReturnType<typeof setCounterValueAC>