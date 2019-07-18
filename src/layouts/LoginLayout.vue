<script>
import { openURL } from 'quasar'
export default {
  name: 'LoginLayout',
  methods: {
    openURL
  }
}
</script>
<template>
  <div class="flex-container">
    <div>
      <router-view />
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .flex-container
    height 100vh
    display flex
    flex-direction column
    flex-wrap nowrap
    justify-content center
    align-content center
    align-items center
    background-color $primary
</style>
