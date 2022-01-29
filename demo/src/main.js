import { createApp } from 'vue'
import App from './App.vue'
import SvgLoader from '../../dist/index.esm'

const app = createApp(App)
app.use(SvgLoader)
app.mount('#app')
