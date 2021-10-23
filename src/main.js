import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './styles/styles.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router).mount('#app');
