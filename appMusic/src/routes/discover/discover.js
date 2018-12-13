import React from "react";
// import {NavLink} from "dva/router";
// import ReactView from "../../RouterView/RouterView"
class Discover extends React.PureComponent{
    render () {
        return <React.Fragment>
            <div className = "nav">
            <h1>{this.props.match.path}</h1>
            </div>
        </React.Fragment>
    }
}

export default Discover