import axios from 'axios'
import { SessionStorage } from 'quasar'

var axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
  // baseURL: 'https://api-tasks-gsm.herokuapp.com/',
  // headers: {
  //   'authorization': SessionStorage.getItem('token')
  // }
})
axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = SessionStorage.getItem('token')
  return config
}, (err) => {
  return Promise.reject(err)
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
