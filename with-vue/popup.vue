<template>
  <div>
    <h2 class="text-center">
      Welcome to your
      <a href="https://www.plasmo.com" target="_blank">Plasmo</a> Extension!
    </h2>

    <div class="container">
      <button @click="decrement">-</button>
      <p>
        <b>{{ state.count }}</b>
      </p>
      <button @click="increment">+</button>
    </div>
  </div>
  <p v-if="state.action" class="action text-center">
    {{ state.action }}
  </p>
  <a href="https://docs.plasmo.com" target="_blank"> View Docs </a>
</template>

<style>
.container {
  min-width: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
}
.text-center {
  text-align: center;
}
.action {
  color: #470;
  font-weight: bold;
}
</style>

<script setup lang="ts">
import { reactive } from "vue"
import type { App } from "vue"

const state = reactive({ count: 0, action: null })

function increment() {
  state.count++
  state.action = "increment"
}

function decrement() {
  state.count--
  state.action = "decrement"
}

defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    // app.use
  }
})
</script>
