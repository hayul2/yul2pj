import { createStore } from 'vuex'
import orderData from '../assets/orderData.js'
import menuData from '../assets/menuData.js'
import shopData from '../assets/shopData.js'
import paymentData from '../assets/paymentData.js'
import priceData from '../assets/priceData.js'
import menuCostomData from '../assets/menuCostomData.js'
import StaffData from '../assets/StaffData.js'
import OperationData from '../assets/OperationData.js'
import LogCheckData from '../assets/LogCheckData.js'
import SalesData from '../assets/SalesData.js'
import CategoryData from '../assets/CategoryData.js'
import menueditData from '../assets/menueditData.js'
import CategoryOptionData from '../assets/CategoryOptionData.js'
import OptionData from '../assets/OptionData.js'
import TopingData from '../assets/TopingData.js'
import DiscountCodeData from '../assets/DiscountCodeData.js'
import timeData from '../assets/timeData.js'

//스토어 모듈 임포트
import { signupStore } from './modules/signupStore'
import { loginStore } from './modules/loginStore'



let soldNum=0;
let hidNum=0;
for(let i=0; i<menuData.length; i++){
  if(menuData[i].isHidden == true){
    hidNum++;
  } else if(menuData[i].isSoldOut == true){
    soldNum++;
  }
}

let compleNum = 0;
let cancelNum = 0;
for(let i=0; i<orderData.length; i++){
  if(orderData[i].isCompleted==true){
    compleNum++;
  }else if(orderData[i].isCanceled){
    cancelNum++;
  }
}

export default createStore({

  modules:{
    signupStore: signupStore,
    loginStore: loginStore,
  },
  state: {
    //=======================Main.vue 화면 내부 데이터 ========================
    //-------------메뉴관리 데이터------
    menuData,
    //품절메뉴 개수
    soldOutNum : soldNum,
    //숨김메뉴 개수
    hiddenNum : hidNum,
    //품절,숨김 메뉴 모달창 상태변경
    MenuCheckModal : false,
    //-------------주문관리 데이터------
    orderData,
    //완료주문 개수
    completedNum : compleNum,
    //신규주문 개수
    newOrderNum : 2,
    //취소주문 개수
    cancelOrder : cancelNum,
    //-------------운영관리 데이터------
    shopData,
    //영업중인 가게 수
    openShopNum : 3,
    //----------결제내역 데이터----------
    paymentData,
    //----------가격 데이터-------------
    priceData,
    //----------커스텀 옵션 데이터-------------
    menuCostomData,
    //----------스태프 관리 데이터-------------
    StaffData,
    //직원관리 메뉴 모달창 상태변경
    StaffModal : false,
    //운영관리 데이터
    OperationData,
    //운영관리->로그확인 데이터
    LogCheckData,
    //매출관리-> 매출관리 데이터
    SalesData,
    //메뉴카테고리편집 데이터
    CategoryData,
    //메뉴옵션편집 데이터
    menueditData,
    //메뉴옵션편집-카테고리설정 데이터
    CategoryOptionData,
    //메뉴옵션편집-옵션 데이터
    OptionData,
    //메뉴옵션편집-토핑추가 데이터
    TopingData,
    //할인코드-진행중코드 데이터
    DiscountCodeData,
    //영업시간 데이터
    // timeData,
    //스테이트 변환, $store.commit('mutation 함수명') 으로 이벤트 핸들링
    mutations: {

    },
  }
})
