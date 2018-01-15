<template>
  <div>
    <h2 class="scroll-header">
      热销推荐
    </h2>
    <div class="scroller" ref="scroller">
      <ul class="hot-con">
        <li>
          <img class="hot-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg">
          <div>
            <h4>故宫</h4>
            <p>fsdffffffffffffffff</p>
            <p>20<span>起</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'index-scroller',
    mounted () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.scroller)
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .scroll-header
    line-height .8rem
    height .8rem
    padding-left .26rem
    color #212121
    background #eee
  .scroller
    height 5rem
    overflow hidden
  .hot-img
    width 1.4rem
    height 1.4rem
</style>