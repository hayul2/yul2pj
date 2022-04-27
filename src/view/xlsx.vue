<template>
  <vue-excel-xlsx
        :data="data"
        :columns="columns"
        :file-name="'discountCodeFile'"
        :file-type="'xlsx'"
        :sheet-name="'codename'"
        class="xlsx_btn"
        >
        엑셀파일 다운로드
    </vue-excel-xlsx>
</template>

<script>

export default {
  components: {
  },
     data() {
            return {
                columns : [
                    {
                        label: "할인코드",
                        field: "할인코드",
                    },
                    {
                        label: "발급일자",
                        field: "발급일자",
                    },
                    {
                        label: "코드이름",
                        field: "코드이름",
                    },
                    {
                        label: "할인항목",
                        field: "할인항목",
                    },
                    {
                        label: "사용가능횟수",
                        field: "사용가능횟수",
                    },
                    {
                        label: "유효기간",
                        field: "유효기간",
                    }
                ],
                data : [
                    {
                        할인코드: 9238523525,
                        발급일자: '2022.02.24',
                        코드이름: '1주년 기념 스페셜 할인',
                        할인항목: '10%',
                        사용가능횟수: '1회',
                        유효기간: "20220224"
                    },
                    {
                        할인코드: 9238523525,
                        발급일자: '2022.02.24',
                        코드이름: '1주년 기념 스페셜 할인',
                        할인항목: '10%',
                        사용가능횟수: '1회',
                        유효기간: "20220224"
                    },
                    {
                        할인코드: 9238523525,
                        발급일자: '2022.02.24',
                        코드이름: '1주년 기념 스페셜 할인',
                        할인항목: '10%',
                        사용가능횟수: '1회',
                        유효기간: "20220224"
                    },
                    {
                        할인코드: 9238523525,
                        발급일자: '2022.02.24',
                        코드이름: '1주년 기념 스페셜 할인',
                        할인항목: '10%',
                        사용가능횟수: '1회',
                        유효기간: "20220224"
                    },
                ],
            }
        },
};
</script>
<style>
  .xlsx_btn {
    background:none;
    color:#997fb5;
    text-decoration: underline;
  }
</style>