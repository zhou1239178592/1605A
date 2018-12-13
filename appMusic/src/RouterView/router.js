// 引入一级路由
import LoginPage from '../routes/LoginPage';
import MainPage from '../routes/MainPage';
import Play from "../routes/play";
import Guess from "../routes/Guess";
// 引入二级路由
import AccountPage from '../routes/account/account';
import DiscoverPage from '../routes/discover/discover';
import FriendPage from '../routes/friend/friend';
import MyPage from '../routes/my/my';
import VideoPage from '../routes/video/video';
import Search from "../routes/search"

import Preson from "../routes/person/person";
import Station from "../routes/station/station"
export default {
  routes: [{
    path: '/login',
    component: LoginPage
  },{
    path:"/play",
    component:Play
  },{
    path:"/guess",
    component:Guess
  }, {
    path: '/main',
    component: MainPage,
    children: [{
        path: '/main/account',
        component: AccountPage,
        children:[{
          path:"/main/account/preson",
          component:Preson
        },{
          path:"/main/account/station",
          component:Station
        },{
          path:'/main/account',
          redirect: '/main/account/preson'
        }]
      }, {
        path: '/main/discover',
        component: DiscoverPage
      }, {
        path: '/main/friend',
        component: FriendPage
      }, {
        path: '/main/my',
        component: MyPage
      }, {
        path: '/main/video',
        component: VideoPage
      },{
        path: '/main',
        redirect: '/main/account'
      }]
       
  },{
    path:"/search",
    component:Search
  },{
    path: '/',
    redirect: '/main'
  }]
}
