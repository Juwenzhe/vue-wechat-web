// 新闻列表
var api = "http://manager.zcxiaolian.com/message/newsnoticelist?campusid=7&pageindex=1&pagesize=10&type=109"

var getNews = function getNews() {
    this.$http({
        method: 'post',
        url: api
    })
};

var newDetails = function newDetails(id, type) {
    this.$http({
        method: 'post',
        url: 'http://manager.zcxiaolian.com/message/newsnoticedetail?id=' + id,
    })
}

export {
    getNews, newDetails
}