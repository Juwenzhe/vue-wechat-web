
window.onload = function () {
    var vm = new Vue({
        el: "#body",
        data: {
            state: true,
            listState: false,
            homeworkState: false,
            xuankeState: false
        },
        // mounted() {
        //     this.$refs.x.style.display = "none";
        // },
        methods: {
            changeState() {
                this.state = !this.state;
                // if(this.state) {
                //     this.$refs.three.style.display = "block";
                //     this.$refs.x.style.display = "none";
                // }else {
                //     this.$refs.x.style.display = "block";
                //     this.$refs.three.style.display = "none";
                // }
                
            },
            bindingState(){
                this.listState = !this.listState;
                this.homeworkState = false;
                this.xuankeState = false
            },
            changeHomeWorkState(){
                this.homeworkState = !this.homeworkState;
                this.listState = false
                this.xuankeState = false;
            },
            changexuankeState(){
                this.xuankeState = !this.xuankeState;
                this.homeworkState = false;
                this.listState = false
            }
         }
    });
    var mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow', //3d滑动
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        slidesPerView: 1.2,
        coverflow: {
            rotate: 0,  //设置为0
            stretch: -100,
            depth: 100,
            modifier: 0,
            slideShadows: true
        }
    });
    var mySwiper = new Swiper('.swiper-container2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow', //3d滑动
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        slidesPerView: 1.2,
        coverflow: {
            rotate: 0,  //设置为0
            stretch: -100,
            depth: 100,
            modifier: 0,
            slideShadows: true
        }
    });
    var mySwiper = new Swiper('.swiper-container3', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow', //3d滑动
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        slidesPerView: 1.2,
        coverflow: {
            rotate: 0,  //设置为0
            stretch: -100,
            depth: 100,
            modifier: 0,
            slideShadows: true
        }
    });
    var mySwiper = new Swiper('.swiper-container4', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'coverflow', //3d滑动
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        slidesPerView: 1.2,
        coverflow: {
            rotate: 0,  //设置为0
            stretch: -100,
            depth: 100,
            modifier: 0,
            slideShadows: true
        }
    });
   
}
