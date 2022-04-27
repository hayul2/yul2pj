<template>
  <div class="print_container">
      <div class="print_header_wrap">
      <h4 class="print_text">
          상세주문내역
      </h4>
        
            <i class="xi-close" @click="$router.go(-1)"></i>  
        
        </div>
    <div>

      <!--//결제내역//-->
      <div class="orderprint_box1">
        <div class="print_title">결제내역</div>
          <div class="print_wrap">
            <div class="print_wrap1">
              <div class="print_order_left">카드번호</div>
              <div class="print_order_left">승인번호</div>
              <div class="print_order_left">카드종류</div>
              <div class="print_order_left">할부개월</div>
              <div class="print_order_left">거래일시</div>
              <div class="print_order_left">비고</div>
            </div>
          <div class="print_wrap2">
            <div class="print_order_right">{{ $store.state.paymentData[0].cardNum }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].approveNum }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].cardType }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].installMent }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].dealDate }}</div>
            <div class="print_order_right">{{ $store.state.paymentData[0].cardNote }}</div>
            <!--주문취소 버튼-->
            <div class="cancel_wrap d-grid gap-2">
                <button type="button" 
                class="cancel_btn btn-lg" 
                data-bs-toggle="modal" 
                data-bs-target="#ordercancel" 
                data-bs-whatever="@mdo">주문취소</button>
            </div>
            <!--주문취소 모달-->
            <div class="modal fade" id="ordercancel" tabindex="-1" aria-labelledby="ordercancelLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ordercancelLabel">주문취소</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-sub-title p-3"> - 주문취소 사유를 선택해 주세요.</div>
                <div class="modal-body">
                    <form>
                    <div class="d-grid gap-2">
                        <button type="button" class="cancel_modal_btn btn-lg">고객요청</button>
                    </div>
            <div class="accordion-item d-grid gap-2 mt-2">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed cancel_modal_btn btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    가게사정
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <!--가게사정 라디오 박스-->
                <div class="form-check">
                    <label class="form-check-label order_radio_btn" for="flexRadioDefault1">                  
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                        재료소진
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label order_radio_btn" for="flexRadioDefault2">                      
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                        시즌메뉴
                    </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label order_radio_btn" for="flexRadioDefault2">                      
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                        브레이크타임
                    </label>
                    </div>
                </div>
                </div>
            </div>
                    </form>
                <div class="cancel_btn_wrap mt-3">
                <button type="button" class="cancelmodal_btn btn-lg" data-bs-dismiss="modal">취소</button>
                <button type="button" class="cancelmodal_btn btn-lg" data-bs-toggle="modal">확인</button>
                </div>                    
                </div>
                </div>
            </div>
            </div>
            <!--/////주문취소 모달 끝/////-->

          </div>
        </div>
      </div>

      <div class="orderprint_box2">
        <div class="print_title">요청사항</div>
        <p class="print_request">얼음많이주세요!{{}}</p>
        <div class="print_title">주문내역</div>
        <div class="print_menulist_wrap">
          <div class="print_menulist_left">
            {{ $store.state.menuData[3].name }}
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].basic1 }}</div>
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].syrup1 }}</div>
              <div class="print_submenu_list">{{ $store.state.menuCostomData[0].cream2 }}</div>
          </div>
          <div class="print_menulist_right">
            <div class="print_price_list">{{ $store.state.priceData[0].menuprice1 }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].option }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].costom3 }}</div>
            <div class="print_price_list">{{ $store.state.priceData[0].costom2 }}</div>
          </div>
          </div>
          <hr />
          <div class="print_total_price">
          <div class="print_order_total">총 결제금액</div>
          <div class="print_total_price">{{ $store.state.priceData[0].total }}</div>
          </div>
        <!--///영수증 인쇄 옆 버튼-->
         <div class="print_btn-cover">
          <router-link to="./member/OrderPrint"><button type="text" class="print_receipt_btn" onclick="window.print()"
          >주문표 인쇄</button></router-link>
          <button :disabled="menulistpageNum === 0" @click="prevPage2" class="print_page-btn">
            <i class="xi-angle-up print_btn_icon"></i>
          </button>
          <span class="print_page-count">{{ menulistpageNum + 1 }} / {{ pageCount }} </span>
          <button :disabled="menulistpageNum >= pageCount - 1" @click="nextPage2, scrollToBottom" class="print_page-btn">
            <i class="xi-angle-down print_btn_icon"></i>
          </button>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as Printjs from "print-js"; 

export default {
    data() {
      
        return {

        }
    },
   method: {
     print() {
       Printjs({
         printable: "orderprint_box2", 
         css : '../src/assets/css/OrderPrint.css',
         type: "HTML"
      });
    },
   },
      nextPage2() {
        this.pageNum += 1;
      },
      prevPage2() {
        this.pageNum -= 1;
      },
   
    mounted () {
      window.scrollTo(10, 0)
    }

 };
</script>

<style>
@import '../../assets/css/Ordermanagement/OrderPrint.css';
</style>