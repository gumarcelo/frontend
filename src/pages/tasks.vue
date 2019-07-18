<script>
import _ from 'lodash' // biblioteca para trabalhar com arrays
export default {
  name: 'Tasks',
  data () {
    return {
      tarefa: {
        titulo: '',
        descricao: '',
        data: '',
        done: false
      },
      tarefaId: null,
      tarefas: [],
      confirm: false
    }
  },
  computed: {
    minhaLista () {
      const listatrue = _.filter(this.tarefas, (o) => {
        return o.done === false
      })
      return listatrue
    },
    getTask () {
      return this.$store.getters['taskStore/getTask']
    }
  },
  methods: {
    saveTask () {
      this.$store.commit('taskStore/saveTask', this.tarefa)
    },
    adicionarTarefa () {
      if (this.tarefaId === null) {
        this.tarefas.push({ titulo: this.tarefa.titulo, descricao: this.tarefa.descricao, data: this.tarefa.data, done: this.tarefa.done })
        this.$q.localStorage.set('Task', this.tarefas)
        this.tarefa = {}
        this.$store.commit('taskStore/saveTask', this.tarefa)
        this.confirm = false
      } else {
        const listUpdated = {
          titulo: this.tarefa.titulo,
          descricao: this.tarefa.descricao,
          data: this.tarefa.data,
          done: this.tarefa.done
        }
        this.tarefas[this.tarefaId] = listUpdated
        this.tarefa = {
          titulo: '',
          descricao: '',
          data: '',
          done: false
        }
        this.tarefaId = null
        this.confirm = false
      }
    },
    getList () {
      if (!this.$q.localStorage.getItem('Task')) {
        return
      }
      // this.$q.localStorage.set('Task', this.$store.getters['taskStore/getTask'])
      this.tarefas = this.$q.localStorage.getItem('Task')
    },
    updateList (i) {
      this.confirm = true
      this.tarefa = JSON.parse(JSON.stringify(this.tarefas[i]))
      this.tarefaId = i
    },
    botaoAdd () {
      this.confirm = true
      this.tarefaId = null
      this.tarefa = {
        titulo: '',
        descricao: '',
        data: '',
        done: false
      }
    }
  },
  created () {
    this.getList()
  }
}
</script>

<template>
  <div class="corpo">
    <div class="list">
      <ul>
        <li v-for="(i, index) in minhaLista" :key="index">
          <q-checkbox v-model="i.done" />
          <span @click="updateList(index)">{{i.titulo}}</span>
        </li>
      </ul>
    </div>
    <div class="botaoAdd">
      <q-page-sticky position="bottom-right" :offset="[18,18]">
        <q-btn fab icon="add" color="primary" @click="botaoAdd" />
      </q-page-sticky>
      <q-dialog v-model="confirm">
        <q-card style="min-width: 400px">
          <q-card-section>
            <div class="text-h6">Adicionar tarefa</div>
          </q-card-section>
          <q-card-section>
            <q-input v-model="tarefa.titulo" autofocus @keyup.enter="prompt = false" label="Título" />
            <q-input v-model="tarefa.descricao" @keyup.enter="prompt = false" label="Descrição" />
            <q-input filled v-model="tarefa.data" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="tarefa.data" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add Tarefa" @click="adicionarTarefa"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<style lang="stylus">
  .corpo
    padding 20px
    display flex
    flex-direction column
    align-content center
    justify-content center
    .list
      margin-top 30px
      ul
        margin 0
        padding 0
        li
          margin 0
          padding 0
          list-style none
          color $primary
</style>
