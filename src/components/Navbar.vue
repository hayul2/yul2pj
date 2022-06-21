<template>
  <div class="nav_container">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/main" class="nav-link">
        <div class="nav-wrap">
          <img src="../assets/img/logo.png" alt="logo">
        </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/menumanagement/categories" class="nav-link">
        <div class="nav-wrap">
        <i class="xi-cafe nav_icon"></i>
        <p class="nav-link">메뉴관리</p>
          <!-- <img src="../assets/img/menu.png" alt="menu"> -->
        </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/salesmanagement/SalesManagementOne" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-calculator nav_icon"></i>
            <p class="nav-link">매출관리</p>
            <!-- <img src="../assets/img/sales.png" alt="sales"> -->
          </div> 
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/ordermanagement/neworderlistone" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-chart-bar-square nav_icon"></i>
            <p class="nav-link">주문관리</p>
          <!-- <img src="../assets/img/order.png" alt="order"> -->
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/staffmanagementone" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-group nav_icon"></i>
            <p class="nav-link">직원관리</p>
          <!-- <img src="../assets/img/staff.png" alt="staff">             -->
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/operationmanagement" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-comment-o nav_icon"></i>
            <p class="nav-link">운영관리</p>
          <!-- <img src="../assets/img/cooper.png" alt="cooper">             -->
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/discountcode/discountcodeone" class="nav-link">
          <div class="nav-wrap">
            <i class="xi-percent  nav_icon"></i>
            <p class="nav-link">할인코드</p>
          <!-- <img src="../assets/img/discount.png" alt="discount">             -->
          </div>
        </router-link>
      </li>
      <li class="nav-item">
        <i class="xi-cloud-o"></i>
        <div class="btn-group dropend nav-info-btn">
          <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            img
          </button>
          <ul class="dropdown-menu">
            <router-link to="./myinfo" class="nav-link"><li><a class="dropdown-item" href="#">정보수정</a></li></router-link>
            <router-link to="" class="nav-link"><li><a class="dropdown-item" @click="doLogOut" href="#">로그아웃</a></li></router-link>
          </ul>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import store from '../store'

export default {
  data(){
    return{
      isUserRole : false,
    }
  },
  methods:{
    doLogOut () {
      store.dispatch('loginStore/doLogout').then(() => {
        location.reload();
        console.log('로그아웃 성공')
      })
    },
    
  },
}
</script>


<style>
@import '../assets/css/components/Navbar.css';
</style>
