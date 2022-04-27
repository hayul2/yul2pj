<template>
  <h1>get</h1>
  <p>{{ id }}</p>
  <p>{{ pw }}</p>
</template>

<script>
export default {
  name: 'session2',
  data() {
    return {
      id: this.$ls.get("id"),
      pw: this.$ls.get("pw")
    }
  },
}
</script>

<style scoped>

</style>
