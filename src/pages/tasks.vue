<script>
import { mapActions } from 'vuex'
export default {
  name: 'Tasks',
  data () {
    return {
      tarefa: {
        title: '',
        description: '',
        dateLimit: '',
        status: 'open'
      },
      tarefaId: null,
      tarefas: [],
      confirm: false
    }
  },
  computed: {
    getList () {
      return this.$store.getters['taskStore/getTask']
    }
  },
  methods: {
    ...mapActions(['taskStore/sisyncApi']),
    getTasks () {
      const DATA = ''
      const URL = '/task'
      const ID = ''
      const ACTION = 'get'
      this['taskStore/sisyncApi']({ DATA, URL, ID, ACTION })
        .then((data) => {
          console.log(data)
          this.$store.commit('taskStore/saveTask2', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(['taskStore/requestTask']),
    saveTask () {
      const DATA = this.tarefa
      const URL = '/task'
      const ID = ''
      const ACTION = 'save'
      this['taskStore/requestTask']({ DATA, URL, ID, ACTION })
        .then((data) => {
          this.$store.commit('taskStore/saveTask2', data.tasks)
        }).catch((e) => {
          console.log('erro ao salvar a tarefa no BD')
          console.log(e)
        })
      this.tarefa = {
        title: '',
        description: '',
        dateLimit: '',
        status: 'open'
      }
      this.tarefaId = null
      this.confirm = false
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
        title: '',
        description: '',
        dateLimit: '',
        status: 'open'
      }
    }
  },
  mounted () {
    this.getTasks()
  }
}
</script>

<template>
  <div class="corpo">
    <div class="list">
      <ul>
        <li v-for="(i, index) in getList" :key="index">
          <q-checkbox v-model="i.status" />
          <span @click="updateList(index)">{{i.title}}</span>
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
            <q-input v-model="tarefa.title" autofocus @keyup.enter="prompt = false" label="Título" />
            <q-input v-model="tarefa.description" @keyup.enter="prompt = false" label="Descrição" />
            <q-input filled v-model="tarefa.dateLimit" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="tarefa.dateLimit" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add Tarefa" @click="saveTask"/>
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
