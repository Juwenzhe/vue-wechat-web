<template>
    <div id="news">
        <img class="title" src="../static/news_title.png" alt="">
        <ul>
            <!--<router-link :to="{name: 'NewDetails', params:{id: item.id, type: item.contenttype}}" v-for="item in news.data" v-bind:key="item" tag="li">-->
            <li v-on:click="jump(index, item.id, item.contenttype)" v-for="(item,index) in news.data" v-bind:key="item">
                <div class="content">
                    <div class="news_title">
                        <p class="p_title">{{ item.title.split('=')[0] }}</p>
                        <p class="create_time">{{ item.publishtime }}</p>
                    </div>
                    <div class="news_img" v-show="item.thumbnailsurl != ''">
                        <img v-bind:src="item.thumbnailsurl" alt="">
                    </div>
                    <div class="news_content">
                        <p class="p_content">{{ item.title.split('=')[1] }}</p>
                    </div>
                </div>
            </li>
            <br>
        </ul>
    
    </div>
</template>

<script>
    // import {getNews} from "../data/getData"
    export default {
        data() {
            return {
                news: {},
                newsImgState: '',
                contents: {}
            }
        },
        created() {
            document.title = "新闻动态";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        mounted() {
            this.$http({
                method: 'post',
                url: 'http://manager.zcxiaolian.com/message/newsnoticelist?campusid=7&pageindex=1&pagesize=10&type=109'
            }).then(data => this.news = data.data)
        },
        methods: {
            jump: function (index, id, type) {
                if (type === 1) {
                    this.$router.push({ name: 'NewDetails',params: { id: id, type: type }})
                } else if (type === 2) {
                    this.$http({
                        method: 'post',
                        url: 'http://manager.zcxiaolian.com/message/newsnoticedetail?',
                        data: {
                            id: id
                        }
                    }).then(datas => location.href = datas.data.data.content);
                    // this.$http({
                    //     method: 'post',
                    //     url: 'http://manager.zcxiaolian.com/message/newsnoticedetail?',
                    //     data: {
                    //         id: id
                    //     }
                    // }).then(function(datas){
                    //     location.href = datas.data.data.content;
                    // }.bind(this));
                    // console.log(_self.contents.content)
                }
            }
        },
        conputed() {
            // 判断新闻有没有缩略图

        }
    }
</script>

<style scoped>
    #news {
        position: relative;
        width: 100%;
        /*height: 100%;*/
        margin-top: 15%;
    }
    
    .title {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .content {
        width: 90%;
        margin: 0 auto;
        box-shadow: 0 8px 5px rgba(224, 237, 248, 0.6),
        -3px 0 5px rgba(224, 237, 248, 0.6),
        3px 0 5px rgba(224, 237, 248, 0.6),
        0 0 5px rgba(224, 237, 248, 0.6);
    }
    
    .news_title {
        width: 100%;
        /*height: 100px;*/
        margin: 0 auto;
        position: relative;
        border-bottom: 1px solid #E3EFF9;
    }
    
    .news_content {
        width: 100%;
    }
    
    .news_content p {
        color: #858585;
        font-size: 1rem;
    }
    
    .news_img {
        width: 100%;
        margin-top: 1em;
    }
    
    .news_img img {
        width: 90%;
        display: block;
        margin: 0 auto;
    }
    
    .create_time {
        font-size: 0.9rem;
        color: #BCBCBC;
        width: 89%;
        display: block;
        margin: 0.6em auto;
        padding-bottom: 0.8em;
    }
    
    .p_title {
        font-size: 18px;
        display: block;
        padding: 20px 0 0 0;
        width: 90%;
        margin: 0 auto;
        /*text-align: justify;*/
    }
    
    .p_content {
        font-size: 0.8rem;
        display: block;
        padding: 20px 0;
        width: 90%;
        margin: 0 auto;
        line-height: 28px;
    }
    
    li {
        margin-bottom: 2em;
    }
</style>
