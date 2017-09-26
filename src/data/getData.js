import axios from 'axios'
// 新闻列表
// var api = "http://manager.zcxiaolian.com/message/newsnoticelist?campusid=7&pageindex=1&pagesize=10&type=109"
// http://manager.zcxiaolian.com/message/newsnoticelist

var getNews = function getNews(pageindex) {
    return axios.post('http://manager.zcxiaolian.com/message/newsnoticelist',{
        campusid: 7,
        pageindex: pageindex,
        pagesize: 10,
        type: 109
    })
};

var newDetails = function newDetails(id, type) {
    // 使用别名方法
    axios.post('http://manager.zcxiaolian.com/message/newsnoticedetail', {
        id: id
    }).then(datas => location.href = datas.data.data.content)
    // axios({
    //     method: 'post',
    //     url: 'http://manager.zcxiaolian.com/message/newsnoticedetail',
    //     data: {
    //         id: id
    //     }
    // }).then(datas => location.href = datas.data.data.content)
}

export {
    getNews, newDetails
}