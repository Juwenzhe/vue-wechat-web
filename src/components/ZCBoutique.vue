<template>
    <div id="zc_boutique">
        <router-link class="title_two" to="/TopHeader/SmartBracelet" tag="a">
            <div class="boutique smart_bracelet">
                <img class="left_img" src="../static/left_label.png" alt="">
                <img class="smart_bracelet_title" src="../static/smart_bracelet_title.png" alt="">
                <img class="smart_bracelet_img" src="../static/smart_bracelet_img.png" alt="">
                <span class="smart_bracelet_span">一环在手，连接所有</span>
            </div>
        </router-link>
         <router-link class="title_two" to="/TopHeader/ClassCard" tag="a">
            <div class="boutique class_card">
                <img class="right_img" src="../static/right_label.png" alt="">
                <img class="class_card_title" src="../static/class_card_title.png" alt="">
                <img class="class_card_img" src="../static/class_card_img.png" alt="">
                <span class="class_card_span">信息交互，动态展示</span>
            </div>
         </router-link>
        <router-link class="title_two" to="/TopHeader/HomeSchool" tag="a">
            <div class="boutique home_school">
                <img class="left_img" src="../static/left_label.png" alt="">
                <img class="home_school_title" src="../static/home_school_title.png" alt="">
                <img class="home_school_img" src="../static/home_school_img.png" alt="">
                <span class="home_school_span">学校门户，家校互通</span>
            </div>
        </router-link>
        <router-link class="title_two" to="/TopHeader/xcourse" tag="a">
            <img class="xxx" src="../static/zoubanpaike.png" alt="">
        </router-link>
        <router-link class="title_two" to="/TopHeader/servicecenter" tag="a">
            <img class="xxx" src="../static/servicecenter.png" alt="">
        </router-link>
        <div class="cloud_platform">
            <p class="cloud_title">云平台关系图</p>
            <img src="../static/cloud_platform.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  created() {
    document.title = "臻财精品";
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
};
</script>
<style scoped>
#zc_boutique {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f2f3ff;
  margin-top: 50px;
}
.xxx {
  width: 100%;
}
div {
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.06), 0 -5px 5px rgba(0, 0, 0, 0.06);
}

span {
  color: gray;
}

@keyframes left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.boutique {
  width: 100%;
  height: 35%;
  margin-bottom: 15px;
  background-size: contain;
}

.smart_bracelet {
  position: relative;
  background: url("../static/smart_bracelet_bg.png") center;
  overflow: hidden;
  animation: left 1s infinite;
  animation-iteration-count: 1;
}

.class_card {
  position: relative;
  background: url("../static/class_card_bg.png") center;
  overflow: hidden;
  animation: right 1s infinite;
  animation-iteration-count: 1;
}

.home_school {
  position: relative;
  background: url("../static/home_school_bg.png") center;
  overflow: hidden;
  animation: left 1s infinite;
  animation-iteration-count: 1;
}

/*智能手环*/

.left_img {
  position: absolute;
  display: block;
  width: 19%;
  top: 28%;
}

.smart_bracelet_title {
  position: absolute;
  display: block;
  width: 38%;
  top: 26%;
  left: 25%;
}

.smart_bracelet_img {
  position: absolute;
  display: block;
  width: 28%;
  bottom: 0;
  right: 0;
}

.smart_bracelet_span {
  display: block;
  position: absolute;
  top: 50%;
  left: 30%;
  font-size: 18px;
}

/*电子班牌*/

.right_img {
  position: absolute;
  display: block;
  width: 19%;
  top: 28%;
  right: 0;
}

.class_card_title {
  position: absolute;
  display: block;
  width: 38%;
  top: 26%;
  right: 25%;
}

.class_card_img {
  position: absolute;
  display: block;
  width: 24%;
  top: 12%;
  left: 4%;
}

.class_card_span {
  display: block;
  position: absolute;
  top: 50%;
  right: 15%;
  font-size: 18px;
}

/*家校通*/

.home_school_title {
  position: absolute;
  display: block;
  width: 30%;
  top: 26%;
  left: 25%;
}

.home_school_img {
  position: absolute;
  display: block;
  width: 42%;
  top: 20%;
  right: 0;
}

.home_school_span {
  display: block;
  position: absolute;
  top: 50%;
  left: 12%;
  font-size: 18px;
}

/*云平台关系图*/

.cloud_platform {
  width: 100%;
  height: 90%;
  text-align: center;
  background: white;
  animation: right 1s infinite;
  animation-iteration-count: 1;
}

.cloud_platform img {
  width: 100%;
}

.cloud_title {
  font-family: "FZLTCXHJW--GB1-0";
  font-size: 30px;
  line-height: 55px;
  margin-bottom: 20px;
}
</style>
