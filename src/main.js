import Loader from './Loader.vue'
import { events } from './events'

const SvgLoader = {
  install: (app, options) => {
    const name = 'svgLoader'
    app.config.globalProperties['$' + name] = (param) => {
      events.emit('add', param)
    }
    app.component('svg-loader', Loader)
  },
}

export default SvgLoader
