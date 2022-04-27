<template>
<!--운영관리 가게설정 자식컴포넌트-->
  <div class="oper_set_container">
    <h2 class="operset_text">◆가게설정</h2>
    <div class="oper_set_wrap">
      <!--/////영업시간 고정/////-->
      <div class="oper_modal_container" v-if="step == 0">
        <div class="oper_modal_wrapper">
          <div class="oper_modal_one">
            <div class="oper_modal_text">영업시간</div>
            <p>- 요일별 하나의 영업시간만 등록할 수 잇습니다.</p>
            <p>- 영업시간이 등록되지 않은 요일은 24시간 영업으로 보여집니다.</p>
            <p>- 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
          </div>
          <div class="oper_sub_modal_wrap">
            <div class="oper_modal_two">
              <form>
                <div>
                <!--평일 주말 체크박스 시작-->
                <input
                  type="checkbox"
                  class="day_Five1" id="dayFive1"
                  value="평일"
                  v-model="dayCheck"
                />
                <label for="dayFive1" class="dayFive_Label1"></label>
                <input
                  type="checkbox"
                  class="day_Five2" id="dayFive2"
                  value="주말"
                  v-model="dayCheck"
                />
                <label for="dayFive2" class="dayFive_Label2"></label>
                </div>
                <!--평일 주말 체크박스 끝-->
                <!--요일 체크박스 시작-->
                <input 
                  type="checkbox" 
                  class="day_btn1" id="dayBtn1" 
                  value="월"
                  v-model="dayCheck"
                >
                <label for="dayBtn1" class="day_label1"></label>
                <input 
                  type="checkbox" 
                  class="day_btn2" id="dayBtn2" 
                  value="화"
                  v-model="dayCheck"
                >
                <label for="dayBtn2" class="day_label2"></label>
                <input 
                  type="checkbox" 
                  class="day_btn3" id="dayBtn3" 
                  value="수"
                  v-model="dayCheck"
                >
                <label for="dayBtn3" class="day_label3"></label>
                <input
                  type="checkbox" 
                  class="day_btn4" id="dayBtn4" 
                  value="목"
                  v-model="dayCheck"
                >
                <label for="dayBtn4" class="day_label4"></label>
                <input 
                  type="checkbox" 
                  class="day_btn5" id="dayBtn5" 
                  value="금"
                  v-model="dayCheck"
                >
                <label for="dayBtn5" class="day_label5"></label>
                <input 
                  type="checkbox" 
                  class="day_btn6" id="dayBtn6" 
                  value="토"
                  v-model="dayCheck"
                >
                <label for="dayBtn6" class="day_label6"></label>
                <input 
                  type="checkbox" 
                  class="day_btn7" id="dayBtn7" 
                  value="일"
                  v-model="dayCheck"
                >
                <label for="dayBtn7" class="day_label7"></label>
                <!--요일 체크박스 끝-->
                <div class="oper_switch">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked" >24시간</label>
                  </div>
                </div>
                <div class="oper_modal_oper_box">
                  <form>
                    <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                    <input
                      type="time"
                      min="08:00"
                      class="oper_time"
                      id="inputDele"
                      v-model="dayTime"
                    /> ~
                    <input
                      type="time"
                      min="00:00"
                      class="oper_time"
                      id="inputDeleTwo"
                      v-model="dayTimeT"
                    />
                    <i class="xi-minus-circle-o oper_time_icon" 
                      @click="deleteBtn()"
                    ></i>
                    <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                    <input 
                      type="time"
                      min="08:00"
                      class="oper_time"
                      id="timeHoly"
                      v-model="timeHoly"
                    /> ~
                    <input 
                      type="time"
                      min="00:00"
                      class="oper_time"
                      id="timeHolyT"
                      v-model="timeHolyT"                      
                    />
                    <i class="xi-minus-circle-o oper_time_icon"
                        @click="deleteBtnTwo()"
                        ></i>
                  </form>
                </div>
              </form>
              <div class="time_btn_wrap">
                <button 
                  class="time_btn" 
                  @click="isDayBtn(event)"
                  >저장</button>
                <button class="time_btntwo">닫기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////준비시간 평소에는 hidden/////-->
      <div id="break_container" v-if="step == 1">
        <div class="break_wrapper">
          <div class="break_wrap">
            <div class="break_text">준비시간</div>
            <div class="break_one">
              <div class="break_switch">
                <div class="form-check form-switch">
                  <div class="wrapper">
                    준비시간
                    <input type="checkbox" id="switch" checked />
                    <label for="switch" class="switch_label">
                      <span class="onf_btn"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="break_box">
                <form>
                  <label for="input_day" class="input_day">평일 시작 및 종료시간</label>
                  <input
                    type="time"
                    class="time_input"
                    id="time_input"
                    @change="$emit('sandParam', { breakTime: $event.target.value })"
                  />
                  <input
                    type="time"
                    class="time_inputTwo"
                    id="time_inputTwo"
                    @change="$emit('sandParam', { breakTimeT: $event.target.value })"
                  />
                  <i class="xi-minus-circle-o break_time_icon" 
                      @click="breakBtn()"
                  ></i>

                  <label for="input_day" class="input_day">주말 시작 및 종료시간</label>
                  <div style="display: block">
                    <input
                      type="time"
                      class="date_input"
                      id="date_input"
                      @change="$emit('sandParam', { holyTime: $event.target.value })"
                    />
                    <input
                      type="time"
                      class="date_inputTwo"
                      id="date_inputTwo"
                      @change="$emit('sandParam', { holyTimeT: $event.target.value })"
                    />
                  <i class="xi-minus-circle-o break_time_icon" 
                      @click="breakBtnTwo()"
                  ></i>                    
                  </div>
                </form>
              </div>
              <div class="break_time_btn_wrap">
                <button type="button" class="break_add_btn" @click="onEmit">저장</button>
                <button type="button" class="break_close_btn">닫기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////정기휴무 평소에는 hidden/////-->
      <div class="regular_container" v-if="step == 2">
        <div class="regular_wrapper">
          <div class="regular_one">
            <div class="regular_text">정기휴무</div>
            <p>- 공휴일 휴무를 설정하시면 법정 공휴일이 휴무일로 설정됩니다.</p>
            <p>- 정기휴무는 영업시간이 등록되어 있더라도 휴무로 보여집니다.</p>
          </div>
          <div class="regular_wrap">
            <div class="regular_two">
              <form>
                <div class="regular_switch">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    <label class="form-check-label regular_label" for="flexSwitchCheckChecked">공휴일 휴무</label>
                  </div>
                </div>
                <!--//////휴무1//////-->
                <div class="regular_wrap">
                  <div class="regular_box">
                    <select
                      class="Rday"
                      name="salutation"
                      id="selectDay"
                      @change="$emit('sandParam', { salutation: $event.target.value })"
                    >
                      <option v-for="item of salutations" :value="item" :key="item" :selected="salutation == item">
                        {{ item }}
                      </option>
                    </select>
                    <select 
                      class="Rday" 
                      name="weekDay" 
                      id="selectDayTwo"
                      @change="$emit('sandParam', { weekDay: $event.target.value })">
                      <option v-for="day of weekDays" :value="day" :key="day" :selected="weekDay == day">
                        {{ day }}
                      </option>
                    </select>
                  <i class="xi-minus-circle-o regular_circle" @click="selectDelete(event)"></i>                    
                  </div>
                </div>
              </form>
              <div class="regular_btn_wrap">
                <button class="regular_add_btn" @click="onEmit">저장</button>
                <button class="regular_close_btn">저장안함</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/////임시휴무 평소에는 hidden/////-->
      <div class="temporary_container" v-if="step == 3">
        <div class="temporary_wrapper">
          <div class="temporary_one">
            <div class="temporary_text">임시휴무</div>
            <p>- 하루종일 설정하시면 날짜별 설정이 가능합니다.</p>
            <p>- 정해놓은 시간(날짜)가 지나면 자동으로 휴무가 풀립니다.</p>
            <div class="temporary_reason">
              <p class="temporary_reason_text">사유</p>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="개인사정으로 인해 쉬어갑니다!"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                  개인사정으로 인해 쉬어갑니다!
                </label>
              </div>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="매장 내 주문만 가능합니다! 카운터에서 주문해주세요!"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1">
                  매장 내 주문만 가능합니다! 카운터에서 주문해주세요!
                </label>
              </div>
              <div class="temporary_form_box">
                <input
                  class="form-check-input"
                  type="radio"
                  value="직접입력"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="picked"
                  @change="$emit('sandParam', { reasonCheck : $event.target.value })"
                />
                <label class="form-check-label temporary_form_lebel" for="flexRadioDefault1"> 직접입력 </label>
              </div>
              <input
                type="text"
                class="temporary_form_text"
                placeholder="입력한대로 어플에 노출됩니다."
                v-model="picked"
                @change="$emit('sandParam', { reasonCheck : $event.target.value })"
              />
            </div>
          </div>
          <div class="temporary_wrap">
            <div class="temporary_two">
              <form>
                <div class="temporary_switch">
                  <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckChecked">
                      하루종일
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                    </label>
                  </div>
                </div>
                <div class="temporary_day_box">
                  <p>날짜 선택하기</p>
                  <input
                    type="date"
                    class="temporary_date"
                    min="2022-01-01"
                    max="2042-01-01"  
                    id="temporary_input"     
                    @change="$emit('sandParam', { reasonDate : $event.target.value })"
                  />                  
                  ~ 
                  <input
                    type="date"
                    class="temporary_date"
                    min="2022-01-01"
                    max="2042-01-01"
                    id="temporary_inputTwo"
                    @change="$emit('sandParam', { reasonDateT : $event.target.value })"
                  />
                  <i class="xi-minus-circle-o regular_circle" @click="temporaryDele(event)"></i>
                  <p class="temporary_time_text">시작 및 종료시간</p>
                  <input
                    type="time" 
                    class="temporary_time"
                    min="08:00"
                    max="24:00"
                    id="temporary_date"                    
                    @change="$emit('sandParam', { reasonTime : $event.target.value })"
                    />
                    ~
                  <input
                    type="time" 
                    class="temporary_time"
                    min="08:00"
                    max="24:00"
                    id="temporary_dateTwo"
                    @change="$emit('sandParam', { reasonTimeT : $event.target.value })"
                    />
                    <i class="xi-minus-circle-o regular_circle" @click="temporaryDeleTwo(event)"></i>
                </div>                                                                      -->
              </form>
              <div class="temporary_btn_wrap">
                <button class="temporary_add_btn">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
const salutations = ["매월 첫째주", "매월 둘째주", "매월 셋째주", "매월 넷째주", "매월 다섯째주"];
const weekDays = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

export default {
  data() {
    return {
      picked: "",
      rdaySelect: null,
      rWeekSelect: null,
      selected: [],
      type: "select",
      time: "",
      date: "",
      pvalue: this.value,
      isShow: false,
      regularBtn: false,
      inputDele:'',
      inputDeleTwo:'',
    };
  },
  props: {
    step: Number,
    name: String,
    datepicker: {
      type:String,
      default:'',
    },
    salutation: {
      type: String,
      default: "",
    },
    weekDay: {
      type: String,
      default: "",
    },
    breakTime: {
      type: String,
      default: "",
    },
    breakTimeT: {
      type: String,
      default: "",
    },
    holyTime: {
      type: String,
      default: "",
    },
    holyTimeT: {
      type: String,
      default: "",
    },
    reasonCheck: {
      type: String,
      default: "",
    },
    reasonDate: {
      type: String,
      default: "",
    },
    reasonDateT: {
      type: String,
      default: "",
    },
    reasonTime: {
      type: String,
      default: "",
    },
    reasonTimeT: {
      type: String,
      default: "",
    },
    operTime: {
      type: String,
      default: "",
    },
    operTimeT: {
      type: String,
      default: "",
    },
    //영업시간 개별 요일 및 평일,주말  
      dayCheck: {
      type:Array,
    },
    //영업시간 평일
      dayTime: {
      type:String,
      default:'',
    },
      dayTimeT: {
      type:String,
      default:'',
    },
    //영업시간 주말 
    timeHoly: {
      type: String,
      default:'',      
    },
    timeHolyT: {
      type: String,
      default:'', 
    },


  },
  methods: {
    isDate() {
      let today = new Date().toISOString().substr(0,10);
      document.querySelector(".temporary_date").value = today
      console.log(this.date)
    },
    //영업시간 개별 요일 배열 emit
    isDayBtn:function() {
      this.$emit('sandParam',{ dayCheck:this.dayCheck})
      this.$emit('sandParam',{ dayTime:this.dayTime})
      this.$emit('sandParam',{ dayTimeT:this.dayTimeT})
      this.$emit('sandParam',{ timeHoly:this.timeHoly})
      this.$emit('sandParam',{ timeHolyT:this.timeHolyT})
    },    
    deleteBtn:function () {
      var input = document.getElementById("inputDele");
      var inputTwo = document.getElementById("inputDeleTwo");
          input.value = null;
          inputTwo.value = null;
          console.log(this.inputDele)
      },
    deleteBtnTwo:function () {
      var inputThree = document.getElementById("timeHoly");
      var inputFour = document.getElementById("timeHolyT");
          inputThree.value = null;
          inputFour.value = null;
          console.log(this.inputDele)
      },
    breakBtn:function () {
      var time = document.getElementById("time_input");
      var timeTwo = document.getElementById("time_inputTwo");
      var timeThree = document.getElementById("date_input");
      var timeFour = document.getElementById("date_inputTwo");
          time.value = null;
          timeTwo.value = null;
          timeThree.value = null;
          timeFour.value = null;
          console.log(this.inputDele)
      },
    breakBtnTwo:function () {
      var timeThree = document.getElementById("date_input");
      var timeFour = document.getElementById("date_inputTwo");
          timeThree.value = null;
          timeFour.value = null;
          console.log(this.inputDele)
      },
    selectDelete:function () {
      var select = document.getElementById("selectDay");
      var selectTwo = document.getElementById("selectDayTwo");
          select.value = null;
          selectTwo.value = null;
          console.log(this.inputDele)
      },
    temporaryDele:function () {
      var temporaryInput = document.getElementById("temporary_input");
      var temporaryInputTwo = document.getElementById("temporary_inputTwo");
          temporaryInput.value = null;
          temporaryInputTwo.value = null;
          console.log(this.inputDele)
      },
    temporaryDeleTwo:function () {
      var temporaryDate = document.getElementById("temporary_date");
      var temporaryDateTwo = document.getElementById("temporary_dateTwo");
          temporaryDate.value = null;
          temporaryDateTwo.value = null;
          console.log(this.inputDele)
      },
    
    changeStat(step) {},
    titleUpdate(e) {
      console.log(e.target.value);
    },
    weekRegular(event) {
      console.log(event.target.value);
    },
    temporary(event) {
      console.log(event.target.value);
    },
    regular(event) {
      console.log(event.target.value);
    },
  },
  setup() {
    return {
      salutations,
      weekDays,
    };
  },
};
</script>

<style>
@import "../../assets/css/OperationManagement/OperationSetting.css";
</style>
