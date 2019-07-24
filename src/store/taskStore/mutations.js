export function saveTask (state, payload) {
  state.task.push(payload)
}
export function fillState (state, payload) {
  state.task = payload
}
export function doLogin (state, payload) {
  state.token = payload.token
  state.user = payload.user
}
