import './assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

import { globalComponents } from './components/global';

globalComponents.forEach(component => {
  app.component(component.name as string, component);
});

app
  .use(pinia)
  .use(router)
  .mount('#app');
