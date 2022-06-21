<template>
  <div class="container">
    <img src="../assets/img/logo.png" alt="logo">
    <p class="info_text">하율커피 </p>
    <div class="wrap">
      <div class="wrap1">
        <div class="info_left">매장코드</div>
        <div class="info_left">매장명</div>
        <div class="info_left">매장번호</div>
        <div class="info_left">접속 계정</div>
        <div class="info_left">직책</div>
      </div>

      <div class="wrap2">
        <div class="info_right">1231234{{ getShopCode }}</div>
        <div class="info_right">사상점{{ getShopName }}</div>
        <div class="info_right">051-123-4567{{ getShopPhNum }}</div>
        <div class="info_right">hayulstaff1{{ getUserId }}</div>
        <div class="info_right">매니저{{ getMgName }}</div>
      </div>
    </div>
    <div class="info_order">
      <p class="info_order_text">하율오더 관련 문의</p>
      <div class="wrap">
        <div class="wrap1">
          <div class="info_left">전화번호</div>
          <div class="info_left">이메일</div>
        </div>
        <div class="wrap2">
          <div class="info_right">010-1234-5678{{}}</div>
          <div class="info_right">hayul@naver.com{{}}</div>
        </div>
      </div>
      <button type="button" class="logout-btn" @click="doLogOut">로그아웃</button>
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'

export default {
  data () {
    return {
      shopCode: '',
      shopName: '',
      shopPhNum: '',
      manager: '',
    }
  },
  props: {
    //운영관리 데이터 프롭스 ---
    shopData: Object,
    //영업중인 가게 수
    openShopNum: Number,
  },
  methods: {
    doLogOut () {
      store.dispatch('loginStore/doLogout').then(() => {
        // alert('로그아웃 되었습니다.')
        location.reload()
        console.log('로그아웃 성공')
      })
    },
  },

  computed: {
    getShopName () {
      return store.getters['loginStore/getShopName']
    },
    getShopPhNum () {
      return store.getters['loginStore/getShopPhNum']
    },
    getMgName () {
      return store.getters['loginStore/getMgName']
    },
    getShopCode () {
      return store.getters['loginStore/getShopcode']
    },
    getUserId () {
        return store.getters['loginStore/getId']
    }

  }
}
</script>
<style>
@import '../assets/css/components/MyInfo.css';
</style>
