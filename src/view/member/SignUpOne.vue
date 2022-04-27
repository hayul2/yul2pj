<template>
  <div class="container_fluid">
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text1">
        STEP1. 회원약관 동의
      </p>
      <!-- content-->
      <div id="content">
        <div class="terms_box1">
          <label class="login_check_wrap"><span class="terms_text">딩동오더 이용약관, 개인정보 처리방침 광고성 정보 수신(선택)에 모두 동의합니다.</span>
            <input type="checkbox" v-model="allSelected" @click="allSelect">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">14세 이상
            <input type="checkbox" v-model="selected" :value="agree[0]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">이용약관
            <input type="checkbox" v-model="selected" :value="agree[1]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">개인정보 처리방침
            <input type="checkbox" v-model="selected" :value="agree[2]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="terms_box">
          <label class="login_check_wrap">광고성 정보 마케팅 동의 (선택)
            <input type="checkbox" v-model="selected" :value="agree[3]" @change='updateCheckall()'>
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <!--prev-->
      <div class="term_wrap">
        <div class="term_box">

          <router-link to="./member/Login">
            <button type="button" id="term_btnJoin1">
              <span>이전</span>
            </button>
          </router-link>
          <!--next-->
          <router-link to="./member/signuptwo">
            <button type="button" v-if="nextBtn==true" @click="sendRouteParam" id="term_btnJoin2">
              <span>다음</span>
            </button>
          </router-link>
        </div>
      </div>

    </div>
  </div>


</template>
<script>
import router from '../../router'
import store from '../../store/index.js'
const sweet = require("sweetalert2");


export default {
  data () {
    return {
      agree: ['a', 'b', 'c', 'd'],
      allSelected: false,
      selected: [],
      noneSelected: [],
      nextBtn: false,
    }
  },
  methods: {


    sendRouteParam () {
      store.state.signupStore.selected = this.selected
    },
    updateCheckall: function () {
      if (this.agree.length == this.selected.length) {
        this.allSelected = true
        this.selected = [...this.agree]
      } else {
        this.allSelected = false
      }
    },
  },
  computed: {
    allSelect: function () {
      if (!this.allSelected) {
        this.$store.state.signupStore.selected = [...this.agree];
        this.selected = [...this.agree];

      } else {
        this.$store.state.signupStore.selected = [...this.noneSelected];
        this.selected = [...this.noneSelected];
      }
    },
  },
  watch: {
    selected (a) {
      if (a.length == 4) {
        this.nextBtn = true
      } else if (a.length == 3) {
        for (let i = 0; i < a.length; i++) {
          this.nextBtn = a[i] !== this.agree[3];
        }
      }else{
        this.nextBtn = false;
    }
    }
  },
  mounted () {

  }
}
</script>


<style>
@import '../../assets/css/Member/SignUpOne.css';
</style>
