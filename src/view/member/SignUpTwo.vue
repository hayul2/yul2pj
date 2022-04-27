<template>
  <div className="container_fluid">
    <h1 className="member_text">회원가입</h1>
    <!-- wrapper -->
    <div id="wrapper">
      <p className="border_text2">STEP2. 로그인/사업자정보 입력</p>
      <!-- content-->
      <div id="content">
        <!-- ID -->
        <div>
          <h3 className="join_title">
            <label htmlFor="id">아이디</label>
          </h3>
          <span className="box int_id">
            <input
              type="text"
              id="id2"
              className="int"
              maxLength="20"
              v-model="userId"
              @change="isUser(userId)"
              @focus="checkFlag = false"
            />
            <span className="step_url" v-show="userCheck1">사용가능한 아이디 입니다.</span>
            <span className="step_url" v-show="userCheck2">이미 사용중인 아이디 입니다.</span>
            <span class="error_next_box1" id="idMsg" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
          <span className="error_next_box"></span>
        </div>
        <!-- PW1 -->
        <div>
          <h3 className="join_title"><label>비밀번호</label></h3>
          <span className="box int_pass">
            <input
              type="password"
              id="pswd2-1"
              className="int"
              maxLength="16"
              placeholder="8~16자의 영문/숫자를 조합"
              v-model="userPw1"
              ref=""
              @change="checkPW"
              @focus="checkFlag = false"
            />
            <span class="error_next_box1" id="pw1Msg" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
          <span className="error_next_box"></span>
        </div>
        <!-- PW2 -->
        <div>
          <h3 className="join_title"><label>비밀번호 재확인</label></h3>
          <span className="box int_pass_check">
            <input
              type="password"
              id="pswd2-2"
              className="int"
              maxlength="16"
              v-model="userPw2"
              @change="checkPW"
              @focus="checkFlag = false"
            />
            <span className="step_url" v-show="this.userPw1 == this.userPw2 && this.userPw1 != ''"
              >비밀번호가 동일</span
            >
            <span className="step_url" v-show="this.userPw1 != this.userPw2">비밀번호가 동일하지 않습니다.</span>
            <span class="error_next_box1" id="pw2Msg" style aria-live="assertive">필수 정보 입니다.</span>
          </span>

          <span className="error_next_box"></span>
        </div>
        <!--name-->
        <div>
          <h3 className="join_title"><label>대표자 이름</label></h3>
          <span className="box int_name">
            <input
              type="text"
              id="name2"
              className="int"
              maxLength="20"
              v-model="userName"
              @change="errorCh"
              placeholder="이름을 입력해주세요."
              @focus="checkFlag = false"
            />
            <span class="error_next_box1" id="name" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
        </div>
        <!--number-->
        <div>
          <h3 className="join_title"><label>대표자 번호</label></h3>
          <div id="num_wrap">
            <!-- BIRTH_MM -->
            <div id="num_first">
              <span className="box">
                <select id="number" @change="phoneNumConcat()" className="sel" v-model.trim="firstNum" ref="firstNum">
                  <option disabled>선택</option>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <span class="error_next_box1" id="phNum" style aria-live="assertive">필수 정보 입니다.</span>
              </span>
            </div>
            <!-- BIRTH_YY -->
            <div id="num_second">
              <span className="box">
                <input
                  type="text"
                  id="second2"
                  className="int"
                  maxLength="4"
                  v-model.trim="secondNum"
                  ref="secondNum"
                  @focus="checkFlag = false"
                  oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </span>
            </div>
            <!-- BIRTH_DD -->
            <div id="num_dd">
              <span className="box">
                <input
                  @change="phoneNumConcat()"
                  type="text"
                  id="dd2"
                  className="int"
                  maxLength="4"
                  v-model.number="thirdNum"
                  ref="thirdNum"
                  @focus="checkFlag = false"
                  oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                />
              </span>
            </div>
          </div>

          <span className="error_next_box"></span>
        </div>
        <!--shop name-->
        <div>
          <h3 className="join_title"><label>매장 이름</label></h3>
          <span className="box int_name">
            <input
              type="text"
              id="name3"
              className="int"
              @change="errorSh"
              maxLength="20"
              v-model.trim="shopName"
              @focus="checkFlag = false"
            />
            <span class="error_next_box1" id="shname" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
          <span className="error_next_box"></span>
        </div>
        <!-- shop number -->
        <div>
          <h3 className="join_title"><label>매장 대표번호</label></h3>
          <span className="box int_mobile">
            <input
              type="text"
              id="mobile2"
              className="int"
              maxLength="11"
              placeholder="'-'을 제외한 연락처 번호를 입력해주세요."
              v-model.trim="shopPhNum"
              ref="shopPhNum"
              @focus="checkFlag = false"
              @change="errorSh2"
              oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
            />
            <span class="error_next_box1" id="shnum" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
          <span className="error_next_box"></span>
        </div>
        <!--shop address-->
        <div>
          <h3 className="join_title"><label>매장 주소</label></h3>
          <span className="box int_mobile">
            <input
              type="text"
              id="address2"
              ref="address"
              className="int"
              maxLength="20"
              v-model.trim="address"
              placeholder="매장 주소"
              @focus="checkFlag = false"
            />
            <button type="submit" className="addr_btn" @click="execDaumPostcode()" value="우편번호 찾기">
              주소검색
            </button>
          </span>
          <span className="box int_mobile">
            <input
              type="text"
              id="detailAddress2"
              className="int"
              maxLength="20"
              v-model.trim="extraAddress"
              placeholder="매장 상세주소"
              @focus="checkFlag = false"
            />
          </span>
          <span className="box int_mobile">
            <input
              type="text"
              className="int"
              v-model.trim="postcode"
              placeholder="우편번호"
              @change="errorCh"
              @focus="checkFlag = false"
            />
          </span>
          <span className="box int_mobile">
            <input
              type="text"
              className="int"
              id="extraAddress2"
              ref="extraAddress"
              v-model.trim="etc"
              placeholder="참고항목"
            />
            <span class="error_next_box1" id="shaddress" style aria-live="assertive">필수 정보 입니다.</span>
          </span>
        </div>
        <!-- JOIN BTN-->
        <div className="btn_area" @click="goNextPage">
          <span
            ><router-link to="./member/signupthree" @click="sendParam">
              <button type="button" id="btnJoin">다음</button>
            </router-link></span
          >
        </div>
      </div>
      <!-- content-->
    </div>
  </div>
</template>
<script>
import router from "../../router";
//인스턴스화 시켜서 ORM Mapping 필요함.
import store from "../../store/index.js";
import axios from "axios";
import duam1 from "../../assets/postcode.v2.js";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
  props: {
    signupAgree: {
      type: [Array, String],
      default: function () {
        return [""];
      },
    },
  },
  data() {
    return {
      //회원 아이디
      userId: "",
      //회원 비밀번호
      userPw1: "",
      userPw2: "",
      //사업자대표 이름
      userName: "",
      //사업자 휴대폰 번호
      userPhNum: "",
      //매장이름
      shopName: "",
      //매장대표번호
      shopPhNum: "",
      //주소 우편번호
      postcode: "",
      //매장 주소
      address: "",
      //매장 상세주소
      extraAddress: "",
      //참고항목
      etc: "",
      //휴대폰번호 맨앞자리
      firstNum: null,
      //휴대폰번호 중간 4자리
      secondNum: "",
      //휴대폰번호 끝 4자리
      thirdNum: "",
      //아이디 및 비밀번호 유효성 체크
      userCheck1: false,
      userCheck2: false,
      userPwCheck: false,
    };
  },
  methods: {
    //null 체크해서 화면 보여주기
    errorCh() {
      let name = document.getElementById("name2").value;
      let secnum = document.getElementById("second2").value;
      let shadd = document.getElementById("address2").value;

      if (name == "") {
        document.getElementById("name").style.display = "block";
        return false;
      } else if (name != "") {
        document.getElementById("name").style.display = "none";
        return false;
      }
      if (secnum == "") {
        document.getElementById("phNum").style.display = "block";
        return false;
      } else if (secnum != "") {
        document.getElementById("phNum").style.display = "none";
        return false;
      }
    },

    errorSh() {
      let ofname = document.getElementById("name3").value;

      if (ofname == "") {
        document.getElementById("shname").style.display = "block";
        return false;
      } else if (ofname != "") {
        document.getElementById("shname").style.display = "none";
        return false;
      }
    },
    errorSh2() {
      let ofnum = document.getElementById("mobile2").value;

      if (ofnum == "") {
        document.getElementById("shnum").style.display = "block";
        return false;
      } else if (ofnum != "") {
        document.getElementById("shnum").style.display = "none";
        return false;
      }
    },

    isUser() {
      let id = document.getElementById("id2").value;
      let idRegExp = /^[a-zA-z0-9]{4,12}$/;

      console.log(typeof this.userId);
      console.log(this.userId);
      if (id == "") {
        document.getElementById("idMsg").style.display = "block";
      } else if (id != "") {
        document.getElementById("idMsg").style.display = "none";
      }
      if (id.length < 6) {
        this.$swal("아이디는 최소 6자리 이상입니다.");
      } else if (id.search(/\s/) !== -1) {
        this.$swal("아이디에 공백은 불가능합니다.");
      } else if (id.search(/[~!@#$%^&*()_+|<>?:{}]/) !== -1) {
        this.$swal("아이디에 특수문자 불가능합니다.");
      }
      else {
        axios({
          url: "/api/isuser",
          method: "post",
          data: { userid: this.userId },
        }).then((res) => {
          if (res.data == 1) {
            console.log("아이디 존재");
            this.userCheck1 = false;
            this.userCheck2 = true;
          } else {
            console.log("아이디 없음");
            this.userCheck1 = true;
            this.userCheck2 = false;
          }
        });
      }
    },
    checkPW() {
      let pwd = document.getElementById("pswd2-1").value; //eslint-disable-line no-unused-vars
      let pwd1 = document.getElementById("pswd2-2").value;
      console.log(typeof this.userPw1);
      console.log(this.userPw1);
      if (pwd == "") {
        document.getElementById("pw1Msg").style.display = "block";
      } else if (pwd != "") {
        document.getElementById("pw1Msg").style.display = "none";
      }
      if (pwd1 == "") {
        document.getElementById("pw2Msg").style.display = "block";
      } else if (pwd1 != "") {
        document.getElementById("pw2Msg").style.display = "none";
      }

      if (pwd.length < 8) {
        this.$swal("비밀번호는 최소 8자리 이상입니다.");
      } else if (pwd.search(/\s/) !== -1) {
        this.$swal("비밀번호에 공백은 불가능합니다.");
      } else if (pwd.search(/[a-zA-Z]/) || pwd.search(/[0-9]/) == -1 || pwd.search(/[~!@#$%^&*()_+|<>?:{}]/) !== -1) {
        this.$swal("영문자와 숫자로만 조합이 가능합니다.");
      }
    },
    isEmpty(data) {
      if (data == "" || data == null || data == undefined) {
        return true;
      } else {
        return false;
      }
    },
    goNextPage() {
      this.checkFlag = true;
      if (
        !this.isEmpty(this.userId) &&
        !this.isEmpty(this.userPw1) &&
        !this.isEmpty(this.userPw2) &&
        !this.isEmpty(this.userName) &&
        !this.isEmpty(this.secondNum) &&
        !this.isEmpty(this.thirdNum) &&
        !this.isEmpty(this.shopName) &&
        !this.isEmpty(this.shopPhNum) &&
        !this.isEmpty(this.address) &&
        !this.isEmpty(this.extraAddress) &&
        !this.isEmpty(this.postcode)
      ) {
        return (this.$store.state.signupStore.isNull = true);
      } else {
        this.$swal("필수 정보들을 입력하세요");
        return (this.$store.state.signupStore.isNull = false);
      }
    },
    insertDTO() {
      let user = new uservo();
      user.userName = this.userName;
      user.userPw = this.userPw;
      console.log(user);
    },
    test() {
      this.$hi();
      console.log(store.state.signupStore.selected);
    },
    //휴대폰번호 입력받고 합치기
    phoneNumConcat() {
      let phoneNum = "";
      this.userPhNum = phoneNum.concat(this.firstNum, this.secondNum, this.thirdNum);
      console.log(this.userPhNum);
      //번호 null 체크 화면 보여주기
      console.log( this.nsel);
      if (this.secondNum == "" && this.thirdNum == "" && this.firstNum == null) {
        document.getElementById("phNum").style.display = "block";
        return false;
      } else if (this.secondNum != "" && this.thirdNum != "" && this.firstNum!=null) {
        document.getElementById("phNum").style.display = "none";
        return false;
      }
    },
    sendParam() {
      (store.state.signupStore.userId = this.userId),
        (store.state.signupStore.userName = this.userName),
        (store.state.signupStore.userPw = this.userPw1),
        (store.state.signupStore.phNum = this.userPhNum),
        (store.state.signupStore.shopName = this.shopName),
        (store.state.signupStore.shopPhNum = this.shopPhNum),
        (store.state.signupStore.bizAddr1 = this.address),
        (store.state.signupStore.bizAddr2 = this.extraAddress),
        (store.state.signupStore.bizZip = this.postcode),
        (store.state.signupStore.etc = this.etc);
    },
    //daum map api
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress += this.extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;

          if (this.address2 == "") document.getElementById("shaddress").style.display = "block";
          else if (this.address2 != "") document.getElementById("shaddress").style.display = "none";
          return false;
        },
      }).open();
    },
  },
  created() {
  },
  mounted() {
    console.log("마운티드 signupStore에서 바로 불러온 값 : ", store.state.signupStore.selected);
    this.phoneNumConcat();

  },
  computed: {
    idValid() {
      return /^[A-Za-z0-9]+$/.test(this.id);
    },
    passwordValid() {
      return /^[A-Za-z0-9]+$/.test(this.signupStore.password);
    },
  },
};
</script>

<style>
@import "../../assets/css/Member/SignUpTwo.css";
</style>
