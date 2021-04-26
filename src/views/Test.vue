<!--
 * @Description:测试组件
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2021-04-26 17:17:25
 * @LastEditors: Wsl
 * @LastEditTime: 2021-04-26 17:17:37
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 1
    }
    return { count, increment }
  }
})
</script>
