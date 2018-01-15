<template>
	<div>
		<order-header></order-header>
		<order-tickt></order-tickt>
	</div>
</template>

<script>
  import OrderHeader from './header'
  import OrderTickt from './tickt'
  export default {
    name: 'order',
    components: {
      OrderHeader,
      OrderTickt
    }
  }
</script>

<style></style>