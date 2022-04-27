<template>
  <Navbar />
  <!-- 로그확인 페이지, 라우팅 path = /Logcheck -->
  <div class="log_container">
    <div class="log_header_wrap">
      <span class="log_main_text">로그확인</span>
      <!--x버튼 클릭시 OperationManagement 운영관리로 이동-->
      <router-link to="/OperationManagement">
        <i class="xi-close-thin"></i>
      </router-link>
    </div>
    <div class="log_btn_wrap">
      <div class="category_wrap">
        <button type="text" class="log_menu_btn">전체</button>
        <button type="text" class="log_menu_btn">1주일</button>
        <button type="text" class="log_menu_btn">1개월</button>
        <button type="text" class="log_menu_btn">3개월</button>
        <button type="text" class="log_menu_btn" @click="detail = !detail">상세조회</button>
        <div class="log_hidden_date" v-show="detail">
          <Calendar />
          <button type="button" class="log_hidden_btn">조회</button>
        </div>
      </div>
      <select id="sorted" class="s_menu_btn">
        품절해제
        <option class="log_check_Box" >최신순</option>
        <option class="log_check_Box" >과거순</option>
      </select>
    </div>
    <div class="log_wrapper">
      <table class="table log_table">
        <thead class="log_head">
          <tr class="log_title">
            <th></th>
            <th scope="col" class="log_col">시간</th>
            <th scope="col" class="log_col">아이디</th>
            <th scope="col" class="log_col">아이피</th>
            <th scope="col" class="log_col">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.LogCheckData" :key="i">
            <th scope="row"></th>
            <td class="col-2 ">{{ $store.state.LogCheckData[i].time }}</td>
            <td>{{ $store.state.LogCheckData[i].Id }}</td>
            <td class="col-2">{{ $store.state.LogCheckData[i].IP }}</td>
            <td>{{ $store.state.LogCheckData[i].text }}</td>
          </tr>
        </tbody>
      </table>
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
      </div>
    </div>
  </div>

</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Calendar from '@/view/Calendar.vue';
import LogCheck from '../../assets/LogCheckData';


export default {
  components: {
    Navbar,
    Calendar,
  },
  data() {
    return {
      LogCheck: LogCheck,
      detail:false,
      name: 'text',
      pageNum: 0,
    }
},
  computed: {
  },
    methods: {
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      },
      sortBtn() {
        this.$emit("")
      }
  },
}


</script>

<style>
@import '../../assets/css/OperationManagement/LogCheck.css';
</style>
