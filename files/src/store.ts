import { createStore, applyMiddleware, AnyAction, Action } from"redux";
import { rootReducer, Effects } from "./store/root.reducer";

export interface Dispatch<A extends Action = AnyAction> {
    <T extends A>(action: T): T
}

const logger: Effects = (store) => (next) => (action: AnyAction) => {
        const time = new Date();
        console.log(time.getUTCSeconds(), time.getUTCMilliseconds(), action);
    next({ ...action });
}

const middleWare = applyMiddleware(logger);
export const store = createStore(rootReducer, middleWare);
