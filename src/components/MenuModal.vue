<template>
  <!-- 메인페이지  메뉴현황 품절해제버튼 모달창-->
  <div class="black-bg" v-if="$store.state.MenuCheckModal == true">
    <div class="white-bg">
      <!-- 버튼클릭시 모달닫기 -->
      <div><p>품절해제</p>  <a >X</a>
      </div>
     <div><button>전체</button><button>메뉴</button><button>옵션목록</button> <span><button >품절해제</button></span></div>
      <div class="container">
        <p class="mb-5">포스팅 게시판</p>
        <table class="table">
          <thead>
          <tr>
            <th><input type="checkbox" id="all-check"> </th>
            <th scope="col">구분</th>
            <th scope="col">메뉴/옵션목록</th>
            <th scope="col">가격</th>
            <th scope="col">메뉴상태</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(a, i) in $store.state.menuData" :key="i">
            <th scope="row"><input type="checkbox"></th>
            <td>{{  }}</td>
            <td>{{  }}</td>
            <td>{{  }} </td>
            <td>{{  }}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script>

</script>
<style>
@import '../assets/css/components/MenuModal.css';
</style>
