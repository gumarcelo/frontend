import _ from 'lodash'
import { SessionStorage } from 'quasar'

export default (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogged = _.isEmpty(SessionStorage.getItem('token'))
    if (!isLogged) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
}
