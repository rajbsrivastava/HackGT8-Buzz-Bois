import { createApp } from 'vue/dist/vue.esm-bundler';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './styles/styles.css';

import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from 'firebase/app'

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

const app = createApp(App)
app.use(router)
app.use(Quasar, quasarUserOptions)
app.use(store)
app.mount('#app');
