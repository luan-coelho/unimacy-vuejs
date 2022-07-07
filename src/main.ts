import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import '@/assets/css/index.css';
import 'flowbite';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

library.add(faUserSecret, faUser, faGithubSquare);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
