export const staffStore = {
    namespaced: true,
    state: ()=> ({
        //직원추가 이름
        stName:'',
        //직원추가 아이디
        stId:'',
        //직원추가 비밀번호
        stPw:'',
        //직원설정 이름
        sName:'',
        //직원설정 아이디
        sId:'',
        //직원설정 비밀번호
        sPw:'',        
    }),
}