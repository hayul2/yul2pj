<template>
  <div class="update_container">
    <div class="update_wrap">
      <h4 class="update_title">가입 신청 취소</h4>
      <!-- PW1 -->
      <div>
        <h3 className="join_title"><label>아이디</label></h3>
        <span className="box int_pass">
                            <input type="text" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="가입신청시 아이디를 입력해 주세요." v-model="userid" ref="" @change="checkPW"
                                   @focus="checkFlag = false">
                        </span>
        <span className="error_next_box"></span>
      </div>
      <!-- PW2 -->
      <div>
        <h3 className="join_title"><label>비밀번호</label></h3>
        <span className="box int_pass">
                            <input type="password" id="pswd2-1" className="int" maxLength="16"
                                   placeholder="가입신청시 비밀번호를 입력해 주세요." v-model="userpw" ref="" @change="checkPW"
                                   @focus="checkFlag = false">

                        </span>
        <span className="error_next_box"></span>
      </div>
    </div>
    <div class="pws_info_btn_wrap">
      <button type="button" class="pws_info_btn" @click="returnPage">돌아가기</button>
      <button type="button" class="pws_info_btn" @click="deleteUser">가입 신청 취소</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import router from '../../router'

export default {
  name: 'UpdateBizMember',
  data () {
    return {
      userid: '',
      userpw: '',
      pwCheck: false,
    }
  },
  methods: {
    deleteUser () {
      axios({
        url: '/api/deleteuser',
        method: 'post',
        data: {
          'userid': this.userid,
          'userpw': this.userpw
        }
      }).then(res => {
        if (res.data == 1) {
          this.$swal.fire({
            title: '회원가입 신청 취소 완료.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '확인',
          }).then((result) => {
            if (result.isConfirmed) {
              location.replace('/login')
            }
          })
        } else {
          this.$swal('입력하신 아이디나 비밀번호가 틀립니다.')
        }
      })
    },
    returnPage(){
      router.go(-1)
    }
  },
}
</script>

<style scoped>
@import '../../assets/css/Member/UpdateBizMember.css';
</style>