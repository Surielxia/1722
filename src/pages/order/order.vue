<template>
	<div>
		<order-header></order-header>
		<order-tickt :sightname="sightname" :price="price"></order-tickt>
    <order-num></order-num>
    <order-submit :sightname="sightname" :price="price"></order-submit>
	</div>
</template>

<script>
  import OrderHeader from './header'
  import OrderTickt from './tickt'
  import OrderNum from './num'
  import OrderSubmit from './submit'
  import axios from 'axios'
  export default {
    name: 'order',
    components: {
      OrderHeader,
      OrderTickt,
      OrderNum,
      OrderSubmit
    },
    data () {
      return {
        sightname: '',
        price: 1
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

<style>
  body{
    background: #f5f5f5
  }
</style>