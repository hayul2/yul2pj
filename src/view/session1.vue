<template>
  <h1>세션테스트</h1>
  <form>
    <input type="text" v-model="id" placeholder="id">
    <input type="text" v-model="pw" placeholder="pw">
    <input type="button" value="로그인">
  </form>
  <router-link to="/session2" @click="login">
이동
  </router-link>
</template>

<script>
export default {
  name: 'session1'
  ,
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    login () {
      this.$ls.set('id', this.id, 3600)
      this.$ls.set('pw', this.pw, 3600)
      alert(this.$ls.get('id'))
    }
  }
}
</script>

<style scoped>

</style>
