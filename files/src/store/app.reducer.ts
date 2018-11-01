import { Reducer } from "redux";
import { AppActions, APP_TEST } from "./actions";
import { newStateCurrying } from "./root.reducer";

export interface AppState {
    testNum: number;
}

const initState: AppState = {
    testNum: 0 
}

export const appReducer: Reducer<AppState> = 
    (state = initState, action: AppActions) => {
    switch (action.type) {
        case APP_TEST:
            const testNum = state.testNum + action.payload.test;
            return { ...state, testNum };
        default:
            return state;
    }
}