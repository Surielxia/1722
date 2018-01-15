<template>
    <div class="remd-box">
      <div class="box">
        <span class="iconfont">&#xe702;</span>
        <p class="remd-w">去哪儿推荐</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index-remd'
  }
</script>

<style lang="stylus" scoped>
  .remd-box
    width 100%
    height 0.88rem
    background white
    position absolute
    top 8.2rem
    border-bottom 1px solid #d9d9d9
    .box
      width 7.04rem
      height 0.88rem
      margin 0 auto
      .iconfont
        line-height 0.5rem
        text-align center
        display block
        margin-top 0.2rem
        width 0.5rem
        height 0.5rem
        background #f66c7b
        border-radius 50%
        color white
        float left
      .remd-w
        float left
        margin-left 0.2rem
        line-height 0.88rem
        font-size 0.35rem
</style>