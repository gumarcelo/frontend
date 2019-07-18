import { axiosInstance } from '../boot/axios'

const doRequest = (payload) => {
  const urlRequest = {
    method: '',
    url: payload.URL,
    data: {}
  }
  switch (payload.ACTION) {
    case 'save' :
      if (payload.ID) {
        console.log('put')
        urlRequest.method = 'put'
        urlRequest.data = payload.DATA
        urlRequest.url = payload.URL + '/' + payload.ID
      } else {
        urlRequest.method = 'post'
        urlRequest.data = payload.DATA
        console.log(urlRequest)
      }
      break
    case 'paginate' :
      urlRequest.method = 'post'
      urlRequest.data = payload.OPTIONS
      urlRequest.url = payload.URL + '/paginate'
      break
    case 'get' :
      if (payload.ID) {
        urlRequest.method = 'get'
        urlRequest.url = payload.URL + '/' + payload.ID
      } else {
        urlRequest.method = 'get'
        urlRequest.url = payload.URL
      }
      break
    case 'delete' :
      urlRequest.method = 'delete'
      urlRequest.url = payload.URL + '/' + payload.ID
  }
  return urlRequest
}

export const apiRequest = (payload) => {
  return axiosInstance(doRequest(payload))
    .then(response => response.data)
}
