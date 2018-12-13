 import React from "react";
import {connect} from "dva";
import Banner from "../../components/tab"
import "./person.scss"
class Person extends React.PureComponent{
    componentDidMount(){
        console.log(this)
        let {
            dispatch
        } = this.props;
        dispatch({
            type:"indexStor/getList"
        })
        dispatch({
            type:"indexStor/getlists"
        })
    }
    render () {
        let {
            banner,
            list_li
        } = this.props
        console.log(this.props,"props",list_li)
        return <React.Fragment>
            <div className = "mark">

            </div>
            <div className = "banner">
                 <Banner banner={banner} />
            </div>
            <div className = "con">
             <div className="navs">  
                <p>
                  <span>
                    <img src="../../public/img/shouyinji.png"/>
                  </span>
                 <b>私人FM</b>
                </p>
                <p>
                <span> <img src="../../public/img/rili.png"/></span>
                 <b>每日推荐</b>
                </p>
                <p>
                <span> <img src="../../public/img/playlist.png"/></span>
                 <b>歌单</b>
                </p>
                <p>
                <span> <img src="../../public/img/paihangbang.png"/></span>
                 <b>排行榜</b>
                </p>
            </div>
           
        </div>
        <div className="con_list">
                <h4>
                    <span>推荐歌单</span>
                    <img className = "imgs" src="../../../public/img/arr-right.png" />
                </h4>
                <div className = "con_list_li">
                        {
                            list_li.length > 0 && list_li.map((v,i) => {
                                return <div className = "banners">
                                    <img src={v.picUrl} />
                                    <p>{v.name}</p>
                                </div>
                            })
                        }
                </div>
            </div>
        </React.Fragment>
    }
}
const getBanner = state =>{
    let {banner,list_li} = state.indexStor;
    return {banner,list_li}
}
export default connect(getBanner)(Person)