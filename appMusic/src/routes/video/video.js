import React from "react";
// import {NavLink} from "dva/router";
// import ReactView from "../../RouterView/RouterView"
class Video extends React.PureComponent{
    render () {
        return <React.Fragment>
            <div className = "nav">
            <h1>{this.props.match.path}</h1>
            </div>
        </React.Fragment>
    }
}

export default Video