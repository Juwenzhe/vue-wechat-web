<template lang="pug">
  div#x-course
    div.box
      img.img(src="../static/x_course_title.png")
      img.common(src="../static/xcourse_mac.png")
      img.common(src="../static/zd_math.png")
      img.common(src="../static/choose_course.png")
      img.common(src="../static/xcourse_no.png")
      img.common(src="../static/xcourse_lilian.png")
      img.common.last(src="../static/xcourse_web.png")
</template>
<script>
export default {
  created() {
    document.title = '臻"排课';
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
};
</script>
<style lang="scss" scoped>
#x-course {
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 139px;
  text-align: center;
  .box {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    .img {
      width: 240px;
    }
    .common {
      width: 350px;
      margin-top: 80px;
      &:nth-child(7) {
        margin-bottom: 80px;
      }
    }
  }
}
</style>
