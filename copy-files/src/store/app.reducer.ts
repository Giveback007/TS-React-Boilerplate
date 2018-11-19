import { Reducer } from "redux";
import { APP_TEST, AppActions } from "./actions";

export interface AppState {
    testNum: number;
}

const initState: AppState = {
    testNum: 0,
};

export const appReducer: Reducer<AppState, AppActions> =
(state = initState, action: AppActions) => {
    switch (action.type) {
        case APP_TEST:
            const testNum = state.testNum + action.payload.test;
            return { ...state, testNum };
        default:
            return state;
    }
};
