import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

// const SideBar = function SideBar(r) {
//   return require.ensure([], function () {
//     return r(require('../components/SideBar'));
//   }, 'SideBar');
// }

const ZCBoutique = function ZCBoutique(r) {
  return require.ensure([], function () {
    return r(require('../components/ZCBoutique'));
  }, 'ZCBoutique');
}
const TopHeader = function TopHeader(r) {
  return require.ensure([], function () {
    return r(require('../components/TopHeader'));
  }, 'TopHeader');
}

const HomeSchool = function HomeSchool(r) {
  return require.ensure([], function () {
    return r(require('../components/HomeSchool'));
  }, 'HomeSchool');
}

const SmartBracelet = function SmartBracelet(r) {
  return require.ensure([], function () {
    return r(require('../components/SmartBracelet'));
  }, 'SmartBracelet');
}

const IntelligentManagement = function IntelligentManagement(r) {
  return require.ensure([], function () {
    return r(require('../components/IntelligentManagement'));
  }, 'IntelligentManagement');
}

const AboutUS = function AboutUS(r) {
  return require.ensure([], function () {
    return r(require('../components/AboutUS'));
  }, 'AboutUS');
}

const ClassCard = function ClassCard(r) {
  return require.ensure([], function () {
    return r(require('../components/ClassCard'));
  }, 'ClassCard');
}

const News = function News(r) {
  return require.ensure([], function () {
    return r(require('../components/News'));
  }, 'News');
}

const NewDetails = function NewDetails(r) {
  return require.ensure([], function () {
    return r(require('../components/NewDetails'));
  }, 'NewDetails');
}

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [
    {
      path: '',
      redirect: '/TopHeader'
    },
    {
      path: '/NewDetails',
      name: 'NewDetails',
      component: NewDetails
    },
    {
      path: '/TopHeader',
      component: TopHeader,
      children: [
        {
          path: '',
          redirect: '/TopHeader/ZCBoutique'
        },
        {
          path: 'ZCBoutique',
          component: ZCBoutique
        },
        {
          path: 'HomeSchool',
          component: HomeSchool
        },
        {
          path: 'SmartBracelet',
          component: SmartBracelet
        },
        {
          path: 'IntelligentManagement',
          component: IntelligentManagement
        },
        {
          path: 'AboutUS',
          component: AboutUS
        },
        {
          path: 'ClassCard',
          component: ClassCard
        },
        {
          path: 'News',
          component: News
        }

      ]
    }
  ]
}

  // {
  //   path: '/ZCBoutique',
  //   component: ZCBoutique
  // }
]
