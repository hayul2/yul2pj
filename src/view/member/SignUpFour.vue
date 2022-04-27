<template>
  <div class="container_fluid">
    <h4 class="shop_name">(가게이름) 가입 심사중 입니다 :)</h4>
    <div class="sub_text">
      <p>심사는 최대 7일까지 걸릴 수 있습니다(완료시 문자/이메일 알림)</p>
      <P>잘못 입력하셨을 경우 회원가입 신청 취소 후 다시 신청 해주세요.</P>
      <p>문의사항이 있으시면 (브랜드 대표번호)로 연락주세요!</p>
    </div>
    <div class="btn_box" @click="fire">회원가입 신청 취소</div>
  </div>
</template>

<script>


import store from '../../store'
import router from '../../router'

export default {
  methods: {
    fire () {
      this.$swal.fire({
        title: '회원가입 신청 취소',
        text: '가입 신청을 취소하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네',
        cancelButtonText: '아니오',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('SignUpCancel')
        }else if(result.dismiss){
          this.$swal.fire(
              '가입 신청 취소가 되지 않았습니다.'
          )
        }
      })
    }
  },
  mounted () {
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.selected)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userName)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userId)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.userPw)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.phNum)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.shopName)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.shopPhNum)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizAddr1)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizAddr2)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.bizZip)
    console.log('사인업3에서 넘어옴 : ', store.state.signupStore.etc)
  }
}
</script>

<style>
@import '../../assets/css/Member/SignUpFour.css';
</style>
