import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home.vue';
import Gallery from '@/components/gallery.vue';
import About from '@/components/about.vue';
import Contact from '@/components/contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});
