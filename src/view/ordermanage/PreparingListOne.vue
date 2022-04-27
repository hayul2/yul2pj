<template>
  <div class="list_wrap">
    <router-link to="/ordermanagement/preparinglistone"><i class="xi-list-square list"></i></router-link>
    <router-link to="/ordermanagement/preparinglisttwo"><i class="xi-apps list"></i></router-link>
      <select id="order_select" class="list">
        <option value="최신순">최신순</option>
        <option value="과거순">과거순</option>
      </select>
  </div>
  <div class="order_wrapper" v-for="(orderData, i) in $store.state.orderData" :key="i">
    <div class="order_left">
      <span class="order_num">{{123}}</span>
      <div>
        <span class="order_type">{{}}매장</span>
        <span class="order_time">{{}}13:00</span>
      </div>
    </div>
    <div class="order_middle" >
      <span>[메뉴{{orderData.categories}}1개]</span>
      <span>{{ $store.state.menuData[i].name }}</span>
      <span>{{}}요청사항</span>
      <span>{{}}바닐라 라떼는 샷 연하게 해주세요 :)</span>
    </div>
    <div class="order_right">
      <router-link to="/OrderPrint" class="order_right_inner"><span>주문표 인쇄</span></router-link>
      <router-link to="/OrderPrint" class="order_right_inner"><span>메뉴완료</span></router-link>
    </div>
  </div>
      <div class="order-btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="order-page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="order-page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="order-page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>


</template>

<script>
export default {
  components : {
  },
   data() {
    return {
      pageNum: 0,
    };
  },
  methods: {
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      },
    },
}
</script>

<style>
@import '../../assets/css/Ordermanagement/PreparingListOne.css';
</style>
