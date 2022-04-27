<template>
  <div class="list_wrap">
    <router-link to="/OrderManagement/NewOrderListOne"><i class="xi-list-square list"></i></router-link>
    <router-link to="/OrderManagement/NewOrderListTwo"><i class="xi-apps list"></i></router-link>
      <select id="order_select" class="list">
        <option value="최신순">최신순</option>
        <option value="과거순">과거순</option>
      </select>
  </div>
  <div>
  <div class="order1-2_wrapper" v-for="(orderData, i) in $store.state.orderData" :key="i">
    <ul>
      <li class="order1-2_list">
        <div class="order1-2_left">
          <span class="order1-2_num">{{123}}</span>
            <span class="order1-2_type">{{}}매장</span>
            <span class="order1-2_time">{{}}13:00</span>
        </div>
          <div class="order1-2_middle">
            <span>[메뉴{{orderData.categories}}1개]</span>
            <span>[{{orderData.menu}}]</span>
            <span>{{}}요청사항</span>
            <span>{{}}바닐라 라떼는 샷 연하게 해주세요 :)</span>
          </div>
            <div class="order1-2_right">
              <router-link to="/OrderPrint" class="order1-2_right_inner1"><button type="text" class="order1-2_btn1"><span>주문표 인쇄</span></button></router-link>
              <router-link to="/OrderPrint" class="order1-2_right_inner2"><button type="text" class="order1-2_btn2"><span>준비중</span></button></router-link>
            </div>
      </li>
    </ul>
  </div>
  </div>

      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          <i class="xi-angle-left"></i>
        </button>
        <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
          <i class="xi-angle-right"></i>
        </button>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return{
            pageNum: 0
        }
    },
    methods: {
         nextPage () {
      this.pageNum += 1;
    },
    prevPage () {
      this.pageNum -= 1;
        }
    },
}
</script>

<style>
@import '../../assets/css/Ordermanagement/NewOrderListTwo.css';
</style>
