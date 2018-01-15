<template>
  <div class="order-submit">
    <div class="submit-left">
      <span class="submit-price">产品价格￥<i>{{totleprice}}</i>︿</span>
    </div>
    <div class="submit-right">
      <button class="submit-btn">提交订单</button>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'order-submit',
      props: {
        sightname: String,
        price: Number
      },
      data () {
        return {
          value: 1
        }
      },
      computed: {
        totleprice () {
          return this.price * this.value
        }
      },
      methods: {
        bindEvents () {
          this.$bus.$on('change', this.handlePriceChange.bind(this))
        },
        handlePriceChange (value) {
          this.value = value
        }
      },
      mounted () {
        this.bindEvents()
      }
    }
</script>

<style lang="stylus" scoped>
  .order-submit
    width: 100%
    height: 1rem
    display: flex
    position: fixed
    bottom: 0px
    left: 0px
    justify-content: space-between
    border-top: 1px solid #cc;
    .submit-left
       flex: 1
       background: #fff
      .submit-price
        height: 1rem
        font-size: 0.32rem
        color: #ff9700
        line-height: 1rem
        margin-left: 0.3rem
        i
         font-size: 0.45rem
    .submit-right
      flex: 1
      height: 1rem
      .submit-btn
        height:1rem
        width: 100%
        background: #ff9700
        border: none
        font-weight: bold;
        color: #fff;
        font-size: 0.4rem
</style>