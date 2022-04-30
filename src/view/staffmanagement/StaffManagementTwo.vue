<template>
<!--직원관리 박스정렬 화면-->
<Navbar />
<StaffModal />
    <div class="stafftwo_container">
    <div class="stafftwo_wrap">
    <h2 class="stafftwo_text">직원관리</h2>  
      <div class="stafftwo_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>   
      <hr />
  <div class="stafftwo_list_wrap">
      <router-link to="/StaffManagementone"><i class="xi-list-square list"></i></router-link>
      <router-link to="/StaffManagementTwo"><i class="xi-apps list"></i></router-link>
      <button type="button" class="staff_two_addbtn" data-bs-toggle="modal" data-bs-target="#addition" data-bs-whatever="@mdo">+ 직원추가</button>
  </div>
  <hr />
  <div class="staff_wrapper">
    <div class="staff_top_box" v-for="(a, i) in $store.state.StaffData" :key="i">
      <span class="staff_img">IMG</span>
      <div class="staff_grid_wrap">
        <p>{{ $store.state.StaffData[i].rank }}({{ $store.state.StaffData[i].id }})</p>
        <p>{{ $store.state.StaffData[i].condition }}</p>
       </div>
      <button type="button" class="staff-icon" data-bs-toggle="modal" data-bs-target="#staffsetting"><i class="xi-ellipsis-v"></i></button>
      <div class="staff_btn_box">
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">주문관리</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">상태관리</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">메뉴편집</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">매출관리</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off">직원관리</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off">로그확인</button>
        <button type="button" class="staff_authority_btn" data-bs-toggle="button" autocomplete="off">할인코드</button>
      </div>    
      </div>


  </div>
    <div class="s_two_btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="s_two_page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="s_page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="s_two_page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import StaffModal from '../../components/StaffModal.vue';
// import axios from 'axios';
export default {
  components: { 
    Navbar,
    StaffModal,
    },
  data() {
    return {
      pageNum: 0,
      isToggled : false,
    };
  },
  props: {

  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
  },

};
</script>

<style>
@import '../../assets/css/StaffManagement/StaffManagementTwo.css';
</style>