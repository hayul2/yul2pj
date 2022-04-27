export const signupStore = {
  namespaced: true,
  state: ()=> ({
    //==== SignUpOne 약관동의 ===
    selected: [],
    //==== SignUpTwo 회원가입 ===
    //아이디
    userId: '',
    //비밀번호
    userPw: '',
    //대표자 이름
    userName: '',
    //대표자 번호
    phNum: '',
    //매장 이름
    shopName: '',
    //매장 대표번호
    shopPhNum: '',
    //매장 주소
    bizAddr1: '',
    //매장 상세주소
    bizAddr2: '',
    //우편번호
    bizZip: '',
    //참고항목
    etc: '',
    //==== SignUpThree 관리자 정보 ===
    //관리자 이름
    mgName: '',
    //관리자 번호
    mgPhNum: '',
    //관리자 메일주소
    mgEmail: '',
    //사업자번호
    bizNum: '',
    //==== 기타 회원정보 ===
    //회원번호(인덱스)
    userNum: '',
    //가입날짜
    userDate: '',
    //회원유형
    userType: '',
    //가입 승인 여부
    inProcess: '',
    //사인업3 널체크
    isNull: false,
  }),
  getters: {
    selected: (state)=>{
      return state.selected
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state[data.key] = data.value
    },
  },
  actions: {
    setSignUpData: ({ commit, state }, data)=>{
      Object.keys(data).forEach((key) => {
        if (Object.keys(state).find((skey) => skey === key)) {
        commit('SET_DATA', { key: key, value: data[key] })
        }
      })
    }
  }
}


