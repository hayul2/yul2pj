<template>
  <h1>show DB</h1>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">아이디</th>
      <th scope="col">패스워드</th>
      <th scope="col">이름</th>
      <th scope="col">주소 1</th>
      <th scope="col">주소 2</th>
      <th scope="col">e-mail</th>
      <th scope="col">연락처</th>
      <th scope="col">가게이름</th>
      <th scope="col">가게번호</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in resultset" :key="user">
      <router-link
          :to="`/modifyuser/${user.userid}`"

      >
        <td>{{ user.userid }}</td>
      </router-link>
      <td>{{ user.userpw }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.bizaddr1 }}</td>
      <td>{{ user.bizaddr2 }}</td>
      <td>{{ user.mgemail }}</td>
      <td>{{ user.phnum }}</td>
      <td>{{ user.shopname }}</td>
      <td>{{ user.shopcode }}</td>
    </tr>
    </tbody>
  </table>
  <router-view
      :test="test"
  ></router-view>
</template>

<script>
import axios from 'axios'
import modifyuser from './modifyUser'
import ModifyUser from './modifyUser'

export default {
  name: 'dbshow',
  components: {
    ModifyUser
  },
  data () {
    return {
      test: 'asd',
      resultset: []
    }
  },
  created () {
    axios.post('/member/db')
        .then(response => {
          this.resultset = response.data
          console.log(this.resultset)
        })
  },
}
</script>

<style scoped>
th {
  text-align: center;
}
</style>
