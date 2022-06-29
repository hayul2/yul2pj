<template>
  <!--매출관리 월별매출 컴포넌트-->
  <div class="month_container">
    <div class="month_wrap">
      <div class="month_left">
        <div class="month_left_wrap">
          <!-- <Datepicker v-model="month" monthPicker modeHeight="120" locale="ko"/> -->
          <input type="month" min="2022-03" max="2025-12" class="month_date" name="bdaymonth" value="2022-03" />
        </div>
        <div class="month_list_wrap">
          <div class="m_list_wrap1">
            <div class="month_text_left">총 매출금액</div>
            <div class="month_text_left">총 주문건수</div>
            <div class="month_text_left">총 주문메뉴</div>
          </div>

          <div class="m_list_wrap2">
            <div class="month_text_right">{{ totalPrice }}원</div>
            <div class="month_text_right">{{ totalOrder }}건</div>
            <div class="month_text_right">{{ totalMenu }}개</div>
          </div>
        </div>
      </div>
      <div class="month_right">
        <!-- <SalesSort v-on:sortItem="sortAllItem" /> -->
        <div class="sales_sort_btn_wrap">
          <!--sorting기능 추가 예정-->
          <select class="sales_sort_btn" name="sales" id="sales" v-model="selected" v-on:change="sortAllItem">
            품절해제
            <option class="log_check_Box" value="date-asc">최신순</option>
            <option class="log_check_Box" value="date-desc">과거순</option>
          </select>
        </div>
        <table class="table">
          <thead class="sales_head">
            <tr class="sales_title">
              <th scope="col" class="sales_col">주문일시</th>
              <th scope="col" class="sales_col">대기번호</th>
              <th scope="col" class="sales_col">구분</th>
              <th scope="col" class="sales_col">내용</th>
              <th scope="col" class="sales_col">금액</th>
              <th scope="col" class="sales_col">비고</th>
            </tr>
          </thead>
          <tbody>
            <!--데이터 내 비고란 '취소' 있을시 해당 열 텍스트컬러 RED로 변경해야함-->
            <tr v-for="(a, i) in $store.state.SalesData" :key="i" id="SalesData">
              <td class="sales_data">
                <router-link to="../ordermanage/orderprint">{{ $store.state.SalesData[i].orderdata }} </router-link>
              </td>
              <td class="sales_data">{{ $store.state.SalesData[i].watingnum }}</td>
              <td class="sales_data">{{ $store.state.SalesData[i].division }}</td>
              <td class="sales_data">{{ $store.state.SalesData[i].content }}</td>
              <td class="sales_data">{{ $store.state.SalesData[i].price }}원</td>
              <td class="sales_data">{{ $store.state.SalesData[i].etc }}</td>
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
  </div>
</template>

<script>
import { ref } from "vue";
import { forEach } from "lodash";
import _ from "lodash";
// import SalesSort from "./SalesSort.vue";

export default {
  components: {
  },
  data() {
    return {
      //sorting
      selected: "date-asc",
      //페이지네이션
      pageNum: 0,
      //총 매출금액
      totalPrice: 0,
      //총 주문건수
      totalOrder: 0,
      //총 주문메뉴 갯수
      totalMenu: 0,
      //더미데이터
      SalesData: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    this.calcTotalPrice(this.$store.state.SalesData);
    this.TotalMenuOrder(this.$store.state.SalesData);
    this.TotalMenuNum(this.$store.state.SalesData);
    console.log("created");
    let arr = document.getElementById("SalesData");
    if (arr == "취소") {
      document.getElementsByClassName(".sales_data").element.style.color = "#ff0000";
    } else if (arr === "") {
      document.getElementsByClassName(".sales_data").element.style.color = "#997fb5";
    }
    console.log(arr);
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    //총 매출금액
    calcTotalPrice(object) {
      let sum = 0;
      _.forEach(_.map(object, "price"), function (val) {
        sum += val;
      });
      this.totalPrice = sum;
    },
    //총 주문메뉴 건수
    TotalMenuOrder(object) {
      let sum = 0;
      _.forEach(_.map(object, "watingnum"), function () {
        sum += +1;
      });
      this.totalOrder = sum;
      // console.log(sum)
    },
    //총 주문메뉴 갯수
    TotalMenuNum(object) {
      let vm = this;
      _.forEach(_.map(object, "content"), function (val) {
        vm.totalMenu += +val.replace(/[^0-9]/gi, "");
      });
      console.log(this.totalMenu);
    },
    //sorting기능 추가 예정
    // sortSalesLatest() {
    //   this.$SalesData.sort(function(a, b) {
    //     return b.time - a.time;
    //   });
    // },
    // sortSalesOldest() {
    //   this.$SalesData.sort(function(a, b) {
    //     return a.time - b.time;
    //   });
    // },
    // sortAllItem(selectedSort) {
    //   if (selectedSort.value === "date-desc") {
    //     this.sortSalesLatest();
    //   } else if (selectedSort.value === "date-asc") {
    //     this.sortSalesOldest();
    //   }
    // }
    // sortSales() {
    //   this.
    // }
  },
  watch() {},
  setup() {
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
    return {
      month,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.$store.state.SalesData.length / 10);
    },
  },

  //돔 로드시 자동 최신순정렬//
  mounted() {
    console.log("mounted");
    // this.sortSalesLatest();
  },
};
</script>
<style>
@import "../../assets/css/SalesManagement/SalesManagementOne.css";
</style>
