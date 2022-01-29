import Loader from './Loader.vue'

const SvgLoader = {
  install: (app, options) => {
    app.component('svg-loader', Loader)
  },
}

export default SvgLoader
