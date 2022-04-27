<template>
  <h1>사용자 정보 변경</h1>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th scope="col">아이디</th>
      <th scope="col">패스워드</th>
      <th scope="col">이름</th>
      <th scope="col">사업자 번호</th>
      <th scope="col">주소 1</th>
      <th scope="col">주소 2</th>
      <th scope="col">우편 번호</th>
      <th scope="col">e-mail</th>
      <th scope="col">연락처</th>
      <th scope="col">가게이름</th>
      <th scope="col">가게 연락처</th>
      <th scope="col">가입일</th>
    </tr>
    </thead>
    <tbody>

    <tr v-for="user in userinfo" :key="user">
      <td>{{ user.userid }}</td>
      <td>{{ user.pw }}</td>
      <td>{{ user.username }}</td>
      <td>{{ user.bizaddr1 }}</td>
      <td>{{ user.bizaddr2 }}</td>
      <td>{{ user.bizzip }}</td>
      <td>{{ user.mgemail }}</td>
      <td>{{ user.phnum }}</td>
      <td>{{ user.shopname }}</td>
      <td>{{ user.shopPhNum }}</td>
      <td>{{ user.userdate }}</td>
    </tr>
    </tbody>
  </table>
  <span>{{ userid }}</span>
  <span>{{ test }}</span>
</template>

<script>
export default {
  name: 'modifyUser'
  ,
  data () {
    return {
      user: [],
      userid: '',
      userinfo: null
    }
  },
  props: ['test'],
  created() {
    this.userid = this.$route.params.userid;
console.log("userid 넘어온것 : ",this.userid);
  },
  methods () {
    this.axios.post('/member/modifyUser', {
      userid: this.userid
    })
        .then(response => {
          this.userinfo = response.data
          console.log(this.user)
        })
        .catch(error => {
          console.log(error)
        })
  }
}
</script>

<style scoped>

</style>
