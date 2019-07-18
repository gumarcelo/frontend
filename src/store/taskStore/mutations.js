export function saveTask (state, payload) {
  state.task.push(payload)
}
export function saveTask2 (state, payload) {
  state.task = payload
}
