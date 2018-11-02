import { hot } from "react-hot-loader";
import React = require("react");
import { AppTest, AppActions } from "../store/actions";
import { State } from "../store/root.reducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const stateToProps = (state: State) => state.app;
const dispatchToProps = (dispatch: Dispatch<AppActions>) => 
({
    appTest: () => dispatch(new AppTest)
});

type P = ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>;
type S = {}

class App extends React.Component<P, S>{
    
    render() {
        const { appTest, testNum } = this.props;

        return (
            <div>
                <h1>It Works</h1>
                <h2>Clicks: {testNum}</h2>
                <button onClick={appTest}>Test</button>
            </div>
        )
    }
}

export default hot(module)(connect(stateToProps, dispatchToProps)(App));
