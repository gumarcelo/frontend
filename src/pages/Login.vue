<script>
import { mapActions } from 'vuex'
import { SessionStorage } from 'quasar'
export default {
  name: 'Login',
  data () {
    return {
      logar: {
        email: '',
        password: ''
      },
      registrar: {
        name: '',
        email: '',
        password: '',
        repassword: ''
      },
      reg: false
    }
  },
  methods: {
    ...mapActions(['taskStore/sisyncApi']),
    login () {
      this.reg = false
      const DATA = this.logar
      const URL = '/user/login'
      const ID = ''
      const ACTION = 'save'
      this['taskStore/sisyncApi']({ DATA, URL, ID, ACTION })
        .then((data) => {
          console.log(data)
          SessionStorage.set('token', data.token)
          this.$router.push('/tasks')
        }).catch((e) => {
          console.log(e)
        })
    },
    registro () {
      this.reg = true
      const DATA = this.registrar
      const URL = '/user/register'
      const ID = ''
      const ACTION = 'save'
      this['taskStore/sisyncApi']({ DATA, URL, ID, ACTION })
        .then((data) => {
          console.log(data)
        }).catch((e) => {
          console.log(e)
        })
      this.onReg()
    },
    onReg () {
      this.reg = !this.reg
    }
  }
}
</script>

<template>
  <div>
    <div class="my-card" align="center">
      <q-img src="https://unfuddle.com/assets/product-summary-tasks-5a6d6625ed37fb42e18a61c2c24087ee.png" basic>
      </q-img>
      <q-card-actions vertical v-if="!reg">
        <q-input dense putlined color="red" label="E-mail" type="email" v-model="logar.email" />
        <q-input dense putlined color="red" label="Senha" type="password" v-model="logar.password" />
        <q-btn label="Login" class="btn-size" @click="login()" />
        <q-btn label="Não tem uma conta? Registre-se!" class="btn-size" @click="onReg" />
      </q-card-actions>
      <q-card-actions vertical v-else>
        <q-input dense putlined label="Nome" type="text" v-model="registrar.name" />
        <q-input dense putlined label="E-mail" type="email" v-model="registrar.email" />
        <q-input dense putlined label="Senha" type="password" v-model="registrar.password" />
        <q-input dense putlined label="Confirme sua senha" type="password" v-model="registrar.repassword" />
        <q-btn label="Registrar" class="btn-size" @click="registro()" />
        <q-btn label="Já tem uma conta? Logue-se!" class="btn-size" @click="onReg" />
      </q-card-actions>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .my-card
    display flex
    flex-direction column
    text-align center
    width 18vw
    background-color none
    min-width 300px
  .btn-size
    background-color #42555E
    color white
</style>
