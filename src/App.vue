<!--
 * @Description:
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2021-04-26 10:06:07
 * @LastEditors: Wsl
 * @LastEditTime: 2021-04-26 15:57:39
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    console.info('project create complete...')
    onMounted(() => {
      console.info('project init complete...')
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
