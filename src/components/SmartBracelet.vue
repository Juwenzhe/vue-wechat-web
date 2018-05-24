<template>
    <div id="SmartBracelet">
        <div class="smart_bracelet">
            <img class="smart_bracelet01" src="../static/smart_bracelet01.png" alt="">
            <p class="smart_bracelet_p">智能手环是学生身份的标识。功能上兼容一卡通系统</p>
            <img class="smart_bracelet02" src="../static/smart_bracelet02.png" alt="">
        </div>
        <div class="information_push">
            <img class="information_push01" src="../static/information_push01.png" alt="">
            <img class="information_push02" src="../static/information_push02.png" alt="">
            <div class="information_push_p">
                <img class="information_push03" src="../static/information_push03.png" alt="">
                <p>
                    今天放学爸爸
                    <br> 来接你~
                </p>
            </div>
            <div class="information_push04">
                <div class="information_push_a">
                    <p>学生可以收到家长留言的消息</p>
                    <p>提示并在电子班牌上查询</p>
                </div>
                <div class="information_push_b">
                    <p>家长可以查看孩子进出校门的</p>
                    <p>时间和校内活动轨迹</p>
                </div>
    
            </div>
        </div>
        <div class="entrance_guard">
            <div class="entrance_guard">
                <img class="entrance_guard01" src="../static/entrance_guard01.png" alt="">
                <img class="entrance_guard02" src="../static/entrance_guard02.png" alt="">
                <div class="entrance_guard_p">
                    <p>无障碍，记录学生的到校</p>
                    <p>离校时间，家长可随时查看</p>
                </div>
            </div>
    
        </div>
        <div class="health_data">
            <img class="health_data01" src="../static/health_data01.png" alt="">
            <p class="health_data02">学生运动数据采集记录，建立学生健康作息档案</p>
            <img class="health_data03" src="../static/health_data03.png" alt="">
    
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            document.title = "智能手环";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        }
    }
</script>

<style scoped>
    #SmartBracelet {
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 50px;
    }

    /*智能手环*/
    
    .smart_bracelet {
        width: 100%;
        height: 105%;
        background: white;
        text-align: center;
    }
    
    .smart_bracelet01 {
        width: 50%;
        margin-top: 8%;
    }
    
    .smart_bracelet_p {
        color: #858585;
        font-size: 14px;
        margin-top: 6%;
    }
    
    .smart_bracelet02 {
        width: 90%;
        margin-top: 10%;
    }
    
    
    
    
    /*信息推送*/
    
    .information_push {
        width: 100%;
        height: 105%;
        /*background: blue;*/
        position: relative;
        margin-top: 40px;
    }
    
    .information_push01 {
        width: 24%;
        margin-left: 8%;
        z-index: 999;
        position: absolute;
    }
    
    .information_push02 {
        width: 100%;
    }
    
    .information_push_p {
        position: absolute;
        width: 160px;
        height: 20%;
        top: 30%;
        left: 8%;
        border-radius: 5px;
    }
    
    .information_push03 {
        display: block;
        width: 100%;
        height: 120px;
        position: absolute;
    }
    
    .information_push_p p {
        z-index: 9999;
        position: absolute;
        margin-top: 10%;
        margin-left: 20%;
        line-height: 35px;
        font-size: 18px;
        color: #333333;
    }
    
    .information_push04 {
        position: absolute;
        width: 80%;
        height: 22%;
        top: 65%;
        left: 6%;
        font-size: 17px;
        color: #858585;
    }
    
    .information_push_b {
        margin-top: 10%;
    }
    
    
    
    /*电子门禁*/
    
    .entrance_guard {
        width: 100%;
        height: 100%;
        position: relative;
        margin-top: 60px;
        /*background: red;*/
    }
    
    .entrance_guard01 {
        width: 40%;
        margin-left: 52%;
    }
    
    .entrance_guard02 {
        width: 100%;
        margin-top: 30px;
    }
    
    .entrance_guard_p {
        width: 100%;
        height: 180px;
        /*background: blue;*/
        text-align: right;
        position: absolute;
        line-height: 25px;
        font-size: 18px;
        color: #858585;
    }
    
    .entrance_guard_p p {
        margin-right: 5%;
    }
    
    
    /*健康数据*/
    
    .health_data {
        width: 100%;
        height: 100%;
        text-align: center;
        position: relative;
        /*background: red;*/
    }
    
    .health_data01 {
        width: 40%;
        margin: 0 auto;
        display: block;
    }
    
    .health_data02 {
        color: #858585;
        font-size: 16px;
        margin-top: 6%;
        letter-spacing: 0.5px;
        font-size: 14px;
    }
    
    .health_data03 {
        width: 100%;
        display: block;
        margin-top: 30px;
    }
</style>
