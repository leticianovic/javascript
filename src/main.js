import { createApp } from 'vue';
import App from './App.vue';
import Serie from './Serie.vue';

const app = createApp(App)
app.mount('#app')

const serie = createApp(Serie)
serie.mount('#serie')