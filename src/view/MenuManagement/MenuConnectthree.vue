<template>
<!--연결된 메뉴 순서변경 페이지-->
  <div class="connectmenu_container">
      <div class="connectmenu_text_wrap">
      <h4 class="connectmenu_title">({{}})프라푸치노 &nbsp;연결된 메뉴 순서 변경</h4>
      <i class="xi-close" @click="$router.go(-1)"></i>      
      </div>

        <p class="connectmenu_text">- 카테고리와 연결된 메뉴의 순서를 변경 할 수 있습니다.</p>
        <p class="connectmenu_text">- 왼쪽의 아이콘을 잡고 드래그하여 순서변경이 가능합니다.</p>
        <p class="connectmenu_text">- 오른쪽의 버튼으로 맨위, 맨아래 이동이 가능합니다.</p>
      <div class="connect_drag_wrap">
    <draggable class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center menuconnect_drag_text"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
    <div class="menucon_cross_btn_wrap">
        <button type="button" class="menucon_cross_btn">저장</button>
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
          { name: '콜드브루', id: 1 },
          { name: '진짜 진한 딥', id: 2 },
          { name: '디카페인 커피', id: 3 },
          { name: '민트초코 프라푸치노', id: 4 },
          { name: '병음료', id: 5 },
          { name: '코코넛 라떼', id: 6 },
          { name: '맛있는 딸기 라떼', id: 7 },
          { name: '디저트(케이크/빵)', id: 8 },
          { name: '디저트(케이크/빵)', id: 9 },
          { name: '디저트(케이크/빵)', id: 10 },
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
@import '../../assets/css/MenuManagement/MenuConnectthree.css';
</style>