<template>
  <div id='app'>
    <svg-loader
      :svgFile='peopleSvg'
      width=200
      height=200
      fill='blue'
    />
    <svg-loader
      :svgFile='vueSvg'
      width=100
      height=100
    />
    <svg-loader :svgFile='chatSvg' />
  </div>
</template>

<script>
import people from '@/assets/people.svg'
import chat from '@/assets/chat.svg'
import vue from '@/assets/vue.svg'

export default {
  name: 'app',
  data: function () {
    return {
      peopleSvg: people,
      chatSvg: chat,
      vueSvg: vue,
    }
  },
}
</script>
