<template>
<!--카테고리 메뉴연결 싱글페이지-->
  <div class="menucon_container">
<h4 class="menucon_title">
    카테고리 메뉴 연결
</h4>
<p class="menucon_text">- 순서변경버튼으로 카테고리에 연결된 메뉴 순서 변경이 가능합니다.</p>
<p class="menucon_text">- 페이지를 이동해도 체크박스 설정은 유지됩니다.</p>
<div class="menucon_btn_wrap">
    <div class="menucon_btn_left">
        <button type="button" class="menucon_btn">전체메뉴</button>
        <button type="button" class="menucon_btn">연결가능메뉴</button>
        <button type="button" class="menucon_btn">연결된메뉴</button>
    </div>
    <div class="menucon_btn_right">
        <router-link to="/menumanagement/MenuConnect"><button type="button" class="menucon_btn">순서변경</button></router-link>
    </div>
</div>
<div class="menucon_search_wrap">
    <div class="menucon_search_left_wrap">
        <input 
            type="checkbox"
            id="all-check" 
            v-model="menuconAllChecked" 
            @click="menuconCheckedAll($event.target.checked)"        
        >
        <label for="menucon_label" class="menucon_label">전체선택</label>
        <button type="button" class="menu_search_btn">연결</button>
        <button type="button" class="menu_search_btn">해제</button>
    </div>
    <div class="menucon_search_right_wrap">
        <input type="text" placeholder="search" class="menucon_search">
    </div>
</div>
<div class="connect_table_wrap">
    <table class="menucon_table">
        <thead class="menucon_thead">
            <tr class="menucon_table_title">
                <th scope="col" class="menucon_table_title"></th>
                <th scope="col" class="menucon_table_title col-6">메뉴명</th>
                <th scope="col" class="menucon_table_title col-2">가격</th>
                <th scope="col" class="menucon_table_title col-2">메뉴상태</th>
                <th scope="col" class="menucon_table_title col-2">메뉴연결</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(a, i) in $store.state.CategoryData" :key="i">
                <td scope="row">
                    <input 
                        type="checkbox"
                        :id="'menuconCheck_' + i.boardId"
                        :value="i"
                        v-model="menuconSelected"
                        @click="menuconPrint"
                    >
                </td>
                <td>{{ $store.state.CategoryData[i].catename }}</td>
                <td>{{ $store.state.CategoryData[i].price }}원</td>
                <td>{{ $store.state.CategoryData[i].menucondition }}</td>
                <router-link to="/menumanagement/MenuConnecttwo"><td class="cate_data"><button type="button" class="cate_connect_btn">메뉴연결</button></td></router-link>                
            </tr>
        </tbody>
    </table>
</div>
  </div>
  <MenuConnectthree />
  <router-view></router-view>
</template>

<script>
import MenuConnectthree from './MenuConnectthree.vue'
export default {
    components: {
      MenuConnectthree,
    },
      data() {
      return {
          CategoryData:[],
          menuconAllChecked:false,
      }
    },
    methods: {
        menuconCheckedAll(checked) {
        this.menuconSelected = checked
    },
        menuconSelected () {
      for (let i in this.boardList) {
        if(! this.boardList[i].menuconSelected) {
          this.menuconAllChecked = false;
            return;
              } else {
                this.menuconAllChecked = true;
              }
            }
        },    
        getSelected() {
        let boardIds = [];
        for (let i in this.CategoryData) {
            if(this.CategoryData[i].menuconSelected) {
            boardIds.push(this.CategoryData[i].boardId);
            }
        }
        }
    },
}
</script>

<style>
@import '../../assets/css/MenuManagement/MenuConnecttwo.css';
</style>