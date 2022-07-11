<template>
<!--직원관리 리스트정렬 화면-->
<Navbar />
<!--직원관리 직원추가 화면-->
<StaffModal />

  <div class="staff_container">
    <div class="staff_wrap">
    <h2 class="staff_text">직원관리</h2>  
      <div class="staff_right">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span class="condition">: 영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div>   
      </div>   
      <hr />
  <div class="staff_list_wrap">
      <router-link to="/StaffManagementone"><i class="xi-list-square list"></i></router-link>
      <router-link to="/StaffManagementTwo"><i class="xi-apps list"></i></router-link>
      <button type="button" class="staff_one_addbtn" data-bs-toggle="modal" data-bs-target="#addition" >+ 직원추가</button>
  </div>
  <hr />
  <div class="staff_table_wrap">
    <table class="staff_table">
      <thead class="staff_head">
        <tr class="staff_title">
          <th scope="col-sm-6" class="staff_col">상태</th>
          <th scope="col-sm-6" class="staff_col">직급</th>
          <th scope="col-sm-6" class="staff_col">아이디</th>
          <th scope="col-sm-5" class="staff_col">권한</th>
          <th scope="col-sm-4" class="staff_col">설정</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in $store.state.StaffData" :key="i" class="staff_board">
          <!--///////상태////////-->
          <td><a href="#!" class="StaffCondition">{{ $store.state.StaffData[i].condition }}</a></td>
          <!--///////직급////////-->          
          <td>{{ $store.state.StaffData[i].rank }}</td>
          <!--///////아이디///////-->
          <td>{{ $store.state.StaffData[i].id }}</td>
          <td class="staff_authority">
            <button type="button" @click="authority" :class="{active: isActive}" class="btn authority" data-bs-toggle="button" autocomplete="off" aria-pressed="true">주문관리</button>
            <button type="button" class="btn authority_" data-bs-toggle="button" autocomplete="off" aria-pressed="true">상태관리</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off" aria-pressed="true">메뉴편집</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off" aria-pressed="true">매출관리</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off">직원관리</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off">로그확인</button>
            <button type="button" class="btn authority" data-bs-toggle="button" autocomplete="off">할인코드</button>
            </td>
          <td><button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staffsetting">직원설정</button></td>
        </tr>
      </tbody>
    </table>
  </div>
    <div class="s_btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="s_page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="s_page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="s_page-btn"
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
      isActive: false,
      pageCount: 0,
      condition:false,
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
    toggleClass: function(event) {
      this.isActive = !this.isActive;
      console.log('dd')
    }
  },
  watch: {

  }

};
</script>

<style>
@import '../../assets/css/StaffManagement/StaffManagementOne.css';
</style>
