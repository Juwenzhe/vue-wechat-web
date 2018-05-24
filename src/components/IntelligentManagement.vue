<template>
    <div id="intelligent_management">
        <div class="introduce">
            <img class="introduce_bg" src="../static/introduce.png" alt="">
            <div class="introduce_title">
                <img class="left_label" src="../static/left_label.png" alt="">
                <p class="simple_introduce">公司简介</p>
                <p class="simple_introduce_en">Company profile</p>
            </div>
            <div class="introduce_content">
                <p>臻财科技是专注于校园智慧管理云平台方案设计与实施的创新型企业，拥有多项专利与知识产权。公司集软硬件研发、生产、销售、服务为一体，科技创新为主导，“教育+大数据智能网”为发展方向，倾力打造智慧校园建设。</p>
    
                <!--<p>臻财科技是专注于校园智慧</p>
                    <p>管理云平台建设的创新型企</p>
                    <p>业，拥有多项专利与知识产</p>
                    <p>权。公司以软件、硬件产品</p>
                    <p>研发和项目落地实施为一体，</p>
                    <p>以物联化、集成化、智能化</p>
                    <p>为主要技术路线，以服务创</p>
                    <p>新为导向，将智慧管理导入</p>
                    <p>校园各个系统、过程和基础</p>
                    <p>设施中，将信息化深植于管</p>
                    <p>理和学习生活的各个方面，</p>
                    <p>全面构建智慧校园。</p>-->
            </div>
            <div class="industry_policy">
                <p class="industry_policy_title">行业政策</p>
                <p class="industry_policy_title_en">Industrial policy</p>
                <div class="industry_policy_content">
                    <img class="industry_policy_img" src="../static/industry_policy_img.png" alt="">
                    <div class="industry_policy_content_p">
                        <p class="p_first">
                            近年来，国务院和教育部等部门机构多次在教育行业发展规划和会议上要求，必须加快发展教育信息化，促进新形势下教育理念和教育模式的转变。智慧校园管理是未来中国信息化发展的必然方向。
                        </p>
                        <!--<p class="p_first">近年来，国务院和教育部等</p>
                            <p>部门机构多次在教育事业发展规</p>
                            <p>划和会议上要求，必须加快发展</p>
                            <p>教育信息化，促进新形势下教育</p>
                            <p>理念和教育模式的转变。智慧教</p>
                            <p>育是未来中国信息化发展的必然</p>
                            <p>方向。</p>-->
                    </div>
                </div>
            </div>
        </div>
        <div class="introduce_cloud">
            <p>智慧校园管理云平台</p>
            <img src="../static/cloud_platform01.png" alt="">
            <div class="introduce_cloud_content">
                <p>臻财智慧校园管理云平台系统将帮助高等教育与基础教育打造一个高效、灵活、平等的平台。云平台系统在云计算、大数据、物联网等新技术的支撑下，以学生为中心的个性化、智慧化管理，同时加强学校、教师、学生和家长的沟通联系，推动智慧校园规划与建设的创新，使其成为智慧校园管理新常态。
                </p>
            </div>
        <br>
            
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            document.title = "智慧管理";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        }
    }
</script>

<style scoped>
    /* @media screen and (max-width: 370px) { */
        #intelligent_management {
            width: 100%;
            height: 100%;
            position: relative;
        }
        .introduce {
            position: relative;
            width: 100%;
            height: 100%;
            background: #2d3132;
        }
        .introduce_bg {
            width: 100%;
            display: block;
            position: absolute;
            margin-top: 50px;
        }
        .introduce_title {
            position: absolute;
            width: 100%;
            height: 100px;
            top: 15%;
        }
        .left_label {
            width: 19%;
            float: left;
            margin-top: 5%;
        }
        .simple_introduce {
            line-height: 60px;
            color: #FFFFFF;
            font-family: "FZLTCXHJW";
            font-size: 30px;
            margin-left: 24%;
            letter-spacing: 1px;
        }
        .simple_introduce_en {
            font-family: "FZLTCXHJW";
            font-size: 18px;
            font-style: italic;
            margin-left: 20%;
            color: #CAC8C8;
        }
        .introduce_content {
            position: absolute;
            width: 95%;
            top: 38%;
            /*background: red;*/
        }
        .introduce_content p {
            margin-left: 40%;
            font-family: "FZLTCXHJW";
            /*letter-spacing: 0.7px;*/
            font-size: 18px;
            /*font-size: 14px;*/
            line-height: 25px;
            color: #FFFFFF;
            text-align: justify;
        }
        /*行业政策*/
        .industry_policy {
            width: 100%;
            position: absolute;
            bottom: -10%;
            ;
            text-align: center;
        }
        .industry_policy_title {
            font-family: "FZLTCXHJW";
            letter-spacing: 1px;
            font-size: 30px;
            line-height: 25px;
            color: #FFFFFF;
        }
        .industry_policy_title_en {
            font-family: "FZLTCXHJW";
            font-size: 18px;
            font-style: italic;
            color: #CAC8C8;
            margin-top: 3%;
        }
        .industry_policy_content {
            position: absolute;
            width: 100%;
            /*margin-top: 10%;*/
        }
        .industry_policy_img {
            width: 94%;
        }
        .industry_policy_content_p {
            font-family: "FZLTCXHJW";
            color: #333333;
            line-height: 30px;
            font-size: 18px;
            text-align: left;
            position: absolute;
            left: 11%;
            top: 18%;
            width: 65%;
        }
        .p_first {
            text-indent: 30px;
        }
        /*智慧校园管理云平台*/
        .introduce_cloud {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 200%;
            text-align: center;
        }
        .introduce_cloud p {
            font-family: "FZLTCXHJW";
            font-size: 28px;
            color: #060518;
            letter-spacing: 1px;
        }
        .introduce_cloud img {
            width: 90%;
        }
        .introduce_cloud_content {
            width: 88%;
            text-align: left;
            margin: 15px auto;
            /*position: relative;*/
        }
        .introduce_cloud_content p {
            font-family: "FZLTCXHJW";
            color: #333333;
            font-size: 18px;
            text-align: justify;
            text-indent: 30px;
            line-height: 28px;
        }
    /* } */
    
    
    
</style>
