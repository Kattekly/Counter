import {AppRootStateType} from "../redux/stor";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('VALUE');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('VALUE', serializedState);
    } catch {
        // ignore write errors
    }
};