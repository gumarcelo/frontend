import { apiRequest } from '../../services'

export const sisyncApi = (context, payload) => {
  return apiRequest(payload)
}
// export const saveTask = (context, payload) => {
//   const apiReturn = apiRequest(payload)
//   apiReturn.then((data) => {
//     context.commit('saveTask', data)
//   })
//   return apiReturn
// }

// export const requestTask = (context, payload) => {
//   const apiReturn = apiRequest(payload)
//   apiReturn.then((data) => {
//     context.commit('fillState', data)
//   })
//   return apiReturn
//  }
// export const sisyncApi = (context, payload) => {
//   const apiReturn = apiRequest(payload)
//   apiReturn.then((data) => {
//     context.commit('saveTask', data)
//   })
//   return apiReturn
//  }
// // export const login = (context, payload) => {
// //   const apiReturn = apiRequest(payload)
// //   return apiReturn
// // }
// export const requestTask = ({ context }, payload) => {
//   console.log(payload)
//   const apiReturn = apiRequest(payload)
//   apiReturn.then((data) => {
//     context.commit('saveTask', data)
//   })
//   return apiReturn
// }
