<template>
    <div class="score-box">
      <div class="score-content">
        <span class="iconfont">&#xe7a9;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#xe621;&#xe621;&#xe621;&#xe621;&#xe621;5.0分</span>
        <p class="open">1712381人评论</p>
        <span class="iconfont" style="float:right;">&#xe8f1;</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'index-score'
  }
</script>

<style lang="stylus" scoped>
  .score-box
    width 100%
    height 0.8rem
    background white
    position absolute
    top 6.1rem
    .score-content
      width 7.1rem
      height 100%
      margin 0 auto
      .iconfont
        line-height 0.8rem
        color #fcae64
      .open
        display inline-block
        margin-left 1rem
        font-size 0.18rem
        color #a1a1a1
        width 1.8rem
</style>