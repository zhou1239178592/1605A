import React from "react";
import {connect} from "dva";
import {NavLink} from "dva/router"
import "./search.scss"
class Search extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            values:""
        }
    }

    Change = (e) => {
        this.setState({
            values:e.target.value
        },() => {
           
        })
    }
    search = () => {
        let {
            dispatch
        } = this.props;
        dispatch({
            type:"indexStor/seList",
            payload:this.state.values
        })
       
    }
    getId = (id) => {
        window.localStorage.setItem("id",id)
    }
    add = () => {
        console.log(this)
        let {
            sedata
        } = this.props;
        window.localStorage.setItem('playList',JSON.stringify(sedata))
    }
    guess(){
        let {
            sedata
        } = this.props;

        window.localStorage.setItem('guess',JSON.stringify(sedata))
    }
    render () {
        
        let {
            sedata
        } = this.props;
        return <React.Fragment>
        
          <div className = "wrap">
            <div className = "title">
                    <input type="text" value={this.state.text} onChange = {this.Change}/>
                    <span onClick = {this.search} className = "span">
                        搜索
                    </span>
                    <NavLink to="/play">
                    <span onClick = {this.add.bind(this)}>
                        全部播放
                    </span>
                    </NavLink>
                    <NavLink to="/guess">
                    <span onClick = {this.guess.bind(this)}>
                        猜歌名
                    </span>
                    </NavLink>
            </div>
                <div className = "con_list">
                    {
                        sedata.length > 0 && sedata.map((item,index) => {
                            return <NavLink to="/play" key={index}><p className="con_list_item" key={index} onClick = {() => this.getId(item.id)}>{item.name} <span>{item.artists[0].name}</span></p></NavLink>
                        })
                    }
                </div>
          </div>
        </React.Fragment>
    }
}
const seList = state => {
    let {
        sedata
    } = state.indexStor
    return {sedata}
}
export default connect(seList)(Search)