<template>
  <div class="container_fluid">
    <!-- wrapper -->
    <div id="wrapper">
      <p class="border_text3">STEP3. 관리자정보 입력</p>
      <!-- content-->
      <div id="content">
        <form
            id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post"
        >
          <p class="inner_box_text">
            (브랜드)와 소통할 관리자 정보를 적어주세요.<br/>
            해당 정보로 정보 전달 및 소통이 이루어지니 정확하게 입력해주세요!
          </p>
          <!--name-->
          <div>
            <h3 class="join_title"><label>관리자 이름</label></h3>
            <span class="box int_name">
              <input
                  type="text"
                  id="name3"
                  v-model="manageName"
                  class="int"
                  maxlength="20"
                  placeholder="관리자 이름"
                  @change="errorCh"
                  @focus="checkFlag = false"
              />
              <span class="error_next_box1" id="manMsg" style aria-live="assertive">필수 정보 입니다.</span>
            </span>
          </div>
          <!--number-->
          <div>
            <h3 class="join_title"><label>관리자 번호</label></h3>
            <div id="num_wrap">
              <!-- BIRTH_MM -->
              <div id="num_first">
                <span class="box">
                  <select id="number" @change="phoneNumConcat()" class="sel" v-model.trim="firstNum">
                    <option>선택</option>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="019">019</option>
                  </select>
                  <span class="error_next_box1" id="manPhMsg" style aria-live="assertive">필수 정보 입니다.</span>
                </span>
              </div>
              <!-- BIRTH_YY -->
              <div id="num_second">
                <span class="box">
                  <input type="text" id="second" class="int" maxlength="4" v-model.trim="secondNum"
                         @change="nullCheck"
                         @focus="checkFlag = false"
                         oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                  />
                </span>
              </div>
              <!-- BIRTH_DD -->
              <div id="num_dd">
                <span class="box">
                  <input type="text" @change="phoneNumConcat()" id="dd" class="int" maxlength="4"
                         v-model.trim="thirdNum"
                        @focus="checkFlag = false"
                         oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                  />
                </span>
              </div>
              <span class="error_next_box"></span>
            </div>
            <!-- email_address -->
            <div id="email">
              <h3 class="join_title">
                <label for="email">관리자 메일주소</label>
              </h3>
              <div id="email_wrap">
                <!-- sub_mail -->
                <div id="sub_email">
                  <span class="box">
                    <input
                        type="text"
                        id="sub_email"
                        class="int"
                        maxlength="20"
                        placeholder="이메일을 입력해주세요"
                        v-model="mgEmail1"
                        @change="emailConcat()"
                        @focus="checkFlag = false"
                    />
                    <span class="error_next_box1" id="manEmMsg" style aria-live="assertive">필수 정보 입니다.</span>
                  </span>
                </div>
                <span class="middle_mail">@</span>
                <span class="box">
                  <select id="email" class="sel" v-model="mgEmail2" @change="emailConcat()">
                    <option>선택</option>
                    <option value="naver.com">naver.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="nate.com">nate.com</option>
                  </select>
                </span>
              </div>
            </div>
            <h3 class="join_title"><label>사업자 번호</label></h3>
            <div id="shopnum_wrap">
              <!-- shop_num one -->
              <div id="shop_one">
                <span class="box">
                  <input
                      type="text"
                      id="shop_one"

                      class="int"
                      maxlength="3"
                      title="사업자처음3자리"
                      v-model="bizNum1"
                      @focus="checkFlag = false"
                      @change="bizNumConcat()"
                      oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                  />
                   <span class="error_next_box1" id="manStNum" style aria-live="assertive">필수 정보 입니다.</span>
                </span>
              </div>
              <!-- shop_num two-->
              <div id="shop_two">
                <span class="box">
                  <input
                      type="text"
                      id="shop_two"
                      class="int"
                      maxlength="2"
                      title="사업자중간2자리"
                      v-model="bizNum2"
                      oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                  />
                </span>
              </div>
              <!-- shop_num three-->
              <div id="shop_three">
                <span class="box">
                  <input
                      type="text"
                      @change="bizNumConcat()"
                      id="shop_three"
                      class="int"
                      maxlength="5"
                      title="사업자마지막5자리"
                      v-model="bizNum3"
                      @focus="checkFlag = false"
                      oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
                  />
                </span>
              </div>
            </div>
            <!-- business number -->
            <div>
              <h3 class="join_title">
                <label for="input_file">사업자 등록증</label>
              </h3>
              <span class="box int_name">
                <label class="input-file-button" for="input-file"
                >파일첨부
                </label>
                <input
                    ref="image"
                    id="inputs"
                    type="file"
                    name="image"
                    accept=".png"
                    class="hidden"
                    @focus="fileCheck=false"
                />

                <!-- <span>사업자 등록증 : {{}}</span> -->
              </span>
              <span class="error_next_box"></span>
              <button type="button" id="btnJoin" @click="fire">
                <span>사진보내기</span>
              </button>
              <span class="error_next_box" id="ptcheck" style aria-live="assertive">사업자등록증을 첨부하세요.</span>
            </div>

            <div class="btn_area">
              <router-link to="@/member/signupfour">
                <button type="button" id="btnJoin" @click="signup">
                  <span>가입하기</span>
                </button>
              </router-link>
            </div>
          </div>
          <!-- content-->
        </form>
      </div>
    </div>
  </div>

</template>
<script>
import router from '../../router'
import axios from 'axios'
import store from '../../store/index.js'

const sweet = require('sweetalert2')

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default {
  data () {
    return {

      //관리자 이름
      manageName: '',
      //관리자 번호 첫번째
      firstNum: null,
      //관리자 번호 두번째
      secondNum: '',
      //관리자 번호 세번째
      thirdNum: '',
      //관리자번호 총합
      mgPhNum: '',
      //관리자메일앞자리
      mgEmail1: '',
      //관리자메일 뒷자리
      mgEmail2: null,
      //메일 합 주소
      mgEmail: '',
      //사업자번호
      bizNum1: '',
      bizNum2: '',
      bizNum3: '',
      //사업자번호 총합
      bizNum: '',
      images: '',

    }
  },

  methods: {
    isEmpty (data) {
      if (data == '' || data == null || data == undefined) {
        return true
      } else {
        return false
      }
    },
    nullCheck () {
      if (!this.isEmpty(this.manageName) &&
          !this.isEmpty(this.secondNum) &&
          !this.isEmpty(this.thirdNum) &&
          !this.isEmpty(this.mgEmail1)
      ) {
        return this.$store.state.signupStore.isNull = true

      } else {
        return this.$store.state.signupStore.isNull = false
      }
    },

    //이미지 업로드
    uploadImage: function () {
      let biz = this.bizNum
      let form = new FormData()
      let image = this.$refs['image'].files[0]

      form.append('image', image)
      axios
          .post('/api/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data',
              biznum: biz,
            },
          })
          .then(({ data }) => {
            this.images = data
            console.log(data)
          })
          .catch((err) => console.log(err))
    },
    errorCh () {
      let manId = document.getElementById('name3').value
      if (manId == '') {
        document.getElementById('manMsg').style.display = 'block'
        return false
      } else if (manId != '') {
        document.getElementById('manMsg').style.display = 'none'
        return false
      }
    },

    
    signup () {
      this.checkFlag = true;
      this.nullCheck()
      let nullCk = this.$store.state.signupStore.isNull
      console.log('널체크', nullCk)
      console.log('매니저네임', this.manageName)
      console.log('세컨넘', this.secondNum)
      console.log('서드넘', this.thirdNum)
      console.log('이메일1', this.mgEmail1)
      console.log('비즈넘1', this.bizNum1)
      console.log('비즈넘2', this.bizNum2)
      console.log('비즈넘3', this.bizNum3)

      if (!nullCk) {
        this.$swal('필수 정보들을 입력하세요.')
        return false
      } else {
        axios({
          method: 'post',
          url: '/api/signup',
          data: {
            userId: store.state.signupStore.userId,
            userPw: store.state.signupStore.userPw,
            userName: store.state.signupStore.userName,
            biznum: this.bizNum,
            phNum: store.state.signupStore.phNum,
            bizAddr1: store.state.signupStore.bizAddr1,
            bizAddr2: store.state.signupStore.bizAddr2,
            bizZip: store.state.signupStore.bizZip,
            managename: this.manageName,
            mgphnum: this.mgPhNum,
            mgMail: this.mgEmail,
            selected: store.state.signupStore.selected.length,
            shopName: store.state.signupStore.shopName,
            shopPhNum: store.state.signupStore.shopPhNum,
            etc: store.state.signupStore.etc
          },
        }).then(res => {
          console.log('res.result : ', res.data.result)
          if (res.data.result == 1) {
            this.$swal.fire({
              icon: 'success',
              title: '회원가입 신청이 완료되었습니다.',
              text: '가입심사 완료 후 로그인 됩니다.',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }).catch((err) => {
          console.log(err)
          this.$swal.fire({
            icon: 'warning',
            title: '회원 가입 신청 오류!',
            text: '입력하신 회원정보를 확인하세요.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '확인',
          })
        })
      }

    },

    //sweetalert2 메소드드
    fire () {
      var fileCheck = document.getElementById('inputs').value
      let fileVal = this.$refs['image'].value
      fileVal = fileVal.slice(fileVal.indexOf('.') + 1).toLowerCase()
      console.log(fileVal)
      console.log(fileCheck)
      if (fileCheck == '' || fileCheck == null) {
        document.getElementById('ptcheck').style.display = 'block'
      } else if (fileCheck != '') {
        document.getElementById('ptcheck').style.display = 'none'
      }
      if (fileVal != 'png' || fileVal == null) {
        alert('확장자 png 파일만 첨부 가능합니다.')
        return false
      }
      this.bizNumConcat()
      this.$swal.fire({
        title: this.bizNum1 + '-' + this.bizNum2 + '-' + this.bizNum3,
        text: '사업자번호를 확인해 주세요. 사업자 번호가 틀릴경우, 가입 심사가 지연됩니다.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 맞습니다.',
        cancelButtonText: '아니오. 틀립니다.'
      }).then((result) => {
        if (result.isConfirmed) {
          this.uploadImage()
          this.$swal.fire(
              '성공!',
              '사업자등록증 전송이 완료되었습니다.',
              'success'
          )
        } else if (result.dismiss) {
          this.$swal.fire(
              '사업자 번호를 다시 확인해 주세요.'
          )
        }
      })
    },
    phoneNumConcat () {
      let phoneNum = ''
      this.mgPhNum = phoneNum.concat(this.firstNum, this.secondNum, this.thirdNum)
      console.log(this.mgPhNum)
      if(this.firstNum == null && this.secondNum == "" && this.thirdNum == "") {
        document.getElementById("manPhMsg").style.display = "block";
      }else if (this.firstNum != null && this.secondNum != "" && this.thirdNum != "") {
        document.getElementById("manPhMsg").style.display = "none";
      }
    },
    bizNumConcat () {
      let sumBizNum = ''
      this.bizNum = sumBizNum.concat(this.bizNum1, this.bizNum2, this.bizNum3)
      console.log(this.bizNum)
       if (this.bizNum1 == "" && this.bizNum2 == "" && this.bizNum3 == null) {
        document.getElementById('manStNum').style.display = 'block'
      } else if (this.bizNum1 != "" && this.bizNum2 != "" && this.bizNum3 != null) {
        document.getElementById('manStNum').style.display = 'none'
      }
    },
    emailConcat () {
      let email = ''
      if(this.mgEmail1 == "" && this.mgEmail2 == null){
        document.getElementById("manEmMsg").style.display = "block";
      }else if(this.mgEmail1 != "" && this.mgEmail2 != null ){
        document.getElementById("manEmMsg").style.display = "none";
      }
      this.mgEmail = email.concat(this.mgEmail1 + '@' + this.mgEmail2)
      console.log(this.mgEmail)
    },
    test () {
      console.log('====SignUpThree 테스트버튼====')
      console.log('SignUpTwo에서 넘어온 파라미터: ', store.state.signupStore.phNum)
      console.log('SignUpTwo에서 넘어온 파라미터 userName: ', store.state.signupStore.userName)
    }
  },
  mounted () {
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.selected)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.userName)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.userId)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.userPw)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.phNum)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.shopName)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.shopPhNum)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.bizAddr1)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.bizAddr2)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.bizZip)
    console.log('사인업3에서 마운티드 : ', store.state.signupStore.etc)
  }

}
</script>

<style>
@import '../../assets/css/Member/SignUpThree.css';
</style>
