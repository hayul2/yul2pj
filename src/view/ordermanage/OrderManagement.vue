<template>
  <Navbar />
  <div class="ordermanage_container">
    <div class="main_wrap">
    <h2 class="main_text">주문관리</h2>
      <div class="main_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>
      </div>
      <hr />
      <div class="component_bar">
        <router-link to="/ordermanagement/neworderlistone"><span class="component_name first">신규주문{{}}</span></router-link>
        <router-link to="/ordermanagement/preparinglistone"><span class="component_name">준비중{{}}</span></router-link>
        <router-link to="/ordermanagement/completedorder"><span class="component_name">완료주문{{}}</span></router-link>
       <router-link to="/ordermanagement/orderlist"><span class="component_name">주문내역</span></router-link>
      </div>
      <hr />
  </div>
  <router-view> </router-view>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components : {
    Navbar,
  },
}
</script>
<style>
@import '../../assets/css/Ordermanagement/Ordermanagement.css';
</style>
