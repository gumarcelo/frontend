import { apiRequest } from '../../services'

export const sisyncApi = (context, payload) => {
  const apiReturn = apiRequest(payload)
  apiReturn.then((data) => {
    context.commit('saveTask2', data)
  })
  return apiReturn
}
