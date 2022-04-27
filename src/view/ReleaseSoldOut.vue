<template>
  <!-- 품절해제 페이지, 라우팅 path = /releasesoldout -->
  <div class="container">
    <div class="header_wrap">
      <span class="main_text">품절해제</span>
      <!--x버튼 클릭시 main으로 이동-->
      <router-link to="/main">
        <i class="xi-close"></i>
      </router-link>
    </div>
    <div class="sub_text_wrap">
      <p class="sub_text">-&nbsp; 품절상태인 메뉴/옵션목록만 표시됩니다. (숨김해제는 메뉴관리에서 가능)</p>
      <p class="sub_text">-&nbsp; 탭/페이지를 변경하셔도 체크박스는 유지됩니다.</p>
    </div>
    <div class="btn_wrap">
      <button type="text" class="menu_btn">전체</button>
      <button type="text" class="menu_btn">메뉴</button>
      <button type="text" class="menu_btn">옵션목록</button>
      <span> <button type="text" class="menu_btn">품절해제</button></span>
    </div>
    <div class="container">
      <table class="table">
        <thead class="category_head">
          <tr class="category_title">
            <th>
              <input
                type="checkbox"
                id="all-check"
                v-model="soldChecked"
                @click="soldAllChecked($event.target.checked)"
              />
            </th>
            <th scope="col" class="category_col">구분</th>
            <th scope="col" class="category_col">메뉴/옵션목록</th>
            <th scope="col" class="category_col">가격</th>
            <th scope="col" class="category_col">메뉴상태</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.menuData" :key="i">
            <th scope="row">
              <input
                type="checkbox"
                :id="'checkSold_' + i.soldId"
                :value="i"
                v-model="soldSelected"
                @click="soldPrint"
              />
            </th>
            <td>{{ $store.state.menuData[i].categories1 }}</td>
            <td>{{ $store.state.menuData[i].name }}</td>
            <td>{{ $store.state.menuData[i].price }}</td>
            <td>{{ $store.state.menuData[i].isSoldOut + "," + $store.state.menuData[i].isHidden }}</td>
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
import axios from "axios";
export default {
  data() {
    return {
      pageNum: 0,
      soldChecked: false,
      menuData: [],
    };
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    soldAllChecked(checked) {
      this.soldSelected = checked;
    },
    soldSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].soldSelected) {
          this.soldChecked = false;
          return;
        } else {
          this.soldChecked = true;
        }
      }
    },
    getSoldSelected() {
      let soldIds = [];
      for (let i in this.menuData) {
        if (this.menuData[i].soldSelected) {
          soldIds.push(this.menuData[i].soldId);
        }
      }
    },
  },
};
</script>

<style>
@import "../assets/css/ReleaseSoldOut.css";
</style>