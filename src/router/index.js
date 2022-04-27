import { createRouter, createWebHistory } from "vue-router";
// import Total from '../view/**'
import Main from "../view/Main.vue";
/*------ordermanage------ */
import OrderManagement from "../view/ordermanage/OrderManagement.vue";
import NewOrderListOne from "../view/ordermanage/NewOrderListOne.vue";
import NewOrderListTwo from "../view/ordermanage/NewOrderListTwo.vue";
import PreparingListOne from "../view/ordermanage/PreparingListOne.vue";
import PreparingListTwo from "../view/ordermanage/PreparingListTwo.vue";
import CompletedOrder from "../view/ordermanage/CompletedOrder.vue";
import OrderList from "../view/ordermanage/OrderList.vue";
import OrderPrint from "../view/ordermanage/OrderPrint.vue";
/*------staffmanagement------ */
import StaffManagementOne from "../view/staffmanagement/StaffManagementOne.vue";
import StaffManagementTwo from "../view/staffmanagement/StaffManagementTwo.vue";
/*------operationmanagement------ */
import OperationManagement from "../view/operationmanagement/OperationManagement.vue";
import OperationSetting from "../view/operationmanagement/OperationSetting.vue";
import LogCheck from "../view/operationmanagement/LogCheck.vue";
/*———DiscountCode——— */
import DiscountCode from "../view/DiscountCode/DiscountCode.vue";
import DiscountCodeOne from "../view/DiscountCode/DiscountCodeOne.vue";
import DiscountCodeTwo from "../view/DiscountCode/DiscountCodeTwo.vue";
/*SalesManagement */
import SalesSort from "../view/SalesManagement/SalesSort.vue";
import SalesManagement from "../view/SalesManagement/SalesManagement.vue";
import SalesManagementOne from "../view/SalesManagement/SalesManagementOne.vue";
import SalesManagementTwo from "../view/SalesManagement/SalesManagementTwo.vue";
/*------member------ */

import Login from "../view/member/Login.vue";
import SignUpOne from "../view/member/SignUpOne.vue";
import SignUpTwo from "../view/member/SignUpTwo";
import SignUpThree from "../view/member/SignUpThree.vue";
import SignUpFour from "../view/member/SignUpFour.vue";
import SignUpCancel from "../view/member/SignUpCancel";

import ReleaseSoldOut from "../view/ReleaseSoldOut.vue";
/*------MenuManagement------ */

import MenuManagement from "../view/MenuManagement/MenuManagement.vue";
import MenuManageCategories from "../view/MenuManagement/MenuManageCategories.vue";
import MenuManageMenus from "../view/MenuManagement/MenuManageMenus.vue";
import MenuAdd from "../view/MenuManagement/MenuAdd.vue";
import MenuAddModify from "../view/MenuManagement/MenuAddmodify.vue";
import MenuManageOptions from "../view/MenuManagement/MenuManageOptions.vue";
import MenuConnect from "../view/MenuManagement/MenuConnect.vue";
import MenuConnecttwo from "../view/MenuManagement/MenuConnecttwo.vue";
import MenuConnectthree from "../view/MenuManagement/MenuConnectthree.vue";
import MenuToping from "../view/MenuManagement/MenuToping.vue";

/*------etc------ */
import test1 from "../view/test1";
import Calendar from "../view/Calendar.vue";
import PageNotFound from "../view/page404";
import page404 from "../view/page404";
import store from "../store";
import chat from "../view/1";
import dbshow from "../view/dbshow";
import xlsx from "../view/xlsx.vue";
import ShopCondition from "../view/ShopCondition.vue";
// import 'sweetalert2/dist/sweetalert2.min.css';
// import VueSweetalert2 from 'vue-sweetalert2';

// db
import modifyuser from "../view/modifyUser";

const sweet = require("sweetalert2");

const routes = [
  {
    path: "/",
    component: Main,
    name: "main",
    meta: { requireLogin: true },

  },
  {
    path: "/login",
    component: Login,
    name: Login,
  },
  {
    path: "/signUpOne",
    component: SignUpOne,
    props: true,
  },
  {
    path: "/signuptwo",
    component: SignUpTwo,
    name: "signup2",
    props: true,
  },
  {
    path: "/signupthree",
    component: SignUpThree,
    name: "signup3",
    props: true,
    beforeEnter: () => {
      const nullCheck = store.state.signupStore.isNull;
      if (!nullCheck) {
        return "/signuptwo";
      }
    },
  },
  {
    path: "/signupfour",
    component: SignUpFour,
    name: "signup4",
    props: true,
    beforeEnter: () => {
      const nullCheck = store.state.signupStore.isNull;
      if (!nullCheck) {
        return "/signupthree";
      }
    },
  },
  {
    path: "/signupcancel",
    component: SignUpCancel,
    name: "SignUpCancel",

    props: true,
  },
  {
    path: "/main",
    name: Main,
    component: Main,
    meta: { requireLogin: true },
  },
  {
    path: "/menumanagement",
    component: MenuManagement,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: "/menumanagement/categories",
        component: MenuManageCategories,
      },
      {
        path: "/menumanagement/menus",
        component: MenuManageMenus,
      },
      {
        path: "/menumanagement/MenuAdd",
        component: MenuAdd,
      },
      {
        path: "/menumanagement/MenuAddModify",
        component: MenuAddModify,
      },
      {
        path: "/menumanagement/options",
        component: MenuManageOptions,
      },
      {
        path: "/menumanagement/MenuConnect",
        component: MenuConnect,
      },
      {
        path: "/menumanagement/MenuConnecttwo",
        component: MenuConnecttwo,
      },
      {
        path: "/menumanagement/MenuConnectthree",
        component: MenuConnectthree,
      },
      {
        path: "/menumanagement/MenuToping",
        component: MenuToping,
      },
    ],
  },
  {
    path: "/salesmanagement",
    component: SalesManagement,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
    children: [
      {
        path: "/salesmanagement/salesmanagementone",
        component: SalesManagementOne,
        meta: { requireLogin: true },
      },
      {
        path: "/salesmanagement/salesmanagementtwo",
        component: SalesManagementTwo,
        meta: { requireLogin: true },
      },
      {
        path: "/salesmanagement/SalesSort",
        component: SalesSort,
        meta: { requireLogin: true },
      },
    ],
  },
  {
    path: "/ordermanagement",
    component: OrderManagement,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
    //중첩되는 자식 라우트 경로
    children: [
      {
        path: "/ordermanagement/neworderlistone",
        component: NewOrderListOne,
      },
      {
        path: "/ordermanagement/neworderlisttwo",
        component: NewOrderListTwo,
      },
      {
        path: "/ordermanagement/preparinglistone",
        component: PreparingListOne,
      },
      {
        path: "/ordermanagement/preparinglisttwo",
        component: PreparingListTwo,
      },
      {
        path: "/ordermanagement/completedorder",
        component: CompletedOrder,
      },
      {
        path: "/ordermanagement/orderlist",
        component: OrderList,
      },
    ],
  },
  //-------주문표 인쇄--orderprint---------
  {
    path: "/orderprint",
    component: OrderPrint,
    meta: { requireLogin: true },
  },
  //----------직원관리------------
  {
    path: "/staffmanagementone",
    component: StaffManagementOne,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
  },
  {
    path: "/staffmanagementtwo",
    component: StaffManagementTwo,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
  },
  //---------운영관리-------------
  {
    path: "/operationmanagement",
    component: OperationManagement,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
    //중첩되는 자식 라우트 경로
    children: [
      //-----------가게설정-------------
      {
        path: "/operationmanagement/OperationSetting",
        component: OperationSetting,
      },
    ],
  },
  //-----------로그확인------------
  {
    path: "/LogCheck",
    component: LogCheck,
    meta: { requireLogin: true },
  },
  //-----------할인코드------------
  {
    path: "/discountcode",
    component: DiscountCode,
    meta: { requireLogin: true },
    beforeEnter: () => {
      const roleCheck = store.getters["loginStore/getUserrole"];
      if (roleCheck != 0) {
        sweet.fire("해당 페이지 이용에 대한 권한이 없습니다.");
        return "/";
      }
    },
    children: [
      {
        path: "/discountcode/discountcodeone",
        component: DiscountCodeOne,
        meta: { requireLogin: true },
      },
      {
        path: "/discountcode/discountcodetwo",
        component: DiscountCodeTwo,
        meta: { requireLogin: true },
      },
    ],
  },
  {
    path: "/releaseSoldout",
    component: ReleaseSoldOut,
    meta: { requireLogin: true },
  },
  {
    path: "/test1",
    component: test1,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Main,
    meta: { requireLogin: true },
  },
  {
    path: "/chat",
    component: chat,
  },
  {
    path: "/xlsx",
    component: xlsx,
  },
  {
    path: "/ShopCondition",
    component: ShopCondition,
  },
  {
    path: "/dbshow",
    component: dbshow,

  },
  {
    path: "/modifyuser/:userid",
    component: modifyuser,

  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
