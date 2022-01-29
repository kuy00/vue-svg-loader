[![npm version](https://badge.fury.io/js/svg-loader-vue.svg)](https://badge.fury.io/js/svg-loader-vue)

# Vue.js svg loader

## Setup

package install
```bash
npm install --save svg-loader-vue
```

`main.js`
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import SvgLoader from 'svg-loader-vue'

const app = createApp(App)
app.use(SvgLoader)
```

## Usage

In a component that needs to load an svg file, use it as follows.
```vue
<template>
    <svg-loader :svgFile='peopleSvg' />
</template>

<script>
    import people from '@/assets/people.svg'

    export default {
        data: function () {
            return {
                peopleSvg: people,
            }
        }
    }
</script>
```

## Props
Styling must be set using props
```vue
<svg-loader 
    :svgFile='peopleSvg'
    width=100
    height=100
    fill='blue'
/>
```

| Name             | Type          | Default              | Description                                                                                                             |
| ---------------- | ------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| svgFile          | String        | null                 | Path of the svg file to load.                                                                                           |
| fill             | String        | 'black'              | color of svg element, can be string.                                                                                    |
| width            | Number        | svg original width   | Width of svg element, can be number.                                                                                    |
| height           | Number        | svg original height  | Height of svg element, can be number.                                                                                   |
| viewBox          | String        | svg original viewBox | Enlarge or reduce the size and position of the svg element.<br>Valid values: '0 0 16 16'                                |
