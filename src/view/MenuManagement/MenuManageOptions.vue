<template>
  <!-- 메뉴관리 페이지의 옵션편집 게시판 페이지 -->
  <div class="menuoption_container">
    <form class="menuoption_wrap">
      <div class="menuoption_left">
        <label class="menuoption_label">
          <input
            type="checkbox"
            class="menuoption_check"
            id="all-check"
            v-model="optionAllChecked"
            @click="optionCheckedAll($event.target.checked)"
          />
          전체선택
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">삭제</button>
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">숨김</button>
        </label>
        <label class="menuoption_label">
          <button type="button" class="menuoption_check_btn">정상</button>
        </label>
      </div>
      <div class="menuoption_right">
        <input
          type="text"
          v-model="search"
          @input="handleSearchInput"
          @keydown.tab="KeydownTab"
          name="categorySearch"
          placeholder="search"
          class="menuoption_search"
          autofocus
        />
        <!--옵션추가 오프캔버스 시작-->
        <button
          class="menuoption_menu_btn02"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuoption_offcanvars"
          aria-controls="menuoption_offcanvars"
        >
          +옵션추가
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="menuoption_offcanvars"
          aria-labelledby="menuoption_offcanvarsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title menuoption_off_title" id="menuoption_offcanvarsLabel">
              옵션추가(옵션정보 입력)
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <form>
                <div class="mb-3">
                  <label for="" class="">* 옵션명</label>
                  <input 
                    type="text" 
                    id="optNa" 
                    @change="errorOptionAdd" 
                    class="form-control" 
                    placeholder="예)맵기" />
                 <span class="error_next_box2" id="optionNa" style aria-live="assertive">필수 정보 입니다.</span>
                </div>
                <div class="mb-3">
                  <label for="" class="">* 옵션목록 및 추가가격</label>
                  <input 
                    type="text" 
                    id="optDe" 
                    class="form-control mb-2" 
                    placeholder="예)순한맛" />
                  <input 
                    type="text" 
                    id="optPr" 
                    @change="errorOptionDeAdd" 
                    class="form-control" 
                    placeholder="예)500원" 
                    @input="optionPrice" 
                    :value="opNumber" 
                    maxlength="10"/>
                   <span class="error_next_box2" id="optionPr"  style aria-live="assertive">필수 정보 입니다.</span>
                </div>
                <div class="mb-3">
                  <label class="menuoption_form_label">* 선택가능 옵션 수</label>
                  <span>옵션은 최대</span> 
                  <input 
                    type="number"
                    min="0" max="5" 
                    class="m-2" 
                    @input="menuoptionNumber" 
                    :value="mNumber" />
                  <span>까지 선택 가능합니다.</span>
                  <p class="option_subtitle">- 등록한 옵션목록 개수만큼 설정 가능합니다.</p>         
                </div>
                <div class="mb-3">
                  <label class="menuoption_form_label">* 필수여부</label>
                  <input type="radio" name="menuoption_input" class="menuoption_input" />필수(옵션을 선택해야 주문가능)<br />
                  <input type="radio" name="menuoption_input" class="menuoption_input" />선택(옵션을 선택하지 않아도 주문가능)
                </div>
                <button type="submit" class="menuoption_add_btn">옵션 추가 완료</button>
              </form>
            </div>
          </div>
        </div>
        <!--옵션추가 오프캔버스 끝-->
        <select class="menuoption_hidden_select">
          <option class="menuoption_hidden_btn">전체/정상/숨김</option>
          <option class="menuoption_hidden_btn" value="삭제">정상</option>
          <option class="menuoption_hidden_btn" value="숨김">숨김</option>
        </select>
      </div>
    </form>
    <div class="menuoption_list_wrap">
      <table class="menuoption_table">
        <thead class="menuoption_thead">
          <tr class="menuoption_title">
            <th scope="col"></th>
            <th scope="col" class="menuoption_col">옵션명</th>
            <th scope="col" class="menuoption_col">필수여부</th>
            <th scope="col" class="menuoption_col">옵션목록</th>
            <th scope="col" class="menuoption_col">연결된 메뉴</th>
            <th scope="col" class="menuoption_col">메뉴연결</th>            
            <th scope="col" class="menuoption_col">숨김</th>
            <th scope="col" class="menuoption_col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.OptionData" :key="i">
            <td scope="row" class="cate_check_box">
              <input 
                type="checkbox" 
                :id="'optionCheck_' + i.boardId" 
                :value="i" 
                v-model="optionSelected" 
                @click="optionPrint" />
            </td>
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="menuoption_data">
              <router-link to="/menumanagement/menutoping">
              {{ $store.state.OptionData[i].optionname }}
              </router-link>
            </td>
            <td class="menuoption_data" title="마우스">{{ $store.state.OptionData[i].condition }}</td>
            <td class="menuoption_data">{{ $store.state.OptionData[i].optionlist }}</td>
            <td class="menuoption_data">{{ $store.state.OptionData[i].menulist }}</td>
            <td class="menuoption_data">
              <router-link to="/menumanagement/MenuConnecttwo">
                <button type="button" class="menuoption_connect_btn">메뉴연결</button>
              </router-link>
            </td>
            <td class="menuoption_data">
              <select class="menuoption_condition" @change="editCondition($event)" v-model="conditionKey">
                <option class="menuoption_condition_text" value="null">상태설정</option>
                <option class="menuoption_condition_text" value="숨김">숨김</option>
                <option class="menuoption_condition_text" value="품절">품절</option>
                <option class="menuoption_condition_text" value="정상상태">정상상태</option>
              </select>
            </td>
            <td class="menuoption_data_box">
              <button type="button" class="menuoption_icon"><i class="xi-close"></i></button
              ><!--삭제-->
              <button
                type="button"
                class="menuoption_icon"
                data-bs-toggle="offcanvas"
                data-bs-target="#menuoption_"
                aria-controls="menuoption_"
              >
                <i class="xi-pen"></i></button
              ><!--수정-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--옵션수정 오프캔버스 시작-->
      <div class="offcanvas offcanvas-start" tabindex="-1" id="menuoption_" aria-labelledby="menuoption_Label" aria-controls="offcanvasMenuOption">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="menuoption_Label">옵션정보 수정</h5>
          <button
            class="btn-close text-reset"
            data-bs-toggle="offcanvas"
            data-bs-dismiss="offcanvas menuoption_correction"
            aria-label="Close"
            data-bs-target="#offcanvasMenuOption"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <form>
              <label for="" class="form-label menuoption_form_label">* 옵션명</label>
              <input 
                type="text" 
                class="menuoption_input form-control" 
                id="optionName"
                v-model="optionName"
                @change="isOpName(optionName)"
                :class="{textError03 : onError}"
                />
                <p id="opErMsg" class="subError04" style aria-live="assertive"> 입력해주세요.</p>
              <div class="mb-3">
                <label class="menuoption_form_label">* 필수여부</label>
                <input 
                  type="radio" 
                  name="menuoption_input" 
                  class="menuoption_input" 
                  checked
                  />
                  필수(옵션을 선택해야 주문가능)<br />
                <input 
                  type="radio" 
                  name="menuoption_input" 
                  class="menuoption_input" />
                  선택(옵션을 선택하지 않아도 주문가능)
              </div>
              <div class="mb-3">
                <label class="menuoption_form_label">* 선택가능 옵션 수</label>
                <span>옵션은 최대</span>
                <input 
                  type="number" 
                  min="0" 
                  max="5" 
                  maxlength="2" 
                  class="m-2" 
                  id="optionNumber"
                  v-model="optionNumber"
                  @change="isOpNumber(optionNumber)"
                  :class="{textError03 : opnError}"
                  />
                <span>까지 선택 가능합니다.</span>
                <p id="opNMsg" class="subError04" style aria-live="assertive">선택해주세요.</p>
                <p class="option_subtitle">- 등록한 옵션목록 개수만큼 설정 가능합니다.</p>
              </div>
              <button type="submit" class="menuoption_add_btn">옵션정보 수정</button>
            </form>
          </div>
        </div>
      </div>
      <!--옵션수정 오프캔버스 끝-->
    </div>
    <div class="menuoptions_add_wrap">
      <button type="submit" class="menuoptions_add_btn">저장</button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  data() {
    return {
      conditionKey: null,
      pageNum: 0,
      active: false,
      searchList: "",
      search: "",
      opNumber: '',
      opName: '',
      mNumber:'',
      optionName:'',
      optionNumber:'',
      //체크박스
      optionAllChecked: false,
      //항목 공백체크
      onError: false,
      opnError: false,
    };
  },
  methods: {
    print() {
      console.log(this.selected);
    },
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    optionCheckedAll(checked) {
      this.optionSelected = checked;
    },
    optionSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].optionSelected) {
          this.optionCheckedAll = false;
          return;
        } else {
          this.optionCheckedAll = true;
        }
      }
    },
    getSelected() {
      let boardIds = [];
      for (let i in this.cgData) {
        if (this.cgData[i].optionSelected) {
          boardIds.push(this.cgData[i].boardId);
        }
      }
    },
    option() {
      if (this.isNumber(this.onName)) {
        this.onError = true;
      }
      if (this.isNumber(this.opnName)) {
        this.opnError = true;
      }
    },
    isNumber(val) {
      if (val === undefined) return true;
      else if (val === null) return true;
      else if (val === "") return true;
      else return false;
    },
     errorOptionAdd() {
      if (this.optNa == "") {
        document.getElementById("optionNa").style.display = "block";
        return false;
      } else if (this.optNa != "") {
        document.getElementById("optionNa").style.display = "none";
        return false;
      }
      
    },
    errorOptionDeAdd() {
       if (this.optDe == "") {
        document.getElementById("optionPr").style.display = "block";
        return false;
      } else if (this.optDe != "") {
        document.getElementById("optionPr").style.display = "none";
        return false;
      }
    },

    optionPrice(event) {
      this.opNumber = event.target.value;
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
    editCondition(event) {
      console.log(event.target.value);
    },
    menuoptionNumber(event) {
      this.mNumber = event.target.value;
    },
    isOpName () {
      let on = document.getElementById("optionName").value;
      console.log(on)
      if (on == "") {
        document.getElementById("opErMsg").style.display = "block"
      } else if (on != "") {
        document.getElementById("opErMsg").style.display = "none"
      }
    },
    isOpNumber () {
      let opn = document.getElementById("optionNumber").value;
      console.log(opn)
      if (opn == "") {
        document.getElementById("opNMsg").style.display = "block"
      } else if (opn != "") {
        document.getElementById("opNMsg").style.display = "none"
      }
    },
  },
  watch: {
    //옵션추가 금액
    opNumber(val) {
      const price = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if(price.exec(val)!==null)
      this.opNumber = val.replace(/[^0-9]/g,'');

      //...만 입력하게 될 경우 체크
      if(isNaN(parseFloat(val)))
      this.opNumber = '';
    },
    mNumber(val) {
      const option = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if(option.exec(val)!==null)
      this.mNumber = val.replace(/[^0-9]/g,'');

      //...만 입력하게 될 경우 체크
      if(isNaN(parseFloat(val)))
      this.mNumber = '';
    },   
    optionName(val) {
      if (val.length > 0) {
        this.onError = false
      } else if (val.length < 0) {
        this.onError = true;
      }
    },
    optionNumber(val) {
      if (val.length > 0) {
        this.opnError = false
      } else if (val.length < 0) {
        this.opnError = true;
      }
    },
  },
  updated() {
    this.menuCnt(this.cgData);
  },
};
</script>

<style>
@import "../../assets/css/MenuManagement/MenuManageOptions.css";
</style>
