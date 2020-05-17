import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';
import LatestChanges from './components/LatestChanges';
import MakeRequest from './components/MakeRequest';
import RequestDetails from './components/RequestDetails';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/latestChanges',
      name:'latestChanges',
      component: LatestChanges
    },
    {
      path:'/makeRequest',
      name:'makeRequest',
      component: MakeRequest
    },
    { 
      path: '/request/:id',
      name: 'requestDetails',
      component: RequestDetails, 
      props: true 
    },

  ]
})