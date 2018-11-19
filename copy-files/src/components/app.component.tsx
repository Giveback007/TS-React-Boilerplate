import React = require("react");
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppActions, AppTest } from "../store/actions";
import { State } from "../store/root.reducer";

const stateToProps = (state: State) => state.app;
const dispatchToProps = (dispatch: Dispatch<AppActions>) =>
({
    appTest: () => dispatch(new AppTest()),
});

type P = ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>;
type S = {};

class App extends React.Component<P, S> {

    public render() {
        const { appTest, testNum } = this.props;

        return (
            <div>
                <h1>It Works</h1>
                <h2>Clicks: {testNum}</h2>
                <button onClick={appTest}>Test</button>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(App);
