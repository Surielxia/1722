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
        let val = this.value
        if (val === 1) {
          this.value = 1
          this.notactive = true
        } else if (val > 1) {
          --this.value
          this.$bus.$emit('reduce', -1)
          this.notactive = false
          this.active = true
        } else {
          this.notactive = true
          this.active = true
        }
      },
      handleIncreaseClick (e) {
        let val = this.value
        if (val === 5) {
          this.value = 5
          this.active = false
        } else if (val < 5) {
          ++this.value
          this.$bus.$emit('increase', 1)
          this.active = true
          this.notactive = false
        } else {
          this.active = false
          this.notactive = false
        }
      },
      makeEvents () {
        this.$bus.$emit('change', this.value)
      }
    },
    updated () {
      this.makeEvents()
    }
  }
</script>

<style lang="stylus" scoped>
  .num
    overflow: hidden
    height: .64rem
    padding: .3rem .2rem
    margin-top: .2rem
    background: #fff
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
      overflow: hidden
      float: right
      .num-reduce
        float: left
        width: .56rem
        height: .56rem
        border: none
        font-size: .5rem
        line-height: .3rem
      .num-text
        float: left 
        width: .6rem
        height: .5rem
        text-align: center
      .num-increase
        float: right
        width: .56rem
        height: .56rem
        border: none
        font-size: .5rem
        line-height: .3rem
  .gray
    background: #f0f0f0
    color: #cad1d7
  .green
    background: #00afc7
    color: #fff
</style>