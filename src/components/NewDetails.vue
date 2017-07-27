<template>
    <div id="new_details">
        {{id}}{{$route.params.id}}
    </div>
</template>

<script>
    // import { newDetails } from "../data/getData"

    export default {
        data() {
            return {
                newsDetails:{},
                id: '',
                type: ''
            }
        },
        created() {
            this.id = this.$route.query.id;
            this.type = this.$route.query.type;
        },
        async beforeMount() {
            this.id = this.$route.params.id;
            this.type = this.$route.params.type;
        },
        mounted() {
            this.$http({
                method: 'post',
                url:'http://manager.zcxiaolian.com/message/newsnoticedetail?id='+ this.id + "pageindex=" + 1,
            }).then(data => this.newsDetails = data)
        },
    }
</script>

<style>
    
</style>
