<template>
  <div class="pay_container">
    <div>
      <div class="complete_box1">
        <div class="form_box">
          <span>
            <input type="checkbox" />
            <span class="one_checkbox">매장</span>
            <input type="checkbox" />
            <span>포장</span>
          </span>
          <span class="order_select">
            <select id="order_select" class="list">
              <option value="최신순">최신순</option>
              <option value="과거순">과거순</option>
            </select>
          </span>
        </div>
        <div class="complete_left" v-for="(orderData, i) in $store.state.orderData" :key="i">
          <div class="order_small_list">
          <div class="order_small_flex1">
            <span>[{{ $store.state.menuData[i].categories1 }}5개]</span>
            <span class="complete_type">[{{ $store.state.menuData[i].wating }}]</span>
          </div>
          <div class="order_small_flex2">
            <span>{{ $store.state.menuData[i].name }}</span>
            <span class="complete_time">{{ $store.state.menuData[i].date }}</span>
          </div>

          </div>
          <div class="num_box">
            <span class="complete_num">{{ 123 }}</span>
          </div>
        </div>
         <div class="order_btn-cover">
      <button :disabled="orderpageNum === 0" @click="prevPage" class="order_page-btn">
        <i class="xi-angle-left"></i>
      </button>
      <span class="page-count">{{ orderpageNum + 1 }} / {{ pageCount }} </span>
      <button :disabled="orderpageNum >= pageCount - 1" @click="nextPage" class="order_page-btn">
        <i class="xi-angle-right"></i>
      </button>
    </div>
      </div>
      <!--//결제내역//-->
      <div class="complete_box2">
        <div class="com_title">결제내역</div>
          <div class="pay_wrap">
            <div class="pay_wrap1">
              <div class="payment_left">카드번호</div>
              <div class="payment_left">승인번호</div>
              <div class="payment_left">카드종류</div>
              <div class="payment_left">할부개월</div>
              <div class="payment_left">거래일시</div>
              <div class="payment_left">비고</div>
            </div>
          <div class="pay_wrap2">
            <div class="payment_right">{{ $store.state.paymentData[0].cardNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].approveNum }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].cardType }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].installMent }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].dealDate }}</div>
            <div class="payment_right">{{ $store.state.paymentData[0].cardNote }}</div>
          </div>
        </div>
      </div>
      <div class="complete_box3">
        <div class="com_title">요청사항</div>
        <p class="com_request">얼음많이주세요!{{}}</p>
        <div class="com_title">주문내역</div>
        <div class="order_menulist_wrap">
          <div class="order_menulist_left">
            {{ $store.state.menuData[3].name }}
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].basic1 }}</div>
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].syrup1 }}</div>
              <div class="order_submenu_list">{{ $store.state.menuCostomData[0].cream2 }}</div>
          </div>
          <div class="order_menulist_right">
            <div class="order_price_list">{{ $store.state.priceData[0].menuprice1 }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].option }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].costom3 }}</div>
            <div class="order_price_list">{{ $store.state.priceData[0].costom2 }}</div>
          </div>
          </div>
          <hr />
          <div class="total_price">
          <div class="com_order_total">총 결제금액</div>
          <div class="com_total_price">{{ $store.state.priceData[0].total }}</div>
          </div>
         <div class="menulist_btn-cover">
          <router-link to="/OrderPrint"><button type="text" class="order_receipt_btn">주문표 인쇄</button></router-link>
          <button :disabled="menulistpageNum === 0" @click="prevPage2" class="menulist_page-btn">
            <i class="xi-angle-up"></i>
          </button>
          <span class="menulist_page-count">{{ menulistpageNum + 1 }} / {{ pageCount }} </span>
          <button :disabled="menulistpageNum >= pageCount - 1" @click="nextPage1" class="menulist_page-btn">
            <i class="xi-angle-down"></i>
          </button>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderpageNum : 0,
      menulistpageNum : 0,
    };
  },
  methods: {
    nextPage() {
      this.orderpageNum += 1;
    },
    prevPage() {
      this.orderpageNum -= 1;
    },
    //주문내역 영수증 버튼
    nextPage1() {
      this.menulistpageNum += 1;
    },
    prevPage2() {
      this.menulistpageNum -= 1;
    },
  },
};
</script>

<style>
@import '../../assets/css/Ordermanagement/CompletedOrder.css';
</style>
