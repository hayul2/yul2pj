import axios from 'axios'
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

export const loginStore = {
  namespaced: true,

  state: {
    userid: '',
    accessToken: '',
    refreshToken: '',
    shopName: '',
    shopPhNum: '',
    mgName: '',
    checked: null,
    userrole: '',
    shopCode: '',
  },
  getters: {
    getId(state){
      return state.userid
    },
    getAcToken(state){
      return state.accessToken
    },
    getReToken(state){
      return state.refreshToken
    },
    getShopName(state){
      return state.shopName
    },
    getShopPhNum(state){
      return state.shopPhNum
    },
    getMgName(state){
      return state.mgName
    },
    getUserrole(state){
      return state.userrole
    },
    getShopcode(state){
      return state.shopCode
    },
    //로그인 여부 확인 메소드
    isLogin (state) {
      return state.refreshToken == '' ? false : true
    },
    isAccessTokenExpire(state){
      let expire=false;
      // accessToken에서 .로 분리하여 payload 가져옴
      let base64Payload = state.accessToken.splite('.')[1];
      //URL과 호환되지 않는 문자를 base64표준문자로 교체
      base64Payload = base64Payload.replace(/-/g, '+').replace(/_/g, '/');
      //atob() 메소드로 복호화
      base64Payload = atob(base64Payload);
      //JSON 객체로 변환
      var payloadObeject = JSON.parse(base64Payload);
      //accessToken의 만료시간 확인
      var currentDate = new Date().getTime() / 1000;
      if(payloadObeject.exp <= currentDate) {
        console.log('token expired');
        expire = true;
      }else {
        console.log('token valid');
      }
      return expire;
    }
  },
  mutations: {
    //userId 설정
    setUserId (state, id) {
      state.userid = id;
    },
    // accessToken 설정
    setAccessToken (state, access) {
      state.accessToken = access;
    },
    //refreshToken 설정
    setRefreshToken(state, refresh) {
      state.refreshToken = refresh;
    },
    setShopName(state, sname){
      state.shopName = sname;
    },
    setShopPhNum(state,spnum){
      state.shopPhNum = spnum;
    },
    setMgName(state, mname){
      state.mgName = mname
    },
    setChecked(state, ck){
      state.checked = ck
    },
    setUserrole(state, role){
      state.userrole = role
    },
    setShopcode(state, code){
      state.shopCode = code
    },

    //쿠키 삭제 메소드
    reset(state){
      state.userid ='';
      state.accessToken ='';
      state.refreshToken ='';
      state.shopName ='';
      state.shopPhNum ='';
      state.mgName ='';
      state.shopCode='';
      state.userrole = '';

    
      cookies.remove('login')
    },
    saveStateToStorage(state){
      if(state.checked) {
        cookies.set('login', JSON.stringify(state), 60*60*24*365)
      }else{
        cookies.set('login', JSON.stringify(state), 60*60*24)
      }
    },
    //쿠키 리드 메소드
    readStateFromStorage(state){
      // state정보를 JSON 객체로 관리할 경우 쿠키에서 GET메소드로 가져올 때 자동으로 JSON 객체로 변환됨, JSON.parse() 사용 안해도 됨
      if(cookies.get('login') != null){
        let storage = cookies.get('login');
        if(storage.userid != null){
          state.userid = storage.userid;
        }
        if(storage.accessToken != null){
          state.accessToken = storage.accessToken;
        }
        if(storage.refreshToken != null){
          state.refreshToken = storage.refreshToken;
        }
        if(storage.shopName != null){
          state.shopName = storage.shopName;
        }
        if(storage.shopPhNum != null){
          state.shopPhNum = storage.shopPhNum;
        }
        if(storage.mgName != null){
          state.mgName = storage.mgName;
        }
        if(storage.userrole != null){
          state.userrole = storage.userrole;
        }
        if(storage.shopCode != null){
          state.shopCode = storage.shopCode;
        }
      }

    },
  },
  actions: {
    async doLogin ({ commit }, userInfo) {
      let result = false
      let resultErr = null
      try {
        let res = await axios.post('/member/login', userInfo)
        if (res.data.success == true) {
          commit('setUserId', userInfo.userid);
          commit('setAccessToken', res.data.accessToken);
          commit('setRefreshToken', res.data.refreshToken);
          commit('setShopName', res.data.shopname);
          commit('setShopPhNum', res.data.shopphnum);
          commit('setMgName', res.data.mgname);
          commit('setChecked', userInfo.checked);
          commit('setUserrole', res.data.userrole);
          commit('setShopcode', res.data.shopcode);
          commit('saveStateToStorage');
          axios.defaults.headers.common['Access-Token'] = res.data.accessToken;
          result = true;
          console.log('로그인 성공');
        } else {
          console.log('로그인 실패');
          let err = new Error('Request failed with status code 401');
          err.status = 401;
          err.response = {
            data: {
              'success': false,
              'errormessage': '로그인 실패'
            }
          }
          resultErr = err;
        }
      } catch (err) {
        console.log(err)
        if (!err.response) {
          err.response = {
            data: {
              'success': false,
              'errormessage': err.message
            }
          }
        }
        resultErr = err
      }
      return new Promise((resolve, reject) => {
        if (result) {
          resolve()
        } else {
          reject(resultErr)
        }
      })
    },
    //accessToken 갱신 메소드
    async doRefreshToken({commit, state}){
      let result = false;
      let resultErr = null;
      if(state.accessToken != ''){
        let token = { id: state.userid, accessToken : state.accessToken, refreshToken : state.refreshToken};
        try{
          let res = await axios.post('/member/refresh', token)
           if(res.data.success == true){
             console.log('AccessToken이 갱신되었습니다.');
             commit('setAccessToken', res.data.accessToken);
             console.log(res.data.accessToken);
             axios.defaults.headers.common['Access-Token'] = res.data.accessToken;
             resultErr = true;
           }else{
             console.log('Access-Token이 갱신되지 않았습니다.');
             let err = new Error('Request failed with status code 401');
             err.status=401;
             err.response = {data:{'success':false, "errormessage":"Access-Token이 갱신되었습니다."}}
             resultErr = err;
           }
        }catch (err){
          if(!err.response){
            err.response = {data:{"success":false, "errormessage":err.message}};
          }
          resultErr = err;
        }
      } else{
        let err = new Error('Access-Token이 존재하지 않습니다.');
        err.status=401;
        err.response={data:{'success':false, 'errormessage':'Access-Token이 없습니다.'}};
        resultErr = err;
      }
      return new Promise((resolve, reject)=>{
        if(result) resolve();
        else reject(resultErr);
      })
    },
    doReadStateFromStorage({commit}){
      commit('readStateFromStorage');
    },
    doLogout ({ commit }) {
      commit('reset')
      delete axios.defaults.headers.common['Access-Token'];
    }
  },
}

