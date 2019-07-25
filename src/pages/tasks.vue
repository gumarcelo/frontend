<script>
import { mapActions } from 'vuex'
import _ from 'lodash'
export default {
  name: 'Tasks',
  data () {
    return {
      tab: 'open',
      splitterModel: 100,
      tarefa: {
        title: '',
        description: '',
        dateLimit: '',
        status: ''
      },
      janela: false,
      tarefaID: null,
      leftDrawerOpen: false
    }
  },
  computed: {
    recoveryUser () {
      return this.$store.getters['taskStore/getUser']
    },
    getList () {
      const lista = _.filter(this.$store.getters['taskStore/getTask'], (o) => {
        return o.status === this.tab
      })
      return lista
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
          this.$store.commit('taskStore/fillState', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    saveTask () {
      const DATA = this.tarefa
      const URL = '/task'
      const ID = this.tarefaID
      const ACTION = 'save'
      if (ID) {
        this['taskStore/sisyncApi']({ DATA, URL, ID, ACTION })
          .then((data) => {
            this.$store.commit('taskStore/fillState', data)
          })
          .catch((e) => {
            console.log('erro ao atualizar a tarefa no BD')
            console.log(e)
          })
      }
      this.reset()
      this.janela = false
    },
    editStatus (i) {
      switch (i) {
        // tarefa concluída
        case 1:
          break;
        // tarefa na lixeira
        case 2:
          break;
        // tarefa aberta
        case 3:
          break;
        // excluir tarefa do bd
        case 4:
          break;
        // chamar o computed dnv
        default:
          break;
      }
    }
    deleteTask (i) {
      this.tarefa.title = i.title
      this.tarefa.description = i.description
      this.tarefa.dateLimit = i.dateLimit
      this.tarefa.status = 'trash'
      this.tarefaID = i._id
      this.saveTask()
    },
    completeTask (i) {
      this.tarefa.title = i.title
      this.tarefa.description = i.description
      this.tarefa.dateLimit = i.dateLimit
      this.tarefa.status = 'done'
      this.tarefaID = i._id
      this.saveTask()
    },
    botaoAdd (i) {
      this.janela = true
      this.tarefaID = i._id
      this.tarefa.title = i.title
      this.tarefa.description = i.description
      this.tarefa.dateLimit = i.dateLimit
      this.tarefa.status = i.status
    },
    reset () {
      this.tarefa = {
        title: '',
        description: '',
        dateLimit: '',
        status: ''
      }
      this.tarefaID = null
    }
  },
  mounted () {
    this.getTasks()
  }
}
</script>

<template>
  <div class="corpo">
    <div class="header">
      <q-toolbar class="aqui">
        <q-avatar size="80px">
          <img src="https://instagram.fvcp1-1.fna.fbcdn.net/vp/609e648a0189a7c45ed87118e7fb7b77/5D860211/t51.2885-19/s150x150/59373896_299262674289355_525223617823244288_n.jpg?_nc_ht=instagram.fvcp1-1.fna.fbcdn.net">
        </q-avatar>
        <h5>{{recoveryUser.name}}</h5>
        <p>{{recoveryUser.email}}</p>
      </q-toolbar>
      <q-toolbar-title class="title">TASKS</q-toolbar-title>
    </div>
    <!-- <q-header>
        <q-btn icon="menu" flat dense round @click="leftDrawerOpen = !leftDrawerOpen" />
    </q-header> -->
    <!-- <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2" >
      <div class="header">
      </div> -->
    <div class="list">
      <q-splitter v-model="splitterModel" >
        <template v-slot:before>
          <q-tabs v-model="tab" inline-label vertical class="text-teal">
            <q-tab name="open" icon="list" label="Tasks" />
            <q-tab name="done" icon="done" label="Concluídas" />
            <q-tab name="trash" icon="delete" label="Trash" />
          </q-tabs>
        </template>
        <template v-slot:after>
          <q-tab-panels v-model="tab" animated transition-prev="jump-up" transition-next="jump-up">
            <q-tab-panel name="open" >
              <div class="listOpen">
                <q-card class="tasksOpen" v-for="(i) in getList" :key="i._id">
                  <q-btn dense fab icon="check_circle" color="primary" @click="completeTask(i)" />
                  <span @click="botaoAdd(i)">{{i.title}}</span>
                  <q-btn dense fab icon="delete" color="primary" @click="deleteTask(i)"  />
                </q-card>
              </div>
            </q-tab-panel>
            <q-tab-panel name="done" >
              <div class="listDone">
                <q-card class="tasksDone" v-for="(i) in getList" :key="i._id">
                  <q-btn dense fab icon="check_circle" color="primary" @click="completeTask(i)" />
                  <span @click="botaoAdd(i)">{{i.title}}</span>
                  <q-btn dense fab icon="delete" color="primary" @click="deleteTask(i)"  />
                </q-card>
              </div>
            </q-tab-panel>
            <q-tab-panel name="trash" >
              <div class="listTrash">
                <q-card class="tasksTrash" v-for="(i) in getList" :key="i._id">
                  <q-btn dense fab icon="check_circle" color="primary" @click="completeTask(i)" />
                  <span @click="botaoAdd(i)">{{i.title}}</span>
                  <q-btn dense fab icon="delete" color="primary" @click="deleteTask(i)"  />
                </q-card>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
    <!-- </q-drawer> -->
    <div class="botaoAdd">
      <q-page-sticky position="bottom-right" :offset="[18,18]">
        <q-btn fab icon="add" color="primary" @click="janela = !janela" />
      </q-page-sticky>
      <q-dialog v-model="janela">
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
            <q-btn flat label="Cancelar" v-close-popup />
            <q-btn flat label="Add Tarefa" @click="saveTask"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<style lang="stylus">
  .corpo
    height 100%
    width 100%
    .header
      background-color $primary
      width 100%
      height 200px
      padding 20px
      .aqui
        display flex
        flex-direction column
        align-items baseline
      .title
          display flex
          justify-content center
</style>
