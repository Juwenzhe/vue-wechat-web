<template>
  <div id="about_us">
    <div class="about_us">
      <div class="about_us_title">
        <img class="about_us_title" src="../static/about_us.png" alt="">
      </div>
      <div class="about_us_content">
        <p>杭州臻财科技有限公司，是校园智慧管理云平台解决方案的供应商。公司具备雄厚的研发实力及丰富的教育资源，以科技创新为主导，‘教育+大数据智能网’为发展方向，扎实推进校园信息化建设。多维度采集学生信息，大数据精准分析、定点推送。
        </p>
      </div>
      <div class="vision">
        <img class="vision_img" src="../static/vision.png" alt="">
        <p class="vision_p1">公司经营理念: 臻品共享，财益共赢；</p>
        <p class="vision_p2">服务宗旨: 优质高效，务实守信。</p>
      </div>
      <div class="history">
        <img class="history_title" src="../static/development_history.png" alt="">
        <img class="history_bg" src="../static/history_bg.png" alt="" >
        <div class="history_content">
          <p>2016年，家校通在温州市瓯江小学、温州市白鹿外国语学校、杭州市澎博小学、丁兰实验中学、瑞安养正学校正式上线。</p>
          <p>2017年，电子班牌在温州市白鹿外国语学校，温州市智慧校园示范校——乐清白象中学上线。自公司成立、产品面市以来，得到广大用户一致认可，校领导高度赞扬。</p>
        </div>
      </div>
      <div class="connect_us">
        <div class="connect_us_title">
          <img src="../static/contact_us.png" alt="">
        </div>
        <div class="connect_us_content">
          <p>邮箱: yang@zcxiaolian.com</p>
          <p>电话: 0571-86811981</p>
          <p>地址: 浙江省杭州市滨江区火炬大道581号三维大厦C座504</p>
        </div>
        <img class="ercode" src="../static/ercode.png" alt="">
        <p class="ercode_p">如果您有合作意愿或相关建议，欢迎与我们联系</p>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
        created() {
            document.title = "关于我们";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        }
  }
</script>

<style scoped>
  #about_us {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 16%;
  }
  .ercode {
    width: 60%;
    display: block;
    margin: 2em auto;
  }
  .ercode_p {
    font-size: 0.9rem;
    margin: 0 auto;
    text-align: center;
    color: #858585;
  }
  .about_us {
    width: 100%;
    height: 100%;
  }
  .about_us_title {
    width: 100%;
    height: 50px;
  }
  .about_us_title img{
    width: 60%;
    display: block;
    float: right;
    margin-top: 12%;
    position: relative;
  }
  .about_us_content {
    width: 90%;
    position: relative;
    margin: 20% auto;
  }
  .about_us_content p {
    text-align: justify;
    text-indent: 2em;
    line-height: 27px;
    font-size: 1rem;
    color: #858585;
  }
  /*愿景*/
  .vision {
    width: 100%;
    height: 70%;
  }
  .vision_img {
    width: 85%;
    display: block;
    margin: 0 auto;
  }
  .vision_p1 {
    font-size: 1rem;
    color: #858585;
    text-indent: 3em;
    line-height: 50px;
  }
  .vision_p2 {
    font-size: 1rem;
    color: #858585;
    text-indent: 1.5em;
  }
  /*发展历程*/
  .history {
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 30px;
  }
  .history_title {
    width: 65%;
  }
  .history_bg {
    width: 100%;
    display: block;
    position: absolute;
    margin-top: 10%;
  }
  .history_content {
    position: relative;
    width: 90%;
    margin: 25% auto;
  }
  .history_content p {
    color: #FFFFFF;
    line-height: 25px;
    text-indent: 2em;
    text-align: justify;
    font-size: 0.9rem;
  }
  /*联系我们*/
  .connect_us {
    width: 100%;
    height: 60%;
    position: relative;
  }
  .connect_us_title {
    width: 100%;
    height: 100px;
    text-align: right;
  }
  .connect_us_title img {
    width: 70%;
  }
  .connect_us_content {
    width: 80%;
    margin: 0 auto;
    line-height: 30px;
    font-size: 1rem;
    color: #858585;
    padding-left: 3em;
  }
  .connect_us_content p:first-letter {
    margin-left: -2.5em;
}
</style>
