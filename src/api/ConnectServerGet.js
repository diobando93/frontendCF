//var axios = require('axios')

function GetRestRequest(apiUrl, getResultObj) {
  return fetch(apiUrl, {
    mode: 'cors',
    method: 'GET',
    json: true,
    headers: new Headers({
      'Content-Type': 'application/json; odata=verbose',
      Accept: 'application/json',
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(getResultObj)
}

/*

function GetRestRequest(apiUrl, getResultObj) {
  var config = {
    method: 'get',
    url: 'https://carbonfootprintapinodejs.herokuapp.com',
  }
  return axios(config).then(checkStatus).then(parseJSON).then(getResultObj)
}

const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:5000',
      //https://carbonfootprintapinodejs.herokuapp.com
      //http://localhost:5000
      changeOrigin: true,
    }),
  )
}

function GetRestRequest(apiUrl, getResultObj) {
  return fetch(apiUrl, {
    mode: 'cors',
    method: 'GET',
    json: true,
    headers: new Headers({
      'Content-Type': 'application/json; odata=verbose',
      Accept: 'application/json',
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(getResultObj)
}
*/

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(`HTTP Error ${response.statusText}`)
  error.status = response.statusText
  error.response = response
  console.log(error)
  throw error
}

function parseJSON(response) {
  return response.json()
}

const GetRestObject = { GetRestRequest }
export default GetRestObject
