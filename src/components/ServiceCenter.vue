<template>
  <div class="service-center">
    <img src="../static/service-center.png" alt="">
  </div>
  
</template>
<script>
export default {
  created() {
    document.title = "教育数据服务中心";
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
};
</script>
<style scoped>
.service-center{
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 139px;
  text-align: center;
  
}
img{
    width: 100%;
  }
</style>
