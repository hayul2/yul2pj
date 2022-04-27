<template>
  <h1 @load="goToMain">error 404</h1>
  <router-link to="/" >Go to home</router-link>


</template>

<script>
import router from '../router'

export default {
  name: 'page404',
  data () {
    return {}
  },
  methods: {

    goToMain: () => {
      console.log('goToMain')
      router.push({
        name: 'main',
        params: { page404: true }
      })
      router.back()

    }

  }
}
</script>

<style scoped>

</style>
