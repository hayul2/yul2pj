<template>
  <div class="list_wrap">
    <select id="order_select" class="list">
      <option value="최신순">최신순</option>
      <option value="과거순">과거순</option>
    </select>
  </div>
  <!-- 품절해제 페이지, 라우팅 path = /releasesoldout -->

  <div class="ordermenu_container">
    <table class="order_table">
      <thead class="category_head">
        <tr class="category_title">
          <th scope="col" class="category_col">주문일시</th>
          <th scope="col" class="category_col">대기번호</th>
          <th scope="col" class="category_col">구분</th>
          <th scope="col" class="category_col">내용</th>
          <th scope="col" class="category_col">금액</th>
          <th scope="col" class="category_col">비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(a, i) in $store.state.menuData" :key="i">
          <td>{{ $store.state.menuData[i].date }}</td>
          <td>{{ $store.state.menuData[i].number }}</td>
          <td>{{ $store.state.menuData[i].wating }}</td>
          <td>{{ $store.state.menuData[i].name }}</td>
          <td>{{ $store.state.menuData[i].price }}</td>
          <td>{{ $store.state.menuData[i].isSoldOut }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        <i class="xi-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
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
};
</script>

<style>
@import '../../assets/css/Ordermanagement/OrderList.css';
</style>
