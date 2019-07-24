<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          TASKS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <div class="header">
        <q-avatar size="80px">
          <img src="https://instagram.fvcp1-1.fna.fbcdn.net/vp/609e648a0189a7c45ed87118e7fb7b77/5D860211/t51.2885-19/s150x150/59373896_299262674289355_525223617823244288_n.jpg?_nc_ht=instagram.fvcp1-1.fna.fbcdn.net">
        </q-avatar>
        <h2>{{recoveryUser.name}}</h2>
        <p>{{recoveryUser.email}}</p>
      </div>
      <q-list>
        <q-item clickable to="/tasks">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tasks</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/finished">
          <q-item-section avatar>
            <q-icon name="done" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Finished</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/trash">
          <q-item-section avatar>
            <q-icon name="delete" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Trash</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
      // this.$q.platform.is.desktop
    }
  },
  computed: {
    recoveryUser () {
      return this.$store.getters['taskStore/getUser']
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
  .header
    background-color $primary
    height 160px
    display flex
    flex-direction column
    align-items center
    justify-content center
    img
      border solid 3px #fff
    h2, p
      margin 0
      padding 0
      color #fff
    h2
      margin-top 10px
      font-size 22px
      line-height 22px
      font-weight  400
    p
      margin-top 5px
      font-size 14px
      line-height 14px
</style>
