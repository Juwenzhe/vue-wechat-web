<template>
    <div id="class_card">
        <div class="class_card">
            <img class="classcard_title" src="../static/classcard_title.png" alt="">
            <img class="classcard_img" src="../static/class_card01.png" alt="">
        </div>
        <div class="mode">
            <img class="title" src="../static/standard_mode_title.png" alt="">
            <img class="img" src="../static/standard_mode_img.png" alt="">
            <img class="standard_mode_img standard_mode_img01" src="../static/standard_mode_img01.png" alt="">
            <img class="standard_mode_img" src="../static/standard_mode_img02.png" alt="">
            <img class="standard_mode_img" src="../static/standard_mode_img03.png" alt="">
            <img class="standard_mode_img" src="../static/standard_mode_img04.png" alt="">
    
            <!--<div class="standard_mode_introduce">
                                <div class="introduce_title">
                                    <p class="p_title">学校宣传</p>
                                    <p class="p_content">校园文化&nbsp;&nbsp;&nbsp;新闻公告</p>
                                    <p class="p_content">欢迎标语</p>
                                </div>
                                <div class="introduce_img">
                                    <img src="../static/school_advertise_img.png" alt="">
                                </div>
                            </div>
                            <div class="standard_mode_introduce">
                                <div class="introduce_title">
                                    <p class="p_title">公共信息</p>
                                    <p class="p_content">天气预报&nbsp;&nbsp;&nbsp;穿衣指数</p>
                                    <p class="p_content">时间日期</p>
                                </div>
                                <div class="introduce_img">
                                    <img src="../static/public_msg.png" alt="">
                                </div>
                            </div>
                            <div class="standard_mode_introduce">
                                <div class="introduce_title">
                                    <p class="p_title">教学办公</p>
                                    <p class="p_content">电子课程表&nbsp;&nbsp;&nbsp;授课信息</p>
                                    <p class="p_content">二维码签到&nbsp;&nbsp;&nbsp;考勤汇总</p>
                                    <p class="p_content">学生个人课表查询</p>
                                    <p class="p_content">满足走板教学需求</p>
                                </div>
                                <div class="introduce_img">
                                    <img src="../static/class_schedule.png" alt="">
                                </div>
                            </div>
                            <div class="standard_mode_introduce">
                                <div class="introduce_title">
                                    <p class="p_title">班级动态</p>
                                    <p class="p_content">班级奖状</p>
                                    <p class="p_content">学生荣誉奖状</p>
                                </div>
                                <div class="introduce_img">
                                    <img src="../static/class_culture.png" alt="">
                                </div>
                            </div>-->
        </div>
        <!--会议模式-->
        <div class="mode">
            <img class="title" src="../static/meeting_mode_title.png" alt="">
            <img class="img img_w" src="../static/meeting_mode_img.png" alt="">
        </div>
        <!--考试模式-->
        <div class="mode">
            <img class="title" src="../static/test_mode_title.png" alt="">
            <img class="img img_test" src="../static/test_mode_img.png" alt="">
        </div>
        <!--紧急模式-->
        <div class="mode">
            <img class="title" src="../static/emergency_mode_title.png" alt="">
            <img class="img img_emergency" src="../static/emergency_mode_img.png" alt="">
        </div>
    
        <div class="mode">
            <img class="title custom_title" src="../static/custom_mode_title.png" alt="">
    
            <div class="rolls">
                <img class="rolls_emergency" src="../static/custom_mode_img.png" alt="">
                <div class="rolls_p">
                        <p>自定义后台网页编辑展示</p>
                        <p>自定义网页链接展示</p>
                        <p>自定义图片展示</p>
                    </div>
                <div class="custom_mode_swiper">
                    <img src="../static/banpai.png" alt="">
                    
                    <swiper :options="swiperOption" ref="mySwiper" class="swiper-no-swiping">
                        <swiper-slide>
                            <img class="swiper_img" src="../static/custom_mode_img01.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="swiper_img" src="../static/custom_mode_img02.png" alt="">
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    // direction : 'vertical',
                    // effect: "coverflow",
                    grabCursor: true,
                    setWrapperSize: true,
                    simulateTouch: false,
                    followFinger: false,
                    // autoHeight: true,
                    // paginationType:"bullets",
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    // scrollbar:'.swiper-scrollbar',
                    mousewheelControl: true,
                    observeParents: true,
                    loop: true,
                    // if you need use plugins in the swiper, you can config in here like this
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    // debugger: true,
                    // swiper callbacks
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    // onTransitionStart(swiper){
                    //   console.log(swiper)
                    // },
                    // more Swiper configs and callbacks...
                    // ...
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created() {
            document.title = "电子班牌";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        }
    }
</script>

<style scoped>
    #class_card {
        width: 100%;
        height: 100%;
        position: relative;
        margin-top: 14%;
    }
    .swiper-no-swiping {
        width: 164px;
        height: 320px;
        position: absolute;
        top: 11px;
        left: 25px;
    }
    .rolls_p {
        height: 100px;
        position: absolute;
        top: 35px;
        left: 14rem;
        font-size: 0.8rem;
    }
    .rolls_p p {
        margin-bottom: 5px;
    }
    .custom_mode_swiper {
        position: absolute;
        width: 230px;
        height: 20px;
        top: 35px;
        left: 5px;
    }
    .custom_mode_swiper img {
        width: 100%;
    }
    .rolls {
        width: 100%;
        position: relative;
        margin: 0 auto;
        /* height: 500px; */
        /* background: red; */
    }
    .rolls_emergency {
        position: relative;
        width: 100% !important;
        margin-top: 220px;
    }
    .swiper_img {
        width: 100%;
    }
    
    .standard_mode_img {
        width: 100%;
        display: block;
        margin-bottom: 2.5em;
    }
    
    .standard_mode_img01 {
        margin-top: 5em;
    }
    
    .title {
        width: 45%;
        display: block;
        margin: 0 auto 4em;
    }
    
    .custom_title {
        width: 50% !important;
    }
    
    .img {
        width: 80%;
        display: block;
        margin: 2em auto;
    }
    
    .img_w {
        width: 95% !important;
        margin-right: 0;
        margin-top: 4.5em !important;
    }
    
    .img_test {
        width: 100% !important;
        margin-top: 4.5em !important;
    }
    
    .img_emergency {
        width: 100% !important;
        margin-top: 4.5em !important;
    }
    
    .p_title {
        font-size: 1rem;
        margin-bottom: 0.5em;
    }
    
    .p_content {
        font-size: 0.8rem;
        color: #858585;
    }
    
    .class_card {
        width: 100%;
        height: 110%;
    }
    
    .classcard_title {
        width: 90%;
        display: block;
        position: absolute;
        margin: 3em auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 99;
    }
    
    .classcard_img {
        width: 100%;
        display: block;
        position: absolute;
    }
    
    .mode {
        position: relative;
        width: 100%;
        margin-bottom: 8em;
    }
    
    .standard_mode_introduce {
        width: 100%;
        background: #fcfcfc;
        display: flex;
        padding: 1.2em 0.5em;
        box-sizing: border-box;
    }
    
    .introduce_title {
        width: 45%;
    }
    
    .introduce_img {
        width: 55%;
    }
    
    .introduce_img img {
        width: 100%;
    }
</style>
