import { createApp } from 'vue';
import App from './App.vue';
import Serie from './Serie1.vue';
import Serie2 from './Serie2.vue';
import Serie3 from './Serie3.vue';

const app = createApp(App)
app.mount('#app')

const serie = createApp(Serie)
serie.mount('#serie1')

const serie2 = createApp(Serie2)
serie2.mount('#serie2')

const serie3 = createApp(Serie3)
serie3.mount('#serie3')