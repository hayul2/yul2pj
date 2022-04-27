<template>
<Navbar />
  <div class="sales_container">
    <div class="sales_wrap">
      <h2 class="sales_text">매출관리</h2>
      <div class="sales_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>  
      <hr />
      <div class="sales_component_bar">
        <router-link to="/SalesManagement/SalesManagementOne"><span class="sales_component_name first">월별매출</span></router-link>
        <router-link to="/SalesManagement/SalesManagementTwo"><span class="sales_component_name">기간설정</span></router-link>
      </div>
      <hr/>
  </div>
  <router-view> </router-view>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

  export default {
  components:{
    Navbar,
  },
  data() {
    return {
      step: 0,
    }
  },
  methods: {
    }
}
</script>
<style>
@import '../../assets/css/SalesManagement/SalesManagement.css';
</style>
