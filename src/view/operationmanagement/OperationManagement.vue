<template>
<Navbar />

  <div class="oper_container">
    <div class="oper_wrap">
      <div>
      <h2 class="oper_text">운영관리</h2>
        <router-link to="/LogCheck" style="padding:0 15px"><span class="logcheck_btn">로그확인</span></router-link>
      </div>
      <ShopCondition class="oper_right"></ShopCondition>
      </div>  
      <!--/////가게상태/////-->
      <div class="shop_condition">
      <p class="operation_text">◆가게상태</p>
      <div>
        <form>
        <input 
          type="checkbox" 
          class="oper_shop_btn1" id="oper_shopBtn1"
          v-model='checkedValues' value="정상설정"
          @change="clickFunc"
          />
          <label for="oper_shopBtn1" class="oper_shop_label1"></label>
        <input 
          type="checkbox" 
          class="oper_shop_btn2" id="oper_shopBtn2"
          v-model='checkedValues' value="영업중"
          @change="clickFunc" 
          />
          <label for="oper_shopBtn2" class="oper_shop_label2"></label>
        <input 
          type="checkbox" 
          class="oper_shop_btn3" id="oper_shopBtn3" 
          v-model='checkedValues' value="준비중"
          @change="clickFunc"
          />
          <label for="oper_shopBtn3" class="oper_shop_label3"></label>
        <input 
          type="checkbox" 
          class="oper_shop_btn4" id="oper_shopBtn4"
          v-model='checkedValues' value="노출정지"
          @change="clickFunc"
          />
          <label for="oper_shopBtn4" class="oper_shop_label4"></label>
        <input 
          type="checkbox" 
          class="oper_shop_btn5" id="oper_shopBtn5"
          v-model='checkedValues' value="딩동오더 정지"
          @change="clickFunc"
          />
          <label for="oper_shopBtn5" class="oper_shop_label5"></label>
        <i class="xi-help-o" @click="show=!show"></i>
          <div class="shop_help" v-show="show">
            <span>- 매장상태를 임의로 변경 가능합니다.</span>
            <span>- 변경하신 매장상태는 다음날이 되면 정상상태로 변경됩니다.</span>
            <span>- 노출정지: 딩동오더에 가게가 나타나지 않습니다</span>
            <span>- 딩동오더 정지: 카운터 주문만 가능합니다.</span>
            <span>- 정상상태: 설정된 데이터에 맞게 운영되는 상태</span>
          </div>
        </form>
      </div>
      </div>
      <div class="oper_all_wrap">
      <div class="oper_box1">
        <div class="oper_btn_box">
        </div>
        <!--/////영업시간///// 화면에 최대 7개 추가가능 -->
        <!-- json Array로 바꿔서 돌리기-->
        <div class="oper_title" @click=" step = 0">영업시간</div>
          <div class="oper_wrapper">
            <div class="oper_wrap1">
              <div class="oper_left" id="dayCheck">
                <span v-for="(day,index) in form.dayCheck" :key="index">
                  {{day}}
                </span>
                </div>
            </div>
          <div class="oper_wrap2">
            <div class="oper_right">
              {{ form.dayTime }} ~
              {{ form.dayTimeT }}
            </div>
            <div class="oper_right">
              {{ form.timeHoly }} ~
              {{ form.timeHolyT }}
            </div>
          </div>
        </div>
      </div>
      <!--/////준비시간/////-->
      <div class="oper_box1">
        <div class="oper_btn_box">
        <div class="oper_title" @click=" step = 1">준비시간</div><!--클릭시 자식 데이터가 나옴-->
        </div>
          <div class="preparation_text" >
            <p class="preparation_text_inner">평일 시작 및 종료</p>
            {{ form.breakTime }} ~ {{ form.breakTimeT}}
          </div>
          <div class="preparation_textTwo" >
            <p class="preparation_text_inner_two">주말 시작 및 종료</p>
            {{ form.holyTime }} ~ {{ form.holyTimeT}}
          </div>     
      </div>
      <!--/////정기휴무/////-->
      <div class="oper_box1">
        <div class="oper_title"  @click=" step = 2">정기휴무</div>
          <div class="oper_wrapper">
            <div class="oper_wrap2">

                <span class="oper_left"> {{ form.salutation }}</span>
            </div>
          <div class="oper_wrap2">
                <span class="oper_right"> {{ form.weekDay }}</span>
          </div>
        </div>
      </div>      
      <!--/////임시휴무/////-->
      <div class="oper_box1">
        <div class="oper_title" @click=" step = 3">임시휴무</div>
          <div class="holiday">{{ form.reasonDate }} {{ form.reasonTime }}~ </div>
          <div class="holidayTwo">{{ form.reasonDateT }} {{ form.reasonTimeT }}</div>
          <div class="holiday_text">{{form.reasonCheck}}</div>
      </div>      
      <!--/////매장상태/////-->
      <div class="oper_box1">
        <div class="oper_title">매장상태</div>
          <div 
            class="oper_condition" 
            v-for="(check,index) in checkedValues" 
            :key="index"
            >
            {{ check }}</div>
      </div>  
      </div>    
  </div>

<!--/////매장상태 모달창/////-->
<!-- Modal -->
<div class="modal fade" id="NoticeModal" tabindex="-1" aria-labelledby="NoticeModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="NoticeModalLabel">매장상태 변경</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        적용하시겠습니까?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-primary">확인</button>
      </div>
    </div>
  </div>
</div>
<OperationSetting :step = "step"                  
  v-model:salutation="form.salutation"
  v-model:weekDay="form.weekDay"
  v-model:breakTime="form.breakTime"
  v-model:breakTimeT="form.breakTimeT"
  v-model:holyTime="form.holyTime"
  v-model:holyTimeT="form.holyTimeT"
  v-model:reasonCheck="form.reasonCheck"
  v-model:reasonDate="form.reasonDate"
  v-model:reasonDateT="form.reasonDateT"
  v-model:operTime="form.operTime"
  v-model:operTimeT="form.operTimeT"
  v-model:dayCheck="form.dayCheck"
  v-model:operHoly="form.operHoly"
  v-model:operHolyT="form.operHolyT"
  v-model:dayTime="form.dayTime"
  v-model:dayTimeT="form.dayTimeT"
  v-model:timeHoly="form.timeHoly"
  @sandParam="sandParam"
/>
<!-- <OperationSetting :step = "step" :datepicker ="datepicker" /> -->
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import OperationSetting from '../operationmanagement/OperationSetting.vue'
import ShopCondition from '../ShopCondition.vue'
import { reactive } from 'vue'
  export default {
  components:{
    Navbar,
    OperationSetting,
    ShopCondition
  },
  data() {
    return {
      show:false,
      step: 0,
      textShow:false,
      leftShow:false,
      checkedValues:[],
      CheckCondition:''
    }
  },
  setup() {
    const form = reactive({
      //정기휴무 날짜 및 시간
      salutation: '',
      weekDay:'',
      //준비시간 날짜 및 시간
      breakTime:'',
      breakTimeT:'',
      date:'',
      dateT:'',
      //임시휴무 날짜 및 시간
      reasonCheck:'',
      reasonDate:'',
      reasonDateT:'',
      reasonTime:'',
      //영업시간 요일 날짜 시간
      operTime:'',
      operTimeT:'',
      operHoly:'',
      operHolyT:'',
      dayTime:'',
      timeHoly:'',
      //영업시간 요일체크  
      dayCheck:[],
      

    })
    function sandParam(_value){
      Object.assign(form,_value)
      console.log(form) 
    }
    
    return {
      form,
      sandParam,
    }
  },
  props: {
  },

  methods: {
    notice: function(evt) {
      alert('상태를 변경하시겠습니까?')
    },
    //매장상태 체크박스 클릭시 상태변경
    clickFunc(event) {
      for(let i=0; i<this.checkedValues.length;i++){
        if(this.checkedValues[i] !== event.target.value){
        console.log(this.checkedValues[i])
        this.checkedValues.splice(i,1); 
        confirm('상태를 변경하시겠습니까?')   
    }}
    },
    conditionEvent(){
      this.emitter.emit('shopCondition', this.CheckCondition)
      this.CheckCondition = '';
      console.log(this.CheckCondition)
    }
      },
}




</script>
<style>
@import '../../assets/css/OperationManagement/OperationManagement.css';
</style>

