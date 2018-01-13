<template>
	<div>
		<order-header></order-header>
		<order-tickt></order-tickt>
    <order-num></order-num>
	</div>
</template>

<script>
  import OrderHeader from './header'
  import OrderTickt from './tickt'
  import OrderNum from './num'
  export default {
    name: 'order',
    components: {
      OrderHeader,
      OrderTickt,
      OrderNum
    }
  }
</script>

<style></style>