<template>
  <div class="num">
    <div class="num-left">
      <p class="num-title">购买数量</p>
      <span class="num-explain">最多买5张</span>
    </div>
    <div class="num-right">
      <button class="num-reduce" 
      :class="[notactive==true ? gray : green]" 
      @click="handleReduceClick">-</button>
      <input type="text" class="num-text" :value="value" />
      <button class="num-increase" 
      :class="[active==true ? green : gray]" 
      @click="handleIncreaseClick">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'visiter-num',
    data () {
      return {
        value: 1,
        notactive: true,
        active: true,
        gray: 'gray',
        green: 'green'
      }
    },
    methods: {
      handleReduceClick (e) {
        var val = this.value
        if (val > 1) {
          this.value -= 1
          this.notactive = false
        } else {
          this.notactive = true
          this.active = true
        }
      },
      handleIncreaseClick (e) {
        var val = this.value
        if (val < 5) {
          this.value += 1
          this.active = true
        } else {
          this.active = false
          this.notactive = false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .num
    overflow: hidden
    height: .64rem
    padding: .3rem .2rem
    margin-top: .2rem
    background: red
    .num-left
      float: left
      .num-title
        float: left
        line-height: .64rem
        font-size: .3rem
        color: #616161
      .num-explain
        float: left
        margin-left: .2rem
        line-height: .6rem
        font-size: .28rem
        color: #ccc
    .num-right
      float: right
      .num-reduce
        float: left
        width: .56rem
        height: .56rem
        font-size: .5rem
        line-height: .3rem
      .num-text
        float: left
        width: .6rem
        height: .48rem
        text-align: center
      .num-increase
        float: right
        width: .56rem
        height: .56rem
        font-size: .5rem
        line-height: .3rem
  .gray
    background: #f0f0f0
    color: #cad1d7
  .green
    background: #00afc7
    color: #fff
</style>