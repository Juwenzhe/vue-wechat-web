<template>
    <div id="news">
        <img class="title" src="../static/news_title.png" alt="">
    
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-on:click="jump(index, item.id, item.contenttype)" v-for="(item,index) in news" v-bind:key="item">
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
        <!-- <p v-show="loading" class="page-infinite-loading">
            <mt-spinner type="fading-circle"></mt-spinner> -->
            <div v-show="loading" class="loader">
                <div class="loader-inner line-scale-party" > 
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        <!-- </p> -->
    </div>
</template>

<script>
    import { getNews, newDetails } from "../data/getData"

    export default {
        data() {
            return {
                loading: false,
                loadState: false,
                scrolState: true,
                news: [

                ],
                middle: [],
                newsData: [],
                newsImgState: '',
                contents: {},
                pageIndex: 0,
                scrollDisable: false
            }
        },
        created() {
            document.title = "新闻动态";
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        mounted() {
            getNews(this.pageIndex).then(data => this.news = data.data.data)
            // window.addEventListener('scroll', this.loadMore);
            
        },
        computed: {

        },
        methods: {
            loadMore() {
                this.loading = true;
                this.pageIndex = this.pageIndex + 1;
                getNews(this.pageIndex).then(data => this.middle = data.data.data);
                this.news.push(...this.middle);
                
                var self = this;
                setTimeout(() => {
                    // let last = this.news[this.news.length - 1];
                    // for (let i = 1; i <= 10; i++) {
                    // }
                    this.loading = false;
                }, 2500);
            },
            // loadMore() {
            //     if (document.body.scrollTop == document.body.scrollHeight - document.body.clientHeight) {
            //         getNews(this.pageIndex).then(data => this.middle = data.data.data);
            //         this.scrollDisable = true;
            //         this.pageIndex = this.pageIndex + 1;
            //         var self = this;
            //         setTimeout(function() {
            //             self.scrollDisable = false;
            //             self.news.push(...self.middle);
            //             console.log(self)
            //         }, 1000)

            //         // this.loading()
            //     }
            // },
            // loading() {
            //     setTimeout(function () {
            //         this.scrollDisable = false;
            //         console.log('xxxx' + this.scrollDisable)
            //     }, 3000)
            // },
            jump: function (index, id, type) {
                if (type === 1) {
                    this.$router.push({ name: 'NewDetails', params: { id: id, type: type } })
                } else if (type === 2) {
                    newDetails(id, type);
                }
            }
        }
    }
</script>

<style >
    #news {
        position: relative;
        width: 100%;
        /*height: 100%;*/
        margin-top: 14%;
    }
    
    .loader-inner>div {
        background: rgba(0, 0, 0, 0.5);
        width: 8px;
        height: 8px;
    }
    
    .loader {
        width: 100%;
        position: relative;
        margin: 0 auto;
        text-align: center;
        height: 40px;
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
