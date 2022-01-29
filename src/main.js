import Loader from './Loader.vue'
import { events } from './events'

export const SvgLoader = {
  install: (app, options) => {
    const name = options.name || 'svgLoader'
    app.config.globalProperties['$' + name] = (param) => {
      events.emit('add', param)
    }
    app.component('svg-loader', Loader)
  },
}
