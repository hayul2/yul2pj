<template>
  <div class="container">
    <div class="box_wrap">
      <p class="order_text">주문관리</p>
      <router-link to="/OrderManagement/NewOrderListOne"><button class="btn" type="submit">New</button></router-link>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p class="order_name">총주문수</p>
        <div>{{ $store.state.orderData.length }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">완료주문</p>
        <div>{{ $store.state.completedNum  }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">신규주문</p>
        <div>{{ $store.state.newOrderNum  }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">취소주문</p>
        <div>{{ $store.state.cancelOrder }}</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style>
@import '../assets/css/components/OrderManage.css';
</style>
