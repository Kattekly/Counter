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