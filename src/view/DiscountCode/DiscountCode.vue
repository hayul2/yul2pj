<template>
<Navbar />
    <div class="discount_container">    
      <div class="discount_wrap">
      <h2 class="discount_main_text">할인코드</h2>
      <div class="discount_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div> 
      <div class="discount_router_wrap">
      <router-link to="/DiscountCode/DiscountCodeOne">
        <span class="discount_router_name">진행중코드</span>
      </router-link> 
      <router-link to="/DiscountCode/DiscountCodeTwo">
        <span class="discount_router_name">종료된코드</span>
      </router-link> 
    </div>
    </div>
    <hr />
    <router-view></router-view>



</template>
<script>
import Navbar from '@/components/Navbar.vue'

  export default {
    data(){
      return {
      }
    },
    props:{
   
    },
    components : {
      Navbar
    },

  }

</script>
<style>
@import '../../assets/css/DiscountCode/DiscountCode.css';
</style>
