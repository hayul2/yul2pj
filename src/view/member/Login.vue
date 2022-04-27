<template>
  <div class="container_fluid">
    <h1 class="member_text">
      DINGDONG ORDER
    </h1>
    <!-- wrapper -->
    <div class="login_wrap">
      <form
        id="app"
        @submit="checkForm"
        method="post"
      >
      <!-- ID -->
      <div>
        <h3 class="join_title">
          <label for="id">아이디</label>
        </h3>
        <!-- v-model.trim 은 input으로 받는 문자열을 자동으로 공백과 개행을 없애주는 수식어 -->
        <span class="box int_id">
                            <input type="text" id="id" class="int" ref="memberIdInput" v-model.trim="userId" maxlength="20" >
                            <span class="step_url"></span>
                        </span>
        <span class="error_next_box"></span>
      </div>

      <!-- PW1 -->
      <div class="pswd_box">
        <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
        <span class="box int_pass">
                            <input type="password" id="pswd1" class="int" maxlength="20" ref="memberPasswordInput" v-model.trim="userPw">
          <!-- <img src="../public/m_icon_pass.png" id="pswd1_img1" class="pswdImg"> -->
                        </span>
        <span class="error_next_box" v-if="errUserInfo">아이디나 비밀번호가 일치하지 않습니다.</span>
      </div>
      <!--로그인 상태 유지-->
      <label class="login_check_wrap">로그인 상태 유지
        <input type="checkbox" v-model="checked">
        <span class="checkmark"></span>
      </label>

      <!-- JOIN BTN  @click.prevent 설정시 위의 input에서 엔터를 누를 때 해당 버튼 이벤트 발생을 방지한다. -->
      <div class="btn_area">
        <button type="submit" id="btnJoin" @click.prevent="doLogin">
          <span>로그인</span>
        </button>
      </div>
      <p class="login_text"><a href="#!" class="member"><router-link to="./member/signupOne">회원가입&nbsp;</router-link></a>후 딩동오더를 이용해 보세요!</p>
      </form>
    </div>
    <p class="login_bottom" v-if="errUserInfo">
      아이디/비밀번호 분실 시 (브랜드)로 직접 연락해주세요!
    </p>
    <!-- content-->

  </div>
</template>
<script>
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


export default {
  name: 'Login',
  data(){
    return {
      userId: '',
      userPw: '',
      checked: false,
      errUserInfo: false,
    }
  },
  methods: {
    doLogin(){
      if(this.userId == ""){
        this.$swal.fire('아이디를 입력하세요.')
        this.$refs.memberIdInput.focus();
        return;
      } else if(this.userPw == ""){
        this.$swal.fire('비밀번호를 입력하세요.')
        this.$refs.memberPasswordInput.focus();
        return;
      }
      let userInfo = { userid: this.userId, userpw : this.userPw , checked : this.checked};
      this.$store.dispatch("loginStore/doLogin", userInfo).then(()=>{
        this.$router.push('/');
        console.log('1')
      }).catch((err)=>{
        if(err) {this.errUserInfo = true;}
        this.errorMessage=err.response.data.errormessage;
      });
    },
  },
  mounted(){
    this.$refs.memberIdInput.focus();
  }

}
</script>
<style>
@import '../../assets/css/Member/Login.css';
</style>
