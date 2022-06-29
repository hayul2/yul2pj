<template>
  <Navbar />
  <div class="menu_container">
    <div class="menument_wrap">
      <h2 class="menu_main_text">메뉴관리</h2>
      <div class="sales_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>
    </div>
    <div class="menu_router_wrap">
      <router-link to="/menumanagement/categories"><span class="menu_router_name">카테고리편집</span></router-link> |
      <router-link to="/menumanagement/menus"><span class="menu_router_name">메뉴편집</span> </router-link> |
      <router-link to="/menumanagement/options"> <span class="menu_router_name">옵션편집</span></router-link>
    </div>
  </div>
  <hr />
  <router-view></router-view>
</template>
<script>
import Navbar from "../../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      menuTab: 0,
    };
  },
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
};
</script>
<style>
@import "../../assets/css/MenuManagement/MenuManagement.css";
</style>
