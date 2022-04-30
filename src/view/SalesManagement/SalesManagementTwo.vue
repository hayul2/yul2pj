<template>
<!--매출관리 기간별매출 컴포넌트-->
<div class="month_container">
  <div class="month_wrap">
    <div class="month_left">
      <div class="month_left_wrap">
          <Datepicker v-model="date" range datePicker modeHeight="120" locale="ko" weekStart="0" :enableTimePicker="false" value="2022-02-08"/>
      </div>
    <div class="month_list_wrap">
      <div class="m_list_wrap1">
        <div class="month_text_left">총 매출금액</div>
        <div class="month_text_left">총 주문건수</div>
        <div class="month_text_left">총 주문메뉴</div>
      </div>

      <div class="m_list_wrap2">
        <div class="month_text_right">{{ SalesPrice }}원</div>
        <div class="month_text_right">{{ SalesOrder }}건</div>
        <div class="month_text_right"> {{ SalesNumber }}개</div>
      </div>
    </div>
    </div>
<div class="month_right">
  <div class="sales_sort_btn_wrap">
    <!--sorting기능 추가 예정-->
  <select class="sales_sort_btn" v-model="selected">
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
          <tr v-for="(a, i) in $store.state.SalesData" :key="i">
            <td class="sales_data"><router-link to="../ordermanage/orderprint">{{ $store.state.SalesData[i].orderdata }}</router-link></td>
            <td>{{ $store.state.SalesData[i].watingnum }}</td>
            <td>{{ $store.state.SalesData[i].division }} </td>
            <td>{{ $store.state.SalesData[i].content }}</td>
            <td>{{ $store.state.SalesData[i].price }}원</td>
            <td>{{ $store.state.SalesData[i].etc }}</td>
          </tr>
          </tbody>
        </table>
      <!-- <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} </span>
      <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">
        <i class="xi-angle-right"></i>
      </button>
    </div> -->

</div>
</div>
</div>

</template>
<script>
import { ref, onMounted } from 'vue';
import { forEach } from 'lodash'
import _ from 'lodash'

  export default {
  components:{
  },
  data() {
    return {
      show:false,
      step: 0,
      pageNum: 0,
      SalesPrice:0,
      SalesOrder:0,
      SalesNumber:0,
      selected:[]
    }
  },
  methods: {
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      },
      //총 매출금액
      calcSalesPrice(object) {
        let sum = 0
        _.forEach(_.map(object, 'price'), function (val, key) {
          sum += val
        })
        this.SalesPrice = sum
      },
      //총 주문건수
      calcTotalOrder (object) {
        let sum = 0
        _.forEach(_.map(object, 'watingnum'), function(val, key) {
          sum += + 1
        })
        this.SalesOrder = sum
        // console.log(sum)
      },
      //총 주문메뉴 건수
      TotalOrderNum (object) {
        let sum = this
        _.forEach(_.map(object, 'content'), function(val) {
          sum.SalesNumber += +val.replace(/[^0-9]/gi,'');
        })
        console.log(sum.SalesNumber)
      },
    },
    setup() {
        const date = ref();

        // For demo purposes assign range from the current date
        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
        })
        
        return {
            date,
        }
    },
    created () {
      this.calcSalesPrice(this.$store.state.SalesData)
      this.calcTotalOrder(this.$store.state.SalesData)
      this.TotalOrderNum(this.$store.state.SalesData)
  }
}




</script>
<style>
@import '../../assets/css/SalesManagement/SalesManagementOne.css';
</style>
