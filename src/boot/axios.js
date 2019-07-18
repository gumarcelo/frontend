import axios from 'axios'
import { SessionStorage } from 'quasar'

var axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: 'https://api-tasks-gsm.herokuapp.com/',
  headers: {
    'authorization': SessionStorage.getItem('token')
  }
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
