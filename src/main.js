import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GoogleSignInPlugin from "vue3-google-signin"

const app = createApp(App)

app.use(router);
app.use(GoogleSignInPlugin, {
    clientId: '887171956610-ir196icc0aeq91tmbdhchdv2kqcbgnhe.apps.googleusercontent.com',
  });

app.mount('#app')
