<template>
<!--할인코드 진행중 코드 화면-->
  <div class="proceeding_container">
    <div class="proceeding_btn_wrap">
      <div class="proceeding_btn_wrap01">
        <!--sorting기능 추가 예정-->
        <button type="submit" class="proceeding_header_btn">전체</button>
        <button type="submit" class="proceeding_header_btn">다회용</button>
        <button type="submit" class="proceeding_header_btn">1회용</button>
      </div>
      <div class="proceeding_btn_wrap02">
        <button type="submit" class="proceeding_header_right_btn" @click="discountOpen = !discountOpen">
          +코드추가
        </button>
      </div>
    </div>
    <!--할인추가 콜랩스 시작-->
    <!--코드추가 클릭시 해당 창 콜랩스형태로 열림-->
    <div class="proceeding_modal_container" v-show="discountOpen">
      <div class="proceeding_modal_container01">
        <h5 class="proceeding_modal_title">할인코드 추가(대량등록)</h5>
        <p class="proceeding_modal_sub_title">- 할인코드는 발급 후 수정이 불가합니다.</p>
        <p class="proceeding_modal_sub_title">- 사용 또는 기간 만료 시 자동으로 만료됩니다.</p>
        <p class="proceeding_modal_sub_title">
          - 등록해야하는 쿠폰이 많은 경우 엑셀파일을 사용하여 일괄등록이 가능합니다.
        </p>
        <p class="proceeding_modal_sub_title">- 아래 양식을 다운로드하여 작성하신후 파일을 업로드 해주세요.</p>
        <xlsx />
        <!--엑셀파일 업로드 후 파싱작업 해야함-->
        <div class="proceeding_modal_input_wrap">
          <input
            type="file"
            accept=".xlsx, .xls"
            class="proceeding_modal_input"
            placeholder="파일추가"
            name="xlsx"
            id="fileXlsx"
            ref="xlsx"
            @change="isXlsx(Xlsx)"
            @focus="xlsxCheck = false"
          />
          <span class="error_xlsx_box" id="xsCheck" style-aria-live="assertive">파일을 첨부해주세요.</span>
          <button type="button" class="file_add_btn" @Click="fileAdd">파일보내기</button>
        </div>

        <div>
          <p class="proceeding_modal_sub_title">* 지원하는 파일 형식: xlsx</p>
          <p class="proceeding_modal_sub_title">* 파일이 양식과 맞지 않을 경우 추가되지 않습니다.</p>
        </div>
        <div class="proceeding_modal_btn_wrap">
          <button type="submit" class="proceeding_modal_btn" @click="discount">할인코드 추가</button>
        </div>
      </div>
      <div class="proceeding_modal_container02">
        <h5 class="proceeding_modal_title">할인코드 추가(개별등록)</h5>
        <p class="proceeding_modal_sub_title">- 할인코드는 발급 후 수정이 불가합니다.</p>
        <p class="proceeding_modal_sub_title">- 기간이 지나거나 사용하면 자동으로 종료처리 됩니다.</p>

        <form @submit="checkForm" action="/something" method="post" novalidate="true">
        <!--할인코드 번호 입력칸-->
          <label for="codeName" class="proceeding_modal_label form-label">
            할인코드
            <input
              type="text"
              placeholder="9-숫자를 입력해주세요(최대10자리)"
              maxlength="10"
              class="proceeding_modal_input"
              @input="bindNumber"
              id="dcNumber"
              v-model="dcNumber"
              @change="isDcNumber(dcNumber)"
              :class="{ textError02: numberError }"
              required
            />
          </label>
          <p id="dcNumberMsg" style aria-live="assertive" class="subError02">할인코드 정보를 입력해주세요.</p>
          <!--할인코드 명 입력칸-->
          <label for="" class="proceeding_modal_label"
            >할인코드명
            <input
              type="text"
              placeholder="ex) 1주년 기념 스페셜 할인"
              class="proceeding_modal_input"
              maxlength="20"
              id="dcName"
              v-model="dcName"
              @change="isDcMsg(dcName)"
              :class="{ textError02: dcNameError }"
            />
          </label>
          <p id="dcNameMsg" style aria-live="assertive" class="subError02">할인코드 명을 입력해주세요.</p>
          <!--할인항목 명 radio선택칸-->
          <label for="" class="proceeding_modal_label"
            >할인항목
            <input
              type="radio"
              name="proceeding_modal_radio_discount"
              class="proceeding_percentCount_radio"
              @click="radioClick()"
            />
            &nbsp결제금액&nbsp
            <!--퍼센트 할인-->
            <input
              type="text"
              class="proceeding_modal_small_input proceeding_percentCount_input"
              placeholder="퍼센트할인"
              maxlength="5"
              @input="countNumber"
              v-model="cNumber"
              id="cNumber"
              @change="iscNumber(cNumber)"
              :class="{ textError02: dpError }"
            />
            &nbsp%할인
          </label>
          <p id="cNumberMsg" style aria-live="assertive" class="subError02">할인 %를 입력해주세요.</p>
          <!--할인항목 명 radio선택칸-->
          <label for="" class="proceeding_modal_label">
            <input
              type="radio"
              name="proceeding_modal_radio_discount"
              class="proceeding_percentCount_radioTwo"
              @click="radioClickTwo()"
            />
            &nbsp결제금액&nbsp1회
            <!--금액 할인-->
            <input
              type="text"
              class="proceeding_modal_small_input proceeding_percentCount_inputTwo"
              placeholder="금액할인"
              maxlength="5"
              @input="priceNumber"
              v-model="pNumber"
              id="pNumber"
              @change="ispNumber(pNumber)"
              :class="{ textError02: dcError }"
            />&nbsp%할인
          </label>
          <p id="pNumberMsg" style aria-live="assertive" class="subError02">할인 금액을 입력해주세요.</p>
          <!--사용가능횟수 선택칸-->
          <label for="" class="proceeding_modal_label"
            >사용가능횟수 <input type="radio" name="proceeding_modal_radio" />&nbsp다회(제한없음)
            <input type="radio" name="proceeding_modal_radio" />&nbsp1회 (코드당 1번)
          </label>
          <!--할인코드 유효기간 선택칸-->
          <label for="" class="proceeding_modal_label"
            >유효기간 <input type="radio" name="proceeding_modal_radio_one" />&nbsp기간없음(무제한)
            <input type="radio" name="proceeding_modal_radio_one" />&nbsp기간설정
            <!--유효기간 설정 캘린더-->
            <Datepicker
              class="proceeding_modal_date"
              v-model="date"
              range
              datePicker
              modeHeight="120"
              locale="ko"
              weekStart="0"
              :enableTimePicker="false"
              value="2022-02-24"
            />
          </label>
        </form>
      </div>
    </div>
    <!--할인추가 콜랩스 끝-->
    <div class="proceeding_list_wrap">
      <table class="proceeding_table">
        <thead class="proceeding_head">
          <tr class="proceeding_title">
            <th scope="col">
              <!--체크박스-->
              <input
                type="checkbox"
                id="all-check"
                v-model="proceedingAllChecked"
                @click="proceedingCheckedAll($event.target.checked)"
              />
            </th>
            <th scope="col" class="proceeding_col">할인코드</th>
            <th scope="col" class="proceeding_col">발급일자</th>
            <th scope="col" class="proceeding_col">코드이름</th>
            <th scope="col" class="proceeding_col">할인항목</th>
            <th scope="col" class="proceeding_col">사용가능횟수</th>
            <th scope="col" class="proceeding_col">유효기간</th>
            <th scope="col" class="proceeding_col">설정</th>
          </tr>
        </thead>
        <tbody>
          <!--리스트 체크박스-->
          <tr v-for="(a, i) in $store.state.DiscountCodeData" :key="i">
            <td scope="row" class="proceeding_check_box">
              <input
                type="checkbox"
                :id="'proceedCheck_' + i.proceedId"
                :value="i"
                v-model="proceedSelected"
                @click="proceedPrint"
              />
            </td>
            <!-- <td>인덱스 {{a}}--{{i}}</td> -->
            <td class="proceeding_data" @click="DiscountCodeInfo = !DiscountCodeInfo">
              {{ $store.state.DiscountCodeData[i].codenum }}
            </td>
            <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].date }}</td>
            <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].codename }}</td>
            <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].discount }}</td>
            <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].count }}</td>
            <td class="proceeding_data">{{ $store.state.DiscountCodeData[i].validity }}</td>
            <td class="proceeding_data">
              <button type="button" class="proceeding_end_btn" value="hidden" @click="buttonEnd">종료</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!--할인코드 목록 클릭시 해당 할인코드 정보 열림(DB연결 해야함)-->
      <div class="discountinfo_wrap" v-show="DiscountCodeInfo">
        <div class="discountinfo_main_wrap">
          <h5 class="discountinfo_main_title">할인코드 정보</h5>
          <i class="xi-close" @click="DiscountCodeInfo = !DiscountCodeInfo"></i>
        </div>
        <div class="discountinfo_sub_wrap">
          <p class="discountinfo_text">발급일자 :{{}}2022.02.22</p>
          <p class="discountinfo_text">할인코드:{{}}3252353252</p>
          <p class="discountinfo_text">할인코드명 :{{}}</p>
          <p class="discountinfo_text">할인항목 :{{}}</p>
          <p class="discountinfo_text">사용가능횟수 :{{}}</p>
          <p class="discountinfo_text">유효기간 :{{}}</p>
        </div>
      </div>
    </div>
  </div>
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
      //할인코드 추가 열림/닫힘
      discountOpen: false,
      //할인코드 정보
      DiscountCodeInfo: false,
      date: "",
      //체크박스
      proceedingAllChecked: false,
      //할인코드
      dcNumber: "",
      //할인항목 퍼센트할인
      cNumber: "",
      //할인항목 금액할인
      pNumber: "",
      //할인코드명
      dcName: "",
      error: [],
      codeName: null,
      //항목 공백 체크
      numberError: false,
      dcNameError: false,
      dpError: false,
      dcError: false,
    };
  },
  methods: {
    //결제금액 퍼센트할인 라디오 클릭
    radioClickTwo() {
      let radio = document.querySelector(".proceeding_percentCount_radio");
      let input = document.querySelector(".proceeding_percentCount_input");
      input.disabled = true;
      radio.addEventListener("change", stateHandle);
      function stateHandle() {
        if (document.querySelector(".proceeding_percentCount_radioTwo").value === "") {
          input.disabled = true;
        } else if (document.querySelector(".proceeding_percentCount_input").value === "") {
          input.disabled = false;
        }
      }
    },
    //결제금액 금액할인 라디오 클릭
    radioClick() {
      let radioTwo = document.querySelector(".proceeding_percentCount_radioTwo");
      let inputTwo = document.querySelector(".proceeding_percentCount_inputTwo");
      inputTwo.disabled = true;
      radioTwo.addEventListener("change", stateHandleTwo);
      function stateHandleTwo() {
        if (document.querySelector(".proceeding_percentCount_radio").value === "") {
          inputTwo.disabled = true;
        } else if (document.querySelector(".proceeding_percentCount_inputTwo").value ===  "") {
          inputTwo.disabled = false;
        }
      }
    },
    //코드 종료 클릭시 경고창
    buttonEnd: function (event) {
      if (!window.confirm("정말 종료하시겠습니까?")) {
        event.preventDefault();
      }
    },
    //엑셀파일
    importExcel(event) {
      const file = event.target.files[0];
      let reader = new FileReader();
      let tmpResult = {};
      reader.onload = (e) => {
        let data = reader.result;
        // let data = e.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach((sheetName) => {
          console.log(workbook.Sheets[sheetName]);
          const roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          this.items.push(roa);
        });
        console.log(tmpResult);
        this.excelJsonData = tmpResult;
      };
      reader.readAsBinaryString(file);
    },
    //체크박스
    proceedingCheckedAll(checked) {
      this.proceedSelected = checked;
    },
    proceedSelected() {
      for (let i in this.boardList) {
        if (!this.boardList[i].proceedSelected) {
          this.proceedingAllChecked = false;
          return;
        } else {
          this.proceedingAllChecked = true;
        }
      }
    },
    //체크박스 끝

    //할인코드 값
    bindNumber(event) {
      this.dcNumber = event.target.value;
    },
    //할인항목 퍼센트할인
    countNumber(event) {
      this.cNumber = event.target.value;
    },
    //할인항목 금액할인
    priceNumber(event) {
      this.pNumber = event.target.value;
    },
    //input 공백 메세지
    isDcMsg() {
      let dc = document.getElementById("dcName").value;
      console.log(dc);
      if (dc == "") {
        document.getElementById("dcNameMsg").style.display = "block";
      } else if (dc != "") {
        document.getElementById("dcNameMsg").style.display = "none";
      }
    },
    //할인코드 유효성검사
    isDcNumber() {
      let dcN = document.getElementById("dcNumber").value;
      console.log(dcN);
      if (dcN == "") {
        document.getElementById("dcNumberMsg").style.display = "block";
      } else if (dcN != "") {
        document.getElementById("dcNumberMsg").style.display = "none";
      }
    },
    //할인항목 퍼센트할인 유효성검사
    iscNumber() {
      let cN = document.getElementById("cNumber").value;
      let cNr = document.querySelector(".proceeding_percentCount_radio").value;
      console.log(cN);
      console.log(cNr);
      if (cN == "") {
        document.getElementById("cNumberMsg").style.display = "block";
      } else if (cN != "disabled") {
        document.getElementById("cNumberMsg").style.display = "none";
      }
    },
    //할인항목 금액할인 유효성검사
    ispNumber() {
      let dcP = document.getElementById("pNumber").value;
      console.log(dcP);
      if (dcP == "") {
        document.getElementById("pNumberMsg").style.display = "block";
      } else if (dcP != "") {
        document.getElementById("pNumberMsg").style.display = "none";
      }
    },
    //엑셀파일 유효성검사
    isXlsx() {
      let xlsx = document.getElementById("fileXlsx").value;
      console.log(xlsx);
      if (xlsx == "") {
        document.getElementById("xsCheck").style.display = "block";
      } else if (xlsx != "") {
        document.getElementById("xsCheck").style.display = "none";
      }
    },
    //할인코드 항목추가 input 공백 체크
    discount() {
      if (this.isCount(this.code)) {
        this.numberError = true;
      }
      if (this.isCount(this.dcName)) {
        this.dcNameError = true;
      }
      if (this.isCount(this.dpName)) {
        this.dpError = true;
      }
      if (this.isCount(this.dcPrice)) {
        this.dcError = true;
      }
    },
    isCount(val) {
      if (val === undefined) return true;
      else if (val === null) return true;
      else if (val === "") return true;
      else return false;
    },
    //엑셀파일 지원파일형식 및 유효성검사
    fileAdd() {
      var xlsxCheck = document.getElementById("fileXlsx").value;
      let xlsxVal = this.$ref["xlsx"].value;
      xlsxVal = xlsxVal.slice(xlsxVal.indexOf(".") + 1).toLowercase();
      console.log(xlsxVal);
      console.log(xlsxCheck);
      if (xlsxCheck == "" || xlsxCheck == null) {
        document.getElementById("xsCheck").style.display = "block";
      } else if (xlsxCheck != "") {
        document.getElementById("xsCheck").style.display = "none";
      }
      if (xlsxVal != "xlsx" || xlsxVal == null) {
        alert("확장자 xlsx 파일만 첨부 가능합니다.");
        return false;
      }
    },
    //     radioClick() {
    //   let rc = document.getElementById("cNumber").value;
    //   console.log(rc);
    //   if (dc == disa) {
    //     document.getElementById("dcNameMsg").style.display = "block";
    //   } else if (dc != "") {
    //     document.getElementById("dcNameMsg").style.display = "none";
    //   }
    // },
  },
  watch: {
    //할인코드 공백시 에러메세지 띄움
    code(val) {
      if (val.length > 0) {
        this.numberError = false;
      } else if (val.length < 0) {
        this.numberError = true;
      }
    },
    //할인코드 명 공백시 에러메세지
    dcName(val) {
      if (val.length > 0) {
        this.dcNameError = false;
      }
    },
    //할인항목 에러메세지
    dpName(val) {
      if (val.length > 0) {
        this.dpError = false;
      }
    },
    dcPrice(val) {
      if (val.length > 0) {
        this.dcError = false;
      }
    },

    // getSoldSelected () {
    //   let proceedIds = []
    //   for (let i in this.DiscountCodeData) {
    //     if (this.DiscountCodeData[i].soldSelected) {
    //       proceedIds.push(this.DiscountCodeData[i].proceedId)
    //     }
    //   }
    // },

    //할인코드 코드추가 input only number
    dcNumber(val) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if (reg.exec(val) !== null) this.dcNumber = val.replace(/[^0-9]/g, "");

      //...만 입력하게 될 경우 체크
      if (isNaN(parseFloat(val))) this.dcNumber = "";
    },
    //할인코드 할인항목 input only number
    cNumber(val) {
      const count = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if (count.exec(val) !== null) this.cNumber = val.replace(/[^0-9]/g, "");

      //...만 입력하게 될 경우 체크
      if (isNaN(parseFloat(val))) this.cNumber = "";
    },
    //할인코드 할인금액 input only number
    pNumber(val) {
      const price = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/;

      //한글, 영문 체크
      if (price.exec(val) !== null) this.pNumber = val.replace(/[^0-9]/g, "");

      //...만 입력하게 될 경우 체크
      if (isNaN(parseFloat(val))) this.pNumber = "";
    },
  },
};
</script>

<style>
@import "../../assets/css/DiscountCode/DiscountCodeOne.css";
</style>
