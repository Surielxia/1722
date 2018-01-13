<template>
  <div>
    <visiter-num></visiter-num>
    <visiter></visiter>
  </div>
</template>

<script>
  import VisiterNum from './components/visiternum'
  import Visiter from './components/visiter'
  export default {
    name: 'order-num',
    components: {
      VisiterNum,
      Visiter
    }
  }
</script>

<style></style>