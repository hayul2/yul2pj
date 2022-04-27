<template>
        <div class="shopCondition_wrap">
        <button class="main-btn" type="submit">
          <span class="condition">매장상태</span>
          <span 
            class="condition"
            >:영업중{{}}</span>
        </button>
        <i class="xi-bell"></i>
      </div> 
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      CheckCondition:''
    }
  },
}
</script>

<style>
@import '../assets/css/shopCondition.css';
</style>