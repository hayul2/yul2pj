<template>

  <div class="container">
    <div class="box_wrap">
      <p class="order_text">메뉴현황</p>
      <!-- 품절해제 버튼 누르면 App.vue에 menuModal 오픈되는 커스텀이벤트
       @click="changeMenuTrue" -->
      <router-link to="releaseSoldout"><button class="btn" type="submit">품절해제</button></router-link>
      <a href="#"><i class="xi-angle-right-min"></i></a>
    </div>
    <div class="order_container">
      <div class="order_box">
        <p class="order_name">전체메뉴</p>
        <div>{{ $store.state.menuData.length}}</div>
      </div>
      <div class="order_box">
        <p class="order_name">품절메뉴</p>
        <div>{{ $store.state.soldOutNum }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">정상운영</p>
        <div>{{ $store.state.openShopNum }}</div>
      </div>
      <div class="order_box">
        <p class="order_name">숨김메뉴</p>
        <div>{{ $store.state.hiddenNum }}</div>
      </div>
    </div>
  </div>

</template>
<script>

</script>

<style>
@import '../assets/css/components/Menu.css';
</style>
