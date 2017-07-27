<template>
    <div id="home_school">
        <div class="home_to_school">
            <img class="home_to_school_img" src="../static/home_to_school.png" alt="">
            <div class="home_school_p">
                <p>家校通是实现学校、师生和家长快捷、实时沟通的先进教育网络互动平台。</p>
            </div>
            <img class="home_to_school_phone" src="../static/home_to_school_phone.png" alt="">
        </div>
        <div class="micro_portal">
            <img class="micro_portal_title" src="../static/micro_portal.png" alt="">
            <div class="micro_portal_p">
                <p>平台特色&nbsp;&nbsp;丰富宣传&nbsp;&nbsp;打造品牌&nbsp;&nbsp;提示形象</p>
            </div>
            <img class="micro_portal_phone" src="../static/micro_portal_phone.png" alt="">
            <div class="micro_portal_p02">
                <p>1.新闻: 编辑发布学校新闻公告、荣誉和教师风采等，展示学校特色，提升学校形象。</p>
                <p>2.招生报名: 可收集意向生源信息。</p>
            </div>
        </div>
        <div class="home_connect_school">
            <img class="home_connect_school_img" src="../static/home_connect_school.png" alt="">
            <div class="home_connect_school_p">
                <p>方便学校，老师和家长以及家长和学生进行沟通</p>
            </div>
            <img class="home_connect_school_phone" src="../static/home_connect_school_phone.png" alt="">
            <div class="parent">
                <img class="home_connect_school_parent" src="../static/home_connect_school_parent.png" alt="">
                <p class="parent_p">单发群发&nbsp;&nbsp;实时便捷</p>
            </div>
            <div class="teacher">
                <img class="home_connect_school_teacher" src="../static/home_connect_school_teacher.png" alt="">
                <p class="teacher_p">已阅未阅&nbsp;&nbsp;一目了然</p>
            </div>
        </div>
        <div class="currency_oa">
            <img class="currency_oa_img" src="../static/currency_oa.png" alt="">
            <div class="currency_oa_teacher">
                <img src="../static/currency_oa_teacher.png" alt="">
                <p class="currency_oa_p">通过文本和图片对申报内容进行描述，完成审批流程</p>
            </div>
            <div class="list">
                <ul>
                    <li>申报审批</li>
                    <li>操作简单</li>
                    <li>简化流程</li>
                    <li>提升效率</li>
                </ul>
            </div>
            <!--<div class="currency_oa_glare">
                <img class="currency_oa_glare_img" src="../static/currency_oa_glare.png" alt="">
                
            </div>-->
        </div>
        <div class="msg_manage">
            <img class="msg_manage_img" src="../static/msg_manage.png" alt="">
            <div class="msg_manage_p1">
                <p>一键导入&nbsp;&nbsp;便捷管理</p>
                <p>动态分析&nbsp;&nbsp;定点推送</p>
            </div>
            <!--<img class="grade" src="../static/grade.png" alt="">-->
            <img class="grade_img" src="../static/grade_img.png" alt="">
            <div class="msg_manage_p2">
                <p>1.成绩管理: 老师一键导入学生成绩，家长查看学生成绩折线图。</p>
                <p>2.作业管理: 老师布置作业并推送，家长查看学生作业。</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            document.title = "家校通";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        }
    }
</script>

<style scoped>
    #home_school {
        margin-top: 15.8%;
        width: 100%;
        height: 100%;
        /*background: red;*/
        position: relative;
    }
    
    p {
        font-size: 12px;
        color: #858585;
        line-height: 20px;
    }
    
    /*家校通*/
    
    .home_to_school {
        position: relative;
        width: 100%;
        height: 110%;
        background: white;
    }
    
    .home_to_school_img {
        position: absolute;
        width: 35%;
        top: 6.5%;
        left: 5%;
    }
    
    .home_school_p {
        position: relative;
        top: 17%;
        width: 90%;
        margin: 0 auto;
    }
    
    .home_to_school_phone {
        width: 92%;
        /*margin-top: 35%;*/
        display: block;
        margin: 34% auto;
    }
    /*微门户*/
    .micro_portal {
        width: 100%;
        height: 110%;
        position: relative;
    }
    .micro_portal_title {
        /*position: absolute;*/
        width: 35%;
        display: block;
        float:right;
        margin-right: 5%;

    }
    .micro_portal_p {
        position: relative;
        top: 5%;
        width: 90%;
        float: right;
        margin-right: 6%;
        text-align: right;

    }
    .micro_portal_p p {
        font-size: 0.95rem;
        color: #333333;
    }
    .micro_portal_phone {
        width: 92%;
        display: block;
        position: absolute;
        margin: 35% auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .micro_portal_p02 {
        width: 90%;
        height: 80px;
        position: absolute;
        margin: 125% auto;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .micro_portal_p02 p {
        font-size: 0.85rem;
        color: #858585;
        margin-left: 0.9em;
        margin-bottom: 1.5em;
        text-align: justify;
    }
    .micro_portal_p02 p:first-letter{
    margin-left: -0.9em;
    }
    /*驾校互连*/
    
    .home_connect_school {
        position: relative;
        width: 100%;
        height: 110%;
        margin-top: 15%;
        /*background: red;*/
    }
    
    .home_connect_school_img {
        display: block;
        margin: 0 auto;
        width: 50%;
    }
    
    .home_connect_school_p {
        margin-top: 6%;
        display: block;
        /*width: 100%;*/
        text-align: center;
    }
    
    .home_connect_school_phone {
        width: 92%;
        display: block;
        margin: 10% auto;
        margin-bottom: 5% !important;
    }
    
    .parent {
        width: 35%;
        height: 22%;
        /*background: red;*/
        position: absolute;
        top: 23%;
        left: 5%;
    }
    
    .home_connect_school_parent {
        display: block;
        /*position: absolute;*/
        width: 60%;
        /*top: 25%;*/
        margin-left: 15%;
    }
    
    .parent_p {
        font-size: 0.8rem;
        color: #333333;
        display: block;
        /*position: absolute;*/
        margin-top: 20%;
        /*bottom: 0;*/
    }
    
    .teacher {
        width: 40%;
        height: 22%;
        position: relative;
        right: 10%;
        /*background: red;*/
        float: right;
    }
    
    .teacher_p {
        position: relative;
        /*display: inline-block;*/
        margin-top: 10%;
        float: right;
        font-size: 0.8rem;
        color: #333333;
        display: block;
    }
    
    .home_connect_school_teacher {
        display: block;
        /*position: absolute;*/
        width: 60%;
        /*margin-top: 10%;*/
        float: right;
    }

    /*通用OA*/
    
    .currency_oa {
        position: relative;
        width: 100%;
        height: 125%;
        background: white;
    }
    
    .currency_oa_img {
        position: absolute;
        width: 38%;
        top: 6.5%;
        left: 5%;
        z-index: 999;
    }
    
    .currency_oa_teacher {
        width: 100%;
        /*display: block;*/
        position: absolute;
        top: 2%;
        height: 100%;
        margin: 0 auto;
    }
    .currency_oa_teacher img{
        width: 100%;
        /*display: block;*/
        position: absolute;
        top: 2%;
    }
     .currency_oa_p {
        float: right;
        margin-top: 165%;
        margin-right: 5%;
        font-size: 0.75rem;
    }
    .list {
        position: absolute;
        right: 6%;
        top: 11.5%;
        font-size: 0.95rem;
        /*font-size: 15px;*/
        color: #333333;
    }
    
    .list li {
        margin-bottom: 10%;
        letter-spacing: 1px;
    }
    
    .currency_oa_glare {
        position: absolute;
        margin-top: 90%;
        right: 0;
        height: 40%;
        width: 100%;
        /*background: red;*/
    }
    
    .currency_oa_glare_img {
        float: right;
        width: 75%;
    }
    
   

    /*信息管理*/
    
    .msg_manage {
        position: relative;
        width: 100%;
        height: 100%;
        background: white;
    }
    
    .msg_manage_img {
        position: relative;
        width: 38%;
        /*top: 60.5%;*/
        margin-top: 6.5%;
        left: 5%;
        z-index: 999;
        display: black;
    }
    .msg_manage_p1 {
        position: relative;
        height: 10%;
        width: 60%;
        /*background: red;*/
        margin-top: 3%;
        margin-left: 5%;
    }
    .msg_manage_p1 p {
        font-size: 0.94rem;
        line-height: 25px;
    }
    .grade {
        position: relative;
        float: right;
        margin-top: -12%;
        margin-right: 5%;
        width: 28%;
    }
    .grade_img {
        display: block;
        position: relative;
        margin: 10% auto 0;
        width: 90%;
    }
    .msg_manage_p2 {
        width: 92%;
        height: 140px;
        /*background: red;*/
        margin: 10% auto;
       
    }
    .msg_manage_p2 p {
        margin-bottom: 4%;
        font-size: 0.8rem;
        color: #858585;
        letter-spacing: 1px;
        margin-left: 0.9em;
    }
    .msg_manage_p2 p:first-letter{
        margin-left: -0.9em;
    }
</style>
