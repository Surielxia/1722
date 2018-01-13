<template>
	<div>
		<order-header></order-header>
		<order-tickt :sightname="sightname" :price="price"></order-tickt>
    <order-num></order-num>
	</div>
</template>

<script>
  import OrderHeader from './header'
  import OrderTickt from './tickt'
  import OrderNum from './num'
  import axios from 'axios'
  export default {
    name: 'order',
    components: {
      OrderHeader,
      OrderTickt,
      OrderNum
    },
    data () {
      return {
        sightname: '',
        price: ''
      }
    },
    methods: {
      getOrderData () {
        axios.get('/api/order.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.sightname = data.sightname
        this.price = data.price
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getOrderData()
    }
  }
</script>

<style></style>