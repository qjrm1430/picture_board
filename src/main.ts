import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

loadFonts();
const pinia = createPinia().use(piniaPluginPersistedstate);

createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
