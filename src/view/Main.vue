<template>
  <Navbar/>
  <div class="main_container">
    <div class="main_call">

      <div class="main_right">
        <button class="main-btn animate__flash" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
        <p class="animated tada">로그인</p>
      </div>
    </div>
    <div class="component">
      <!-- 주문관리 컴포넌트 -->
      <OrderManage/>
    </div>
    <div class="component">
      <!-- 메뉴현황 컴포넌트 -->
      <Menu/>
    </div>
    <div class="component">
      <!-- 로그인 정보 컴포넌트 -->
      <MyInfo/>
    </div>

  </div>


</template>
<script>
import Menu from '@/components/Menu.vue'
import MyInfo from '@/components/MyInfo'
import OrderManage from '@/components/OrderManage.vue'
import Navbar from '@/components/Navbar.vue'
import router from '../router'
import 'animate.css'
export default {
  props: {

    //주문관리 데이터 프롭스 ---
    orderData: Object,
    //완료주문 개수
    completedNum: Number,
    //신규주문 개수
    newOrderNum: Number,
    //취소주문 개수
    cancelOrder: Number,
    //메뉴관리 데이터 프롭스 ---
    menuData: Object,
    //품절메뉴 개수
    soldOutNum: Number,
    //숨김메뉴 개수
    hiddenNum: Number,
    //운영관리 데이터 프롭스 ---
    shopData: Object,
    //영업중인 가게 수
    openShopNum: Number,
  },
  components: {
    Menu,
    MyInfo,
    OrderManage,
    Navbar,
  },
  data () {
    return {
      page404: null
    }
  }
  ,
  created () {
    this.page404 = this.$route.params
    console.log("params",this.$route.params.pathMatch)
    console.log("route",this.$router.getRoutes())
    console.log(this.page404)
    if (this.$route.params.pathMatch != null) {
      console.log('잘못된 접근')
      // this.window.reload();
      alert('잘못된 접근입니다')
      this.page404 = null
      router.go(1)
    }
  },
}
</script>
<style>
@import '../assets/css/Main.css';
</style>
