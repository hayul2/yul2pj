<template>
<!--할인코드 종료된 코드 화면-->
  <div class="accomplished_container">
    <div class="accomplished_btn_wrap">
      <div class="accomplished_btn_wrap01">
        <!--sorting기능 추가 예정-->
        <button type="submit" class="accomplished_header_btn">1개월</button>
        <button type="submit" class="accomplished_header_btn">3개월</button>
        <button type="submit" class="accomplished_header_btn">전체</button>
      </div>
      <div class="accomplished_btn_wrap02">
        <button type="submit" class="accomplished_header_right_btn">전체삭제</button>
        <button type="submit" class="accomplished_header_right_btn" data-bs-toggle="modal" data-bs-target="#saveModal">
          저장
        </button>
        <!--sorting작업해야함-->
        <select class="accomplished_select">
          <option class="accomplished_option" value="최신순">최신순</option>
          <option class="accomplished_option" value="과거순">과거순</option>
        </select>
      </div>
    </div>

    <div class="accomplished_list_wrap">
      <table class="accomplished_table">
        <thead class="accomplished_head">
          <tr class="accomplished_title">
            <th scope="col">
              <!--체크박스-->
              <input
                type="checkbox"
                id="all-check"
                v-model="accomplishedAllChecked"
                @click="accomplishedCheckedAll($event.target.checked)"
              />
            </th>
            <th scope="col" class="accomplished_col">할인코드</th>
            <th scope="col" class="accomplished_col">종료일자</th>
            <th scope="col" class="accomplished_col">코드이름</th>
            <th scope="col" class="accomplished_col">할인항목</th>
            <th scope="col" class="accomplished_col">사용가능횟수</th>
            <th scope="col" class="accomplished_col">유효기간</th>
            <th scope="col" class="accomplished_col">종료구분</th>
            <th scope="col" class="accomplished_col">설정</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in $store.state.DiscountCodeData" :key="i">
            <td scope="row" class="accomplished_check_box">
              <input
                type="checkbox"
                :id="'accomplishedCheck_' + i.accomplishedId"
                :value="i"
                v-model="accomplishedSelected"
                @click="accomplishedPrint"
              />
            </td>
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="accomplished_data" @click="accomplishedcode = !accomplishedcode">
              {{ $store.state.DiscountCodeData[i].codenum }}
            </td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].date }}</td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].codename }}</td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].discount }}</td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].count }}</td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].validity }}</td>
            <td class="accomplished_data">{{ $store.state.DiscountCodeData[i].accomplished }}</td>
            <td class="accomplished_data">
              <button type="button" class="accomplished_end_btn" value="hidden" @click="buttonDelete">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!--종료된 코드 클릭시 해당코드 정보 열림-->
      <div class="accomplishedcode_wrap" v-show="accomplishedcode">
        <div class="discountinfo_main_wrap">
          <h5 class="discountinfo_main_title">할인코드 정보</h5>
          <i class="xi-close" @click="accomplishedcode = !accomplishedcode"></i>
        </div>
        <div class="discountinfo_sub_wrap">
          <p class="discountinfo_text">발급일자 :{{}}2022.02.22</p>
          <p class="discountinfo_text">할인코드:{{}}3252353252</p>
          <p class="discountinfo_text">할인코드명 :{{}}</p>
          <p class="discountinfo_text">할인항목 :{{}}</p>
          <p class="discountinfo_text">사용가능횟수 :{{}}</p>
          <p class="discountinfo_text">유효기간 :{{}}</p>
          <p class="discountinfo_text">종료구분 :{{}}</p>
        </div>
      </div>
    </div>
  </div>
  <!--저장 모달창 시작(삭제항목 클릭후 저장-->
  <div class="modal" tabindex="-1" id="saveModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body savemodal_text">저장하시겠습니까?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-primary">저장</button>
        </div>
      </div>
    </div>
  </div>
  <!--저장 모달창 끝-->
  <router-view></router-view>
</template>

<script>
import xlsx from "../xlsx.vue";
export default {
  components: {
    xlsx,
  },
  data() {
    return {
      accomplishedOpen: false,
      //종료된 코드 정보
      accomplishedcode: false,
      //체크박스
      accomplishedSelected: [],
      accomplishedAllChecked: false,
      date: "",
      codeCompletion: "",
    };
  },
  methods: {
    //개별삭제 버튼
    buttonDelete: function (event) {
      if (!window.confirm("정말 삭제하시겠습니까?")) {
        event.preventDefault();
      }
    },
    //체크박스
    accomplishedCheckedAll(checked) {
      this.accomplishedSelected = checked;
    },
    accomplishedSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].accomplishedSelected) {
          this.accomplishedAllChecked = false;
          return;
        } else {
          this.accomplishedAllChecked = true;
        }
      }
    },
    getSoldSelected() {
      let proceedIds = [];
      for (let i in this.DiscountCodeData) {
        if (this.DiscountCodeData[i].soldSelected) {
          proceedIds.push(this.DiscountCodeData[i].proceedId);
        }
      }
    },
    // importExcel(event) {
    //     const file = event.target.files[0];
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //         let data = reader.result;
    //         // let data = e.target.result;
    //         let workbook = XLSX.read(data, {type: 'binary'});
    //         workbook.SheetNames.forEach(sheetName => {
    //             const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    //             this.items.push(roa);
    //         });
    //     };
    //     reader.readAsBinaryString(file);
    // },
  },
};
</script>

<style>
@import "../../assets/css/DiscountCode/DiscountCodeTwo.css";
</style>
