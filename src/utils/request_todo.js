import fetch from 'dva/fetch';
import session from './saveStorage/sessionStorage'
import {Minute} from './config'
import {routerRedux} from 'dva/router'

let AUTH_TOKEN_TEST = ''

function getToken() {
  if (session.getSession('token')) {
    // console.log("getToken---------->")
    VSTime()
    AUTH_TOKEN_TEST = JSON.parse(session.getSession('token'))
    return AUTH_TOKEN_TEST
  } else {
    // console.log("remToken---------->")
    session.remSession('token')
    session.remSession('user')
    //window.location.assign('/login')
  }

}

function VSTime() {
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

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function requesttodo(url, options) {
  if (!options) {
    options = {}
    options.headers = {authorization: getToken()}
  } else {
    let headers = {}
    if (headers = options.headers) {
      headers.authorization = getToken()
      options.headers = headers
    } else {
      options.headers = {authorization: getToken()}
    }
  }
  const response = await fetch(url, options);
  checkStatus(response);
  const data = await response.json();
  const ret = {
    data,
  };
  //if (response.headers.get('x-total-count')) {
  //    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  //}
  return ret;
}
