export const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE'
type initialStateType = {
    counterValue: number
}

const initialState: initialStateType = {
    counterValue: 0
}


export const counterReducer = (state: initialStateType = initialState, action: counterType) => {

}


export const setCounterValueAC = (value: number) => {
    return {
        type: SET_COUNTER_VALUE,
        payload: value
    }
}

type counterType = ReturnType<typeof setCounterValueAC>