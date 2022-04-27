<template>
  <!-- 메뉴관리 페이지의 과일 또는 토핑추가 게시판 페이지 -->
  <div class="toping_container">
      <div class="toping_title_wrap">
          <h4 class="toping_maintitle">과일 또는 토핑추가</h4>
          <span class="toping_sub_title">(필수, 최대선택갯수 3개, 연결메뉴 120개)</span>
      </div>
    <form class="toping_wrap">
      <div class="toping_left">
        <label class="toping_label">
          <input
            type="checkbox"
            class="toping_check"
            id="all-check"
            v-model="topingAllChecked"
            @click="topingCheckedAll($event.target.checked)"
          />
          전체선택
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">삭제</button>
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">숨김</button>
        </label>
        <label class="toping_label">
          <button type="button" class="toping_check_btn">정상</button>
        </label>
      </div>
      <div class="toping_right">
        <input
          type="text"
          v-model="search"
          @input="handleSearchInput"
          @keydown.tab="KeydownTab"
          name="categoriSearch"
          placeholder="search"
          class="toping_search"
          autofocus
        />
        <button type="button" class="toping_connect_btn" @click="connectOpen=!connectOpen">순서변경</button>
    

        <!--옵션추가 오프캔버스 시작-->
        <button
          class="toping_menu_btn02"
          type="button"
          @click="roleCheck">
          +옵션목록추가
        </button>

        <select class="toping_hidden_select">
          <option class="toping_hidden_btn">전체/정상/숨김</option>
          <option class="toping_hidden_btn" value="삭제">정상</option>
          <option class="toping_hidden_btn" value="숨김">숨김</option>
          <option class="toping_hidden_btn" value="숨김">품절</option>
        </select>
      </div>
    </form>
    <hr />
            <!--옵션 순서변경 시작-->
        <div class="toping_connect_wrap" v-show="connectOpen">
          <h5 class="toping_connect_title">옵션목록 순서 변경</h5>
          <div>
            <p class="toping_connect_sub_text">- 옵션의 순서는 메뉴편집 탭에서 변경할 수 있습니다.</p>
            <p class="toping_connect_sub_text">- 왼쪽의 아이콘을 잡고 드래그하여 순서변경이 가능합니다.</p>
            <p class="toping_connect_sub_text">- 오른쪽의 버튼으로 맨위, 맨아래 이동이 가능합니다.</p>
          </div>
        <draggable class="dragArea list-group w-full" :list="list" @change="log">
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center connect_drag_text"
            v-for="element in list"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>            

        </div>
        <!--옵션 순서변경 끝--> 
            <div class="toping_option_add_wrap"
            v-if="isUserRole"
        >
        <h4 class="toping_option_add_title">
            옵션목록 추가
        </h4>
        <p class="toping_option_add_subtitle">
            - 메뉴와 연결되는 카테고리를 설정할 수 있습니다.
        </p>
        <form>
            <label class="toping_option_add_label">옵션목록 및 추가가격</label>
                <input 
                  type="text" 
                  class="toping_option_add_input" 
                  placeholder="예)순한맛"
                  id="tpNumber"
                  v-model="tpNumber"
                  @change="isTpNumber(tpNumber)"
                  >
                  <p id="tpMsg" style-aria-live="assertive" class="subError03">옵션목록을 입력해 주세요.</p>
                <input 
                  type="text" 
                  class="toping_option_add_input" 
                  placeholder="예)500원" 
                  @input="topingNumber" 
                  id="opPrice"
                  v-model="opPrice"
                  @change="isPrice(opPrice)"
                  >
                  <p id="opMsg" style-aria-live="assertive" class="subError03">가격을 입력해 주세요.</p>
            <button type="submit" class="toping_option_add_btn">저장</button>
        </form>        
        </div>
    <div class="toping_list_wrap">
      <table class="toping_table">
        <thead class="toping_thead">
          <tr class="toping_title">
            <th scope="col"></th>
            <th scope="col" class="toping_col">옵션목록 명</th>
            <th scope="col" class="toping_col">추가금액</th>
            <th scope="col" class="toping_col">수정/삭제</th>
            <th scope="col" class="toping_col">숨김/품절</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.TopingData" :key="i">
            <td scope="row" class="toping_check_box">
              <input type="checkbox" 
              :id="'topingCheck_' + i.boardId" 
              :value="i" 
              v-model="topingSelected" 
              @click="topingPrint" 
              />
            </td>
            <td class="toping_data" title="마우스">{{ $store.state.TopingData[i].listname }}</td>
            <td class="toping_data">{{ $store.state.TopingData[i].price }}원</td>
            <td class="toping_data col-2">
                <div class="toping_data_btn_wrap">
                <button type="submit" class="toping_data_btn01" @click="hidden = !hidden">수정</button>
                <button type="submit" class="toping_data_btn02">삭제</button>
                </div>
            </td>
            <td class="toping_data">
              <select class="toping_condition" @change="editCondition($event)" v-model="conditionKey">
                <option class="toping_condition_text" value="null">상태설정</option>
                <option class="toping_condition_text" value="숨김">숨김</option>
                <option class="toping_condition_text" value="품절">품절</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="toping_add_wrap">
      <button type="submit" class="toping_add_last_btn">저장</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  components: {
    draggable:VueDraggableNext,
  },
  data() {
    return {
        isUserRole:false,
        hidden:false,
        conditionKey: null,
        pageNum: 0,
        active: false,
        searchList: "",
        search: "",
        topingAllChecked: false,
        connectOpen:false,
        list: [
          { name: '과일모둠', id: 1 },
          { name: '멜론추가', id: 2 },
          { name: '치즈추가', id: 3 },
          { name: '프라푸치노', id: 4 },
          { name: '병음료', id: 5 },
          { name: '디저트(케이크/빵)', id: 6 },
        ],
        dragging: false,
        tNumber:'',     
    };
  },
  methods: {
    roleCheck() {
      console.log('유저권한', this.getUserrole)
      if (this.getUserrole != 0) {
        this.isUserRole = false;
        alert('기능 권한이 없습니다.')
      } else if(this.getUserrole == 0){
        if(this.isUserRole == false){
          this.isUserRole = true;
        }else{
          this.isUserRole = false;
        }
      }
    },
    print() {
      console.log(this.selected);
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    topingCheckedAll(checked) {
      this.topingSelected = checked;
    },
    topingSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].topingSelected) {
          this.topingAllChecked = false;
          return;
        } else {
          this.topingAllChecked = true;
        }
      }
    },
    getSelected() {
      let boardIds = [];
      for (let i in this.cgData) {
        if (this.cgData[i].topingSelected) {
          boardIds.push(this.cgData[i].boardId);
        }
      }
    },
    menuCnt(obj) {
      _.forEach(obj, function (v, k, copy) {
        _.reduce(
          v,
          function (accum, v) {
            console.log("v", v);
            console.log("accum", accum);
          },
          3
        );
      });
    },
    topingNumber(event) {
      this.tNumber = event.target.value;
    },
    isTpNumber() {
      let tp = document.getElementById("tpNumber").value;
      console.log(tp);
      if ( tp == "") {
        document.getElementById("tpMsg").style.display = "block"
      } else if (tp != "") {
        document.getElementById("tpMsg").style.display = "none"
      }
    },
    isPrice() {
      let op = document.getElementById("opPrice").value;
      console.log(op);
      if ( op == "") {
        document.getElementById("opMsg").style.display = "block"
      } else if (op != "") {
        document.getElementById("opMsg").style.display = "none"
      }
    },
  },
  computed: {
    getUserrole(){
      return this.$store.getters['loginStore/getUserrole']
    }
  },
  setup() {},
  updated() {
    this.menuCnt(this.cgData);
  },
  watch: {
    tNumber(val) {
      const toping = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if(toping.exec(val)!==null) this.tNumber = val.replace(/[^0-9]/g,'');

      //...만 입력하게 될 경우 체크
      if(isNaN(parseFloat(val)))this.tNumber = '';
    },
  }
};
</script>

<style>
@import "../../assets/css/MenuManagement/MenuToping.css";
</style>
