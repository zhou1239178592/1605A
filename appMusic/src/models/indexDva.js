import {getToken, setToken,randomArr} from '../utils/utils';
import { routerRedux } from 'dva/router';
import {login} from "../services/index"
export default {

    namespace: 'indexStor',
  
    state: {
        banner:[],
        sedata:[],
        getsingleData:[],
        details:[],
        list_li:[],
        datas:[]
    },
  
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
              console.log('pathname...', pathname);
              if (pathname !== '/login') {
                if (!getToken()){
                  dispatch(routerRedux.replace({
                    pathname: '/login',
                  }))
                }
              }
            });
          },
    },
  
    effects: {
        *login({payload}, {call, put}){
            console.log('login payload...', payload);
            let response = yield call(login, payload);
            console.log('response...', response);
            // 设置token
            setToken(response.data.account.id);
            yield put({
              type: 'updateState',
              payload: response.data
            });
            yield put(routerRedux.replace({
              pathname: '/',
            }))
          },
          *getDetail({payload},{call,put}){
                let ids = randomArr(payload)
              let res = yield call(() => {
                  return fetch(`http://123.206.55.50:14000/song/url?id=${ids.join(',')}`)
                  .then(res => res.json())
                  .then(body => body)
              })
          console.log(res)
              yield put({
                  type:"getIdList",
                  payload:res.data
              })
          },
        *getList(action,{call,put}){
            let res = yield call(() => {
                return fetch("http://123.206.55.50:14000/banner")
                .then(res => res.json())
                .then(body => body)
            })
            yield put({
                type:"updata",
                payload:res.banners
            })
        },
        //    *getUser(action,{call,put}){

        //    }
        *seList(action,{call,put}){
        let res  = yield call(() => {
            return fetch(`http://123.206.55.50:14000/search?keywords=${action.payload}`)
            .then(res=>res.json())
            .then(body => body)
        })
        yield put({
            type:"selist",
            data:res.result.songs
        })
    },
    *single(action,{call,put}){
        let res = yield call(() => {
            return fetch(`http://123.206.55.50:14000/song/url?id=${action.payload}`)
            .then(res => res.json())
            .then(body => body)
        })
        console.log(res,"getsingleList")
        yield put({
            type:'getsingle',
            getsingleList:res.data
        })
    },
    *details(action,{call,put}){
        let res = yield call(() => {
            return fetch(`http://123.206.55.50:14000/song/detail?ids=${action.payload}`)
            .then(res => res.json())
            .then(body => body)
        })
        console.log(res)
        yield put({
            type:"detailsList",
            payload:res.songs
        })
    },
    *getlists(action,{call,put}){
        let res = yield call(() => {
            return fetch('http://123.206.55.50:14000/personalized')
            .then(res => res.json())
            .then(body => body)
        })
        console.log(res,"res")
        yield put({
            type:"getlist_li",
            payload:res.result
        })
    }
    
     },
  
    reducers: {
        updata(state,{payload}) {
            return {...state,banner:payload}
        },
        selist(state,{data}){
            return {...state,sedata:data}
        },
        getsingle(state,{getsingleList}){
            return {...state,getsingleData:getsingleList}
        },
        detailsList(state,{payload}){
            return {...state,details:payload}
        },
         updateState(state, action){
            return {...state, ...action.payload}
        },
        getlist_li(state,{payload}){
            return {...state,list_li:payload}
        },
        getIdList(state,{payload}){
            return {...state,datas:payload}
        }
    },
  
  };
  