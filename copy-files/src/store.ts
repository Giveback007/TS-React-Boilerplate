import { Action, AnyAction, applyMiddleware, createStore } from "redux";
import { Effects, rootReducer } from "./store/root.reducer";

export type Dispatch<A extends Action = AnyAction> = <T extends A>(action: T) => T;

const logger: Effects = (
    // store
    ) => (next) => (action: AnyAction) => {
        const time = new Date();
        // tslint:disable-next-line:no-console
        console.log(time.getUTCSeconds(), time.getUTCMilliseconds(), action);
        next({ ...action });
};

const middleWare = applyMiddleware(logger);
export const store = createStore(rootReducer, middleWare);
