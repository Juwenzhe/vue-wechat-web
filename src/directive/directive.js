import Vue from 'vue';

const changeTitle = Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.innerTextel
        el.remove()
    }
})