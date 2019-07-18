import Vue from 'vue'
import Vuex from 'vuex'
import taskStore from './taskStore'

/**
 * store: armazenar e acessar os dados em toda a aplicação de um jeito reativo
 * State: armazena os dados e sua estrutura (o que ta dentro de 'tarefa')
 * pode ser armazenado um valor padrão, mas
 * para modificar ou inserir dados dentro do State, tem que chamar o Mutation
 * Mutation: alterar os dados do State
 * Getters: pega os dados do State
 * Action: usado para fazer requisições pro backend ou chamar os outros 3
 */

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      taskStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
