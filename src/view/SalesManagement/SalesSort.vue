<template>
<div class="controller">
    <div class="sales_sort_btn_wrap">
        <select class="sales_sort_btn" name="sales" id="sales" v-model="selected" v-on:change="sortSales">
            품절해제
            <option class="log_check_Box" value="date-asc">최신순</option>
            <option class="log_check_Box" value="date-desc">과거순</option>
        </select>
    </div>  
</div>
</template>

<script>
export default {
    data() {
        return {
            selected: "date-asc"
        }
    },
    methods: {
        sortSales() {
            this.value("sortItem", { value: this.selected});
        }
    }
}
</script>

<style>

</style>