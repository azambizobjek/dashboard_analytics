import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    AUTH_LOADING
   } from './types'
import {converter} from '../utils/converter'
import {gwUrl} from '../config/appConf'

export const login = (authData) => dispatch =>{
   dispatch(isAuth())
   const url=gwUrl+converter(authData)
   fetch(url)
   .then(res=>res.json())
   .then(res=>{
       console.log(res)
       const{success,message,...response}=res
       success?dispatch({type:LOGIN_SUCCESS,payload:response}):dispatch({type:LOGIN_FAIL})
       }
   )
}


export const isAuth=()=>{
   return {
       type:AUTH_LOADING
   }
}

export const logout=(authParam)=>dispatch=>{
    const url=`${gwUrl}/auth/logout?param=${JSON.stringify(authParam)}`
   fetch(url)
   .then(res=>res.json())
   .then(res=>dispatch({type:LOG_OUT}))

}