<template>
<!---->
<div class="connect_container">

    <div class="connect_wrap">
  <div class="connect_left">
      <button type="button" class="connect_title" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          카테고리 설정
    <i class="xi-info-o"></i> 
      </button>

    
<div class="collapse" id="collapseExample">
  <div class="card card-body">
      <p class="connect_text">- 메뉴와 연결되는 카테고리를 설정할 수 있습니다.</p>
      <p class="connect_text">- 전체 카테고리는 순서를 변경 할 수 없습니다.</p>
      <p class="connect_text">- 왼쪽의 아이콘을 잡고 드래그하여 순서변경이 가능합니다.</p>
      <p class="connect_text">- 오른쪽의 버튼으로 맨위, 맨아래 이동이 가능합니다.</p>
  </div>
</div>
    <draggable 
      class="dragArea list-group w-full" 
      :list="list" 
      @change="log" 
      animation="200" group="description" 
      :disabled="false" 
      v-model="dataList"
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center connect_drag_text"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
    <div class="connect_add_btn_wrap">
    <button type="button" class="connect_add_btn">저장</button>
    </div>
  </div>
  <div class="connect_right">
      <h4 class="connect_title">카테고리 연결</h4>
      <hr />
        <ul>
            <li><button type="button" class="cate_cross_btn">오늘의 커피<p>바닐라 라떼,코코넛 라떼</p></button></li>
            <li><button type="button" class="cate_cross_btn">딩동 시그니처<p>진짜 진한 바닐라 리얼딥, 진짜 모히또, 진짜 딩동커피</p></button></li>
            <li><button type="button" class="cate_cross_btn">콜드브루<p>바닐라 라떼, 코코넛 라떼</p></button></li>
            <li><button type="button" class="cate_cross_btn">오늘의 커피<p>바닐라 라떼,코코넛 라떼</p></button></li>
            <li><button type="button" class="cate_cross_btn">에이드<p>레몬 에이드,리얼 딸기 에이드</p></button></li>
        </ul>
    <div class="connect_add_btn_wrap">
    <button type="button" class="connect_add_btn">(2개선택) 연결</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  export default {
    components: {
      draggable: VueDraggableNext,
      
    },
    data() {
      return {
        enabled: true,
        list: [
          { name: '스무디&에이드', id: 1 },
          { name: '콜드브루', id: 2 },
          { name: '디카페인 커피', id: 3 },
          { name: '프라푸치노', id: 4 },
          { name: '병음료', id: 5 },
          { name: '디저트(케이크/빵)', id: 6 },
        ],
        dragging: false,
      }
    },
    methods: {
        log(event) {
        console.log(event)
      },
        handleChange() {
        console.log('changed');
    },
        inputChanged(value) {
        this.activeNames = value;
    },
        getComponentData() {
            return {
                on: {
                change: this.handleChange,
                input: this.inputChanged
                },
                attrs:{
                wrap: true
                },
                props: {
                value: this.activeNames
                }
            };
    }
    },
  }
</script>

<style>
@import '../../assets/css/MenuManagement/MenuConnect.css';
</style>