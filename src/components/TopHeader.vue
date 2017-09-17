<template>
    <div id="content">
        <div class="header">
            <div class="zc_logo">
                <img src="../static/logo.png" alt="">
            </div>
            <div class="button">
                <div v-show="state" v-on:click="changeState" class="hb">
                    <span class="span span_a"></span>
                    <span class="span span_b"></span>
                    <span class="span span_a"></span>
                </div>
                <div v-show="!state" v-on:click="changeState">
                    <span class=" span_c"></span>
                    <span class=" span_d"></span>
                </div>
            </div>
    
        </div>
        <transition name="fade">
            <div class="sidebar" v-show="!state">
                <div class="right">
                    <ul>
                        <li class="title_one" v-on:click="changeState">
                            <router-link to="/TopHeader/IntelligentManagement" tag="a">智慧管理</router-link>
                        </li>
                        <li class="title_one title_one_bottom" v-on:click="changeState">
                            <router-link to="/TopHeader/ZCBoutique" tag="a">臻财精品</router-link>
                        </li>
                        <li class="title_two" v-on:click="changeState">
                            <router-link class="title_two" to="/TopHeader/HomeSchool" tag="a">家校通</router-link>
                        </li>
                        <li class="title_two" v-on:click="changeState">
                            <router-link class="title_two" to="/TopHeader/ClassCard" tag="a">电子班牌</router-link>
                        </li>
                        <li class="title_two title_two_bottom" v-on:click="changeState">
                            <router-link class="title_two" to="/TopHeader/SmartBracelet" tag="a">智能手环</router-link>
                        </li>
                        <li class="title_one" v-on:click="changeState">
                            <router-link class="title_one" to="/TopHeader/News" tag="a">新闻动态</router-link>
                        </li>
                        <li class="title_one" v-on:click="changeState">
                            <router-link class="title_one" to="/TopHeader/AboutUS" tag="a">关于我们</router-link>
                        </li>
                        <li class="title_one">
                            <a href="../../help/index.html">xxxxx</a>
                        </li>
                    </ul>
                    <div class="logo">
                        <img class="logo_img" src="../static/logo.png" alt="">
                    </div>
                </div>
    
            </div>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-bind:class="{router_view: !state}"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: true
            }

        },
        methods: {
            changeState: function () {
                this.state = !this.state;
            }
        }
    }
</script>

<style scoped>
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .3s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: all .4s
    }
    
    .fade-enter,
    .fade-leave-to
    {
        transform: translateX(54%);
    }
    
    a {
        color: white;
    }
    
    .router_view {
        filter: blur(10px);
    }
    
    #content {
        /*background-image: url(../static/logo.png);*/
        width: 100%;
        height: 100%;
        position: relative;
    }
    .zc_logo {
        position: absolute;
        top: 32%;
        left: 3%;
        bottom: 0;
        right: 0;
        width: 100px;
        height: 100%;
        text-align: center;
    }
    .zc_logo img {
        width: 110%;
    }
    .logo {
        width: 100px;
        position: absolute;
        left: 0; bottom: 15px; right: 0;
        margin: auto;
    }
    
    .logo_img {
        width: 100px;
    }
    
    .header {
        position: fixed;
        width: 100%;
        height: 10%;
        background: #1c1c20;
        /*background: green;*/
        top: 0;
        z-index: 9999;
    }
    
    .button {
        width: 28px;
        height: 25px;
        /*background: red;*/
        margin: auto;
        position: absolute;
        top: 6%;
        right: 2%;
        bottom: 0;
        text-align: center;
    }
    
    .sidebar {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 1;
        top: 0;
        transform-origin: left;
        -webkit-transform-origin: left;
        text-align: center;
    }
    
    .right {
        position: absolute;
        height: 100%;
        width: 50%;
        background: #3b3b3f;
        z-index: 99999;
        right: 0;
        /*text-align: center;*/
    }
    
    ul {
        margin-top: 50%;
        /*margin-left: 12%;*/
    }
    
    li {
        /*margin-left: 24px;*/
        /*font-family: 'FZLTCXHJW--GB1-0';*/
        font-family: 'FZLTCXHJW';
    }
    span {
        display: block;
        border-radius: 2px;
        
    }
    .hb {
        line-height: 23px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .span {
        display: block;
        background: #fff;
        height: 2px;
        margin-top: 3px;
        width: 20px;
        /*border-radius: 2px 2px;*/
    }
    
    .span_a {
        width: 23px;
    }
    
    .span_b {
        width: 18px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
        border-radius: 2px;
    }
    
    .span_c {
        width: 23px;
        transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    
    .span_d {
        position: relative;
        width: 2px;
        height: 1.5em;
        background: white;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        display: inline-block;
        border-radius: 2px;
    }
    
    .span_d:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 1.5em;
        background: white;
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -o-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg);
        border-radius: 2px;
    }
    
    .title_one {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: normal;
        letter-spacing: 1px;
        margin-bottom: 15%;
    }
    
    .title_two {
        color: #a1a1a2;
        font-size: 0.9rem;
        font-weight: normal;
        letter-spacing: 1px;
        margin-top: 11%;
    }
    
    .title_one_bottom {
        margin-bottom: 15%!important;
    }
    
    .title_two_bottom {
        margin-bottom: 15%!important;
    }
</style>
