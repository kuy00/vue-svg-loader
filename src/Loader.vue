<template>
  <div>
    <svg
      :width='width || styles.width'
      :height='height || styles.height'
      :viewBox='viewBox || styles.viewBox'
      :fill='fill'
      v-html='svg'
    />
  </div>
</template>

<script>
import { fileLoad, getPath, getStyle } from './handler'

export default {
  name: 'svg-loader',
  props: {
    svgFile: {
      type: String,
      defualt: '',
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    viewBox: {
      type: String,
    },
    fill: {
      type: String,
      defualt: 'black',
    },
  },
  data: function () {
    return {
      svg: '',
      styles: {},
    }
  },
  mounted: function () {
    this.load()
  },
  methods: {
    load: async function () {
      const file = await fileLoad(this.svgFile)

      this.svg = getPath(file)
      this.styles = getStyle(file)
    },
  },
}
</script>
