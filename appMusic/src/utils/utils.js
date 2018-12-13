import cookie from 'js-cookie';

export function getToken(){
  return cookie.get('auth_token');
}

export function setToken(val){
  cookie.set('auth_token', val);
}
export function randomArr(arr){
  let songids = []
  let i=0;
  while(i<10){
    let index = Math.floor(Math.random()*arr.length-1)
    songids.push(arr[index]);
    i++;
  }
  return songids
}
