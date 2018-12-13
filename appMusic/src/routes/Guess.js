import React from 'react';
import {connect} from 'dva';

class Guess extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            getId:[]
        }
    }
    componentDidMount(){
        let {
            dispatch
        } = this.props
        this.setState({
            data:JSON.parse(window.localStorage.getItem('guess'))
        },() => {
            let ids = this.state.data.map((v,i) => {
              return v.id
            })
            dispatch({
                type:"indexStor/getDetail",
                payload:ids
            })
        })
        
    }
    render(){
        let {
            datas
        } = this.props
        return <div>
            {
               
            }
        </div>
    }
}
const getData = state => {
    let {
        datas
    } = state.indexStor;
    return {
        datas
    }
}
export default connect(getData)(Guess)