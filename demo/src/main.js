import { createApp } from 'vue'
import App from './App.vue'
import SvgLoader from '../../dist/index.esm'

const app = createApp(App)
app.use(SvgLoader, { name: 'test' })
app.mount('#app')
