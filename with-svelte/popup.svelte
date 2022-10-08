<script lang="ts">
  export let count = 0
  let action: string = null
  function increment() {
    count += 1
    action = "increment"
  }
  function decrement() {
    count -= 1
    action = "decrement"
  }
</script>

<div>
  <h2 class="text-center">
    Welcome to your <a href="https://www.plasmo.com" target="_blank">Plasmo</a> Extension!
  </h2>
  <div class="container">
    <button on:click={decrement}>-</button>
    <p>Current count: <b>{count}</b></p>
    <button on:click={increment}>+</button>
  </div>
  {#if action}<p class="action text-center">{action}</p>{/if}
  <a href="https://docs.plasmo.com" target="_blank"> View Docs </a>
</div>

<style>
  .container {
    min-width: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 47px;
  }
  .action {
    color: #470;
    font-weight: bold;
  }
  .text-center {
    text-align: center;
  }
</style>
