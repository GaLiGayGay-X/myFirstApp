import axios from 'axios';
import {config} from '../config.js'
import qs from 'qs'
import pathToRegexp from 'path-to-regexp'
import lodash from 'lodash'
import {message} from 'antd'
import session from '../saveStorage/sessionStorage'
import {Minute, api} from '../config'
import {routerRedux} from 'dva/router'

const {newLoginURL, configURL} = api
let AUTH_TOKEN_TEST = ''
const getToken = () => {
  if (session.getSession('token')) {
    //console.log("getToken----------->",session.getSession('token'))
    //token过期时间
    VSTime()
    AUTH_TOKEN_TEST = JSON.parse(session.getSession('token'))
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN_TEST;
  } else {
    session.remSession('token')
    session.remSession('user')
    //console.log("routerRedux",routerRedux)
    //window.location.assign('/login')
  }
}

const VSTime = () => {
  let timeNew = new Date().getTime()
  if (!session.getSession('usertime')) {
    session.setSession('usertime', timeNew)
  }
  else {
    if ((timeNew - session.getSession('usertime')) > (1000 * 60 * Minute)) {
      session.remSession('token')
      session.remSession('user')
      window.location.assign('/')
    } else {
      session.setSession('usertime', (timeNew))
    }
  }
}
//axios.defaults.baseURL = 'http://172.20.36.2:10001/server-api/list';

//axios.defaults.headers.post['content-Type'] = 'application/json; charset=utf-8';

const getUtil = (url, params) => {
  if (url !== configURL) {
    getToken()
  }
  let statusCode
  console.log("getUtil", url)
  const result = axios({
    url,
    method: 'get',
    params: params,
    timeout: 5000,
  }).then((res) => {
    console.log(res)
    const {statusText, status} = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data,
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    })
  }).catch((error) => {
    const {response} = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const {data, statusText} = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    console.log("error-------------------->", error)
    if (msg == 'timeout of 5000ms exceeded') {
      msg = "连接超时，服务器无响应！"
    }
    return Promise.reject({success: false, statusCode, message: msg})
  })
  return result
}
const postUtil = (url, data, params) => {
  if (url !== newLoginURL) {
    getToken()
  }
  console.log("params", params)
  let statusCode
  let success
  const result = axios({
    url,
    method: 'post',
    data: data,
    params: params,
    timeout: 5000,
  }).then((res) => {
    console.log("res", res)
    const {statusText, status} = res
    let data = res.data
    if (data instanceof Array) {
      data = {
        list: data,
      }
    }
    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    })
  }).catch((error) => {
    console.log("error", error)
    const {response} = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const {data, statusText} = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message ? error.message : 'Network Error'
    }
    if (msg == 'timeout of 5000ms exceeded') {
      msg = "连接超时，服务器无响应！"
    }
    //message.error(msg)
    return Promise.reject({success: false, statusCode, message: msg})
  })
  return result
}
export default {getUtil, postUtil}
